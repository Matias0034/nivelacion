/* eslint-disable @typescript-eslint/no-explicit-any */
// !Dependencies
import boom from '@hapi/boom';
import passport from 'passport';
import jwt from 'passport-jwt';
import dotenv from 'dotenv';


import DbSequelize from '../../../../Utils/db';
dotenv.config();

// ?Infrastructure
import { Schema } from '../../../Users/Infrastructure/Schemas/Sequelize';

const jwtFromRequest = jwt.ExtractJwt.fromAuthHeaderAsBearerToken();

passport.use(new jwt.Strategy({ secretOrKey: process.env.AUTH_JWT_SECRET, jwtFromRequest }, async (tokenPayload: any, cb: any) => {
	try {
		if (tokenPayload.data.email !== undefined) {

    
			// !STATUS GET FROM TOKEN AND STATUS FROM DATABASE OF USER MUST TO MATCH
			const dataResult: any = await new Schema(DbSequelize).createSchema().findOne({ where: {
				email: tokenPayload.data.email, name: tokenPayload.data.name,
			}});

			if(dataResult.status === true){
				throw new Error('Your account is blocked');
			}
			
			cb(null, dataResult);

		} else { cb(boom.unauthorized(), false); }


	} catch (err) { 
		return cb(boom.unauthorized(), false);}
})); 

