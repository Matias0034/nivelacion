//! Dependencies
import { NextFunction, Request, Response } from 'express';
import { Encrypter } from '../../../../Utils/Encrypter';

//? Utils
import { onSuccessResponse } from '../../../../Utils/onSuccessResponse';
import DbSequelize from '../../../../Utils/db';

// ?Application
import { UserCreator        } from '../../Application/UserCreator';
import { UsersReadeByEmail  } from '../../Application/UserReader';

// ?Domain
import { Email     } from '../../Domain/Models/Email';
import { UserAdder } from '../../Domain/Models/UserAdder';

// ?Infrastructure
import { SQLRepositoryProcessor } from '../Processors/SQL/RepositoryProcessor';
import { Schema } from '../Schemas/Sequelize';


export class ControllerUserCreator {

	public static async create(req: Request, res: Response, next: NextFunction) {
		try {

			const repository = new SQLRepositoryProcessor(new Schema(DbSequelize));
			const email = new Email(req.body.email);

			await new UserCreator(repository, new UserAdder({
				email,
				name:     req.body.name,
				password: await Encrypter.toEncrypt(req.body.password),
				status:   true,
				createAt: new Date,
				updatedAt:new Date
			})).create();
            

			const dataResult = await new UsersReadeByEmail(repository).read(email);

			onSuccessResponse(req, res, dataResult, 200);

		} catch (err) { next(err); }
	}
}