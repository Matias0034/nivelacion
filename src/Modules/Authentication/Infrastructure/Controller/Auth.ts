/* eslint-disable @typescript-eslint/no-explicit-any */
//! Dependencies
import { NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

// ?Domain
import { Sign } from '../../Domain/Sign';
import { Basic } from '../Strategies/basic';

export class ControllerAuth {

	public auth(req: any, res: any, next: NextFunction) {
		const login = (req: any, res: any, user: any) =>{

			req.login(user, { session: false }, async (err: any) => {
				if (err) {
					throw Boom.conflict('Conflict produced trying authenticate');
				} 
				res.status(200).json({ access_token: new Sign(jwt, '30m').exec(user) });
                
			});
		};
		passport.use(new Basic());
		passport.authenticate('basic', (err, user) => err ? next(err) : login(req, res, user))(req, res, next);

	}
}