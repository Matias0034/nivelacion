/* eslint-disable @typescript-eslint/no-explicit-any */
import boom from '@hapi/boom';
import { Response, NextFunction } from 'express';

function validate(data: any, schema: any) {
	const { error } = schema.validate(data);
	return error;
}

// * Validate preConditions schemas
export const validationHandler = (schema: any, check: any) => {
	return function (req: any, res: Response, next: NextFunction) {
		const err = validate(req[check], schema);
		err ? next(boom.badData(err)) : next();
	};
};
