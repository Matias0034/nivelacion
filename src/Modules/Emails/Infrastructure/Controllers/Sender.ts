//! Dependencies
import { Request, Response, NextFunction } from 'express';

// ?Utils
import { onSuccessResponse } from '../../../../Utils/onSuccessResponse';
import DbSequelize from '../../../../Utils/db';

// ?Domain
import { SendEmail } from '../../Domain/Models/SendEmail';
import { HTML_RESET_PASSWORD } from '../../Domain/Enums/Htmls';
import { SUBJECTS } from '../../Domain/Enums/Subjects';
import { TemporalEmail } from '../../Domain/Models/TemporalEmail';
import { Email } from '../../../Users/Domain/Models/Email';

// ?Application
import { EmailSender } from '../../Application/EmailSender';
import { TemporalEmailCreator } from '../../Application/TemporalEmailCreator';

// ?Infrastructure
import { RepositorySendgridProcessorSender } from '../Processors/Network/RepositorySengridProcessorSender';
import { SQLRepositoryProcessor as EmailSQLRepositoryProcessor } from '../Processors/SQL/RepositoryProcessor';
import { Schema as emailSchema } from '../Schemas/Sequelize';
import { Schema as userSchema } from '../../../Users/Infrastructure/Schemas/Sequelize';
import { SQLRepositoryProcessor as UserSQLRepositoryProcessor } from '../../../Users/Infrastructure/Processors/SQL/RepositoryProcessor';


export class ControllerSender {
	static async SendEmailToResetPasswordUser(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const destiny = new Email(req.params.email);
			const temporalEmail = new TemporalEmail(destiny);

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const from: any = process.env.SENGRID_EMAIL;

			const email = new SendEmail({
				to: destiny,
				from: new Email(from),
				html: HTML_RESET_PASSWORD(temporalEmail),
				subject: SUBJECTS.RESET_PASSWORD
			});


			const emailSQLRepositoryProcessor = new EmailSQLRepositoryProcessor(new emailSchema(DbSequelize));


			await new EmailSender(email, new UserSQLRepositoryProcessor(new userSchema(DbSequelize)), new RepositorySendgridProcessorSender())
				.send();

			await new TemporalEmailCreator(temporalEmail, emailSQLRepositoryProcessor)
				.create();

			onSuccessResponse(req, res, { response: true }, 200);
		} catch (err) { next(err); }
	}

}
