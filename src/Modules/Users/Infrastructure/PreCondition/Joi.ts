// !Dependencies
import Joi from 'joi';

const pass = Joi.string().min(8).required();
const name = Joi.string().required();
const email = Joi.string().email().required();
export default {

	addUser: Joi.object({
		name: name,
		email: email,
		password: pass
	}),

	loginUser: Joi.object({
		email: email,
		password: pass
	}),

	getUser: Joi.object({
		email: email
	}),

	updateUser: Joi.object({
		id: Joi.number().required(),
		name: name,
		email: email
	}),

	deleteUser: Joi.object({
		email: email
	}),

	resetPassword: Joi.object({
		email: email,
		password: pass,
		idTemporalEmail: Joi.number().required() //parameter of security 
	})
};