/* eslint-disable @typescript-eslint/no-explicit-any */
import { BasicStrategy } from 'passport-http';
import {ControllerUserReader} from '../../../Users/Infrastructure/Controllers/UserReader';

export class Basic extends BasicStrategy {

	// * take the email and password from http for execute login controller
	constructor(){
		super((userId: any, password: any, next: any) => {
			ControllerUserReader.login(userId, password, next);
		});
	}
    
}