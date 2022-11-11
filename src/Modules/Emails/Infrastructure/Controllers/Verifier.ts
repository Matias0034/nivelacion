//! Dependencies
import { NextFunction, Request, Response } from 'express';

// ?Utils
import DbSequelize from '../../../../Utils/db';
import { onSuccessResponse } from '../../../../Utils/onSuccessResponse';

// ?Infrastructure
import { SQLRepositoryProcessor } from '../Processors/SQL/RepositoryProcessor';
import { Schema as emailSchema } from '../Schemas/Sequelize';

// ?Application
import { CodeToResetPasswordVerifier } from '../../Application/CodeToResetPasswordVerifier';


// ?Domain
import { Email } from '../../../Users/Domain/Models/Email';


export default {

	//* It verify code for authenticate the correct user to reset password
	async verifyCodeToAuthenticate (req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const dataResult = await new CodeToResetPasswordVerifier(
				new SQLRepositoryProcessor(new emailSchema(DbSequelize)))
				.verify(new Email(req.body.email ), req.body.code);

			onSuccessResponse(req, res, dataResult, 200);
		} catch (err) { next(err); }
	}
};
