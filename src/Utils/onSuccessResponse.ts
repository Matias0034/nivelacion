/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

//** dataResult is the response with the data requested
//** status is the http status response
export function onSuccessResponse(req: Request, res: Response, dataResult: any, status: number): void{
	res.status(status).send({
		body: dataResult,
		status
	});
}