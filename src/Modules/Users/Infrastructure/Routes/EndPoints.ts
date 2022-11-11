// *Infrastructure: you can import external things
//! Dependencies
import Express, { Router } from 'express';

import '../../../Authentication/Infrastructure/Passport/Jwt';
import { ControllerAuth } from '../../../Authentication/Infrastructure/Controller/Auth';

// ?Infrastructure
import { ControllerUserCreator } from '../Controllers/UserCreator';
import { ControllerUserReader  } from '../Controllers/UserReader';
import { ControllerUserUpdater  } from '../Controllers/UserUpdater';

import Joi from '../PreCondition/Joi';


// ?Domain
import { ROUTES } from '../../Domain/Enums/routes';
import { validationHandler } from '../../../../Utils/ValidationHandler';
import { passportAuthentication } from '../../../../Utils/Authentication';


export class Users {

	private readonly router: Router = Express.Router();
 
	private login(): void {
		this.router.post(ROUTES.LOGIN, new ControllerAuth().auth);
	}

	private add(): void { //AUTHENTICATION DISABLED FOR YOU CAN CREATE USER AND TESTING
		this.router.post(ROUTES.ADD, validationHandler(Joi.addUser,'body'), ControllerUserCreator.create);
	}

	private get(): void {
		this.router.get(ROUTES.GET, passportAuthentication, ControllerUserReader.read);
	}

	private getById(): void {
		this.router.get(ROUTES.GET_BY_ID, passportAuthentication, validationHandler(Joi.getUser,'params'), ControllerUserReader.readByEmail);
	}

	private delete(): void{
		this.router.delete(ROUTES.DELETE, passportAuthentication, validationHandler(Joi.deleteUser,'body'), ControllerUserUpdater.delete);
	}

	private update(): void{
		this.router.patch(ROUTES.UPDATE, passportAuthentication, validationHandler(Joi.updateUser,'body'), ControllerUserUpdater.update);
	}

	// !due to is without authentication, is required to send idTemporalEmail
	private resetPassword(): void{
		this.router.patch(ROUTES.RESET_PASSWORD, validationHandler(Joi.resetPassword,'body'), ControllerUserUpdater.resetPassword);
	}

	public init(): Router{
		this.login();
		this.add();
		this.get();
		this.getById();
		this.delete();
		this.update();
		this.resetPassword();

		return this.router;
	}
}
