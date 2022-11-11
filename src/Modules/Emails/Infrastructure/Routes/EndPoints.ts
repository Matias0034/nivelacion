//! Dependencies
import Express, { Router } from 'express';

// ?Utils
import { validationHandler } from '../../../../Utils/ValidationHandler';

// ?Infrastructure
import { ControllerSender } from '../Controllers/Sender';
import ControllerVerifier from '../Controllers/Verifier';
import Joi from '../PreConditions/Joi';

// ?Domain
import { EMAIL } from '../../Domain/Enums/EndPoints';


export class Emails {

	private readonly router: Router = Express.Router();

	private PASSWORD_REQUEST(): void {
		this.router.get(EMAIL.EMAIL_PASSWORD_REQUEST, validationHandler(Joi.emailPasswordRequest, 'params'), ControllerSender.SendEmailToResetPasswordUser);
	}

	private VERIFY_CODE(): void {
		this.router.post(EMAIL.VERIFY_CODE, validationHandler(Joi.resetProfilePassword, 'body'), ControllerVerifier.verifyCodeToAuthenticate);
	}

	public init(): Router {
		this.PASSWORD_REQUEST();
		this.VERIFY_CODE();

		return this.router;
	}

}

