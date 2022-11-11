/* eslint-disable @typescript-eslint/no-explicit-any */
// !Dependencies
import Boom from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import { onSuccessResponse } from './onSuccessResponse';

//*error handler is a middleware of express that captures all error in the application whenever route is executed
//! It is important that this middleware is in the final position from another middleware
export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	// capture err while streaming
	if (res.headersSent) {
		next(err);
	}

	let response;
	let status;

	// *Condition is necessary for the format if is Boom format o pure forma in case there is an error unhandled
	if (err.output) {
		console.log(err);
      
		const {
			data,
			output: {
				statusCode,
				payload
			}
		} = err;
		status = statusCode;
		response = { data, payload };

	} else {
		const errorInternal = Boom.expectationFailed(err); //* external dependency that transform errors in http format to send to frontend
		console.log(err);
		const {
			output: {
				statusCode,
			}
		} = errorInternal;
		status = statusCode;
		response = errorInternal;
	}

	onSuccessResponse(req, res, response, status);
}

