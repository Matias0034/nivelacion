//! Dependencies
import Joi from '@hapi/joi';

export default {

	resetProfilePassword: Joi.object({
		email: Joi.string().required(),
		code: Joi.number().required()
	}),

	emailPasswordRequest: Joi.object({
		email: Joi.string().email().required()
	})
};
