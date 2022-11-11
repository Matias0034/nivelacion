/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email } from '../../../Users/Domain/Models/Email';

export class TemporalEmail  {
	private readonly code: number;
	private readonly status: boolean;
	private readonly email: Email;

	constructor (email: Email) {
		this.code = this.codeGenerator();

		this.status = false; //status true: code verified
		this.email = email;
	}



	private codeGenerator (): number {
		const cha = '2346789';
		let code = '';
		for (let i = 0; i < 5; i++) code += cha.charAt(Math.floor(Math.random() * cha.length));
		return Number(code);
	}

	public getTemporalEmail (): any {
		return {
			email: this.email.value,
			code: this.code,
			status: this.status
		};
	}
}
