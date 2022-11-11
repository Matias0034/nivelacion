/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { Email } from '../../Users/Domain/Models/Email';
import { EmailRepository } from '../Domain/Contracts/EmailRepository';

export class CodeToResetPasswordVerifier {
	private readonly EmailRepository: EmailRepository;

	constructor (EmailRepository: EmailRepository) {
		this.EmailRepository = EmailRepository;
	}

	public async verify (email: Email, code: number): Promise<any> {
		const data = await this.EmailRepository.checkCodeToResetPassword(email, code);

		if(!data){
			throw new Error('The code or email is incorrect');

		}
    
		if(data.status === true){
			throw new Error('your code already was verified');
		}
		const dataResult = await this.EmailRepository.readTemporalEmail({ email, code });
		await this.EmailRepository.finishTemporalEmail(email);

		return {
			id: dataResult.id,
			email: dataResult.email
		};

	}
}
