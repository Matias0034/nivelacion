// !Dependencies
import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';

export class Encrypter {

	public static async toEncrypt(anyEncrypt: string) {
		if (anyEncrypt) {
			return await bcrypt.hash(anyEncrypt, 5);
		}else{
			throw Boom.badData('Something has failed');
		}
	}
}