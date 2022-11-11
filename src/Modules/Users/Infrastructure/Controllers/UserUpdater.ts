//! Dependencies
import { NextFunction, Request, Response } from 'express';

//? Utils
import { onSuccessResponse } from '../../../../Utils/onSuccessResponse';
import DbSequelize from '../../../../Utils/db';

// ?Application
import { UserUpdater  } from '../../Application/UserUpdater';
import { UserDeleter } from '../../Application/UserDeleter';

// ?Domain
import { Email } from '../../Domain/Models/Email';
import { modeUpdate } from '../../Domain/Models/UserUpdater';

// ?Infrastructure
import { SQLRepositoryProcessor } from '../Processors/SQL/RepositoryProcessor';
import { SQLRepositoryProcessor as  EmailSQLRepositoryProcessor } from '../../../Emails/Infrastructure/Processors/SQL/RepositoryProcessor';
import { Schema  as UserSchema } from '../Schemas/Sequelize';
import { Schema  as EmailSchema } from '../../../Emails/Infrastructure/Schemas/Sequelize';
import { UserResetPassword } from '../../Application/UserResetPassoword';
import { Encrypter } from '../../../../Utils/Encrypter';

export class ControllerUserUpdater {

	public static async update(req: Request, res: Response, next: NextFunction) {
		try {


			const User = new modeUpdate({
				email: new Email(req.body.email),
				name: req.body.name,
				updatedAt: new Date
			});

			const dataResult = await new UserUpdater(new SQLRepositoryProcessor(new UserSchema(DbSequelize)), User)
				.update(req.body.id);

			onSuccessResponse(req, res, dataResult, 200);

		} catch (err) { next(err); }
	}

	public static async delete(req: Request, res: Response, next: NextFunction) {
		try {

			const dataResult = await new UserDeleter(new SQLRepositoryProcessor(new UserSchema(DbSequelize)))
				.delete(new Email(req.body.email));

			onSuccessResponse(req, res, dataResult, 200);

		} catch (err) { next(err); }
	}


	public static async resetPassword(req: Request, res: Response, next: NextFunction) {
		try {
			const userSchema = new UserSchema(DbSequelize);
			const emailSchema = new EmailSchema(DbSequelize);

			const dataResult = await new UserResetPassword(new SQLRepositoryProcessor(userSchema), new EmailSQLRepositoryProcessor(emailSchema))
				.reset(req.body.idTemporalEmail, new Email(req.body.email), await Encrypter.toEncrypt(req.body.password));

			onSuccessResponse(req, res, dataResult, 200);

		} catch (err) { next(err); }
	}
}