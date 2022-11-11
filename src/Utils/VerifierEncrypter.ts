/* eslint-disable @typescript-eslint/no-explicit-any */
//!Dependencies
import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';

export class VerifierEncrypter{

	private value: string;

	constructor(value: string){
		this.value = value;
	}
 
	public async verify(encrypted: any): Promise<void> {
		if (encrypted) {
			if (await bcrypt.compare(this.value, encrypted) === false) {
				throw Boom.unauthorized('the password is incorrect');
			}
		} else {
			throw Boom.unauthorized('the password is incorrect');
		}
	}
}