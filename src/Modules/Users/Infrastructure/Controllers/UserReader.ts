/* eslint-disable @typescript-eslint/no-explicit-any */
//! Dependencies
import { NextFunction, Request, Response } from 'express';


//? Utils
import { onSuccessResponse } from '../../../../Utils/onSuccessResponse';
import DbSequelize from '../../../../Utils/db';

// ?Application
import { UsersReadeByEmail  } from '../../Application/UserReader';
import { UsersReader        } from '../../Application/UsersReader';

// ?Domain
import { Email } from '../../Domain/Models/Email';

// ?Infrastructure
import { SQLRepositoryProcessor } from '../Processors/SQL/RepositoryProcessor';
import { Schema } from '../Schemas/Sequelize';
import { Logger } from '../../Application/Logger';
import { VerifierEncrypter } from '../../../../Utils/VerifierEncrypter';

export class ControllerUserReader {

	public static async read(req: Request, res: Response, next: NextFunction) {
		try {

			const dataResult = await new UsersReader(new SQLRepositoryProcessor(new Schema(DbSequelize)))
				.read();

			onSuccessResponse(req, res, dataResult, 200);

		} catch (err) { next(err); }
	}

	public static async readByEmail(req: Request, res: Response, next: NextFunction) {
		try {

			const dataResult = await new UsersReadeByEmail(new SQLRepositoryProcessor(new Schema(DbSequelize)))
				.read(new Email(req.params.email));

			onSuccessResponse(req, res, dataResult, 200);

		} catch (err) { next(err); }
	}

	public static async login(email: string, password: string, next: any) {
		try {
			const dataResult = await new Logger(new SQLRepositoryProcessor(new Schema(DbSequelize)), new VerifierEncrypter(password))
				.authenticate(new Email(email));

			next(null, dataResult);
		} catch (err) { next(err); }
	}
}