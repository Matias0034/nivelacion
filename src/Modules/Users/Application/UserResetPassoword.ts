/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { EmailRepository } from '../../Emails/Domain/Contracts/EmailRepository';
import { UserRepository } from '../Domain/Contracts/UserRepository';
import { Email } from '../Domain/Models/Email';

export class UserResetPassword {
	private UserRepository: UserRepository;
	private EmailRepository: EmailRepository;

	constructor(UserRepository: UserRepository, EmailRepository: EmailRepository){
		this.UserRepository = UserRepository;
		this.EmailRepository = EmailRepository;
	}

	public async reset(idTemporalEmail: number, email: Email, password: string): Promise<void>{
		const check = await this.EmailRepository.checkIdToPassChange(idTemporalEmail, email);
		if(!check){
			throw new Error('Your IdTemporalEmail cannot match with your email');
		}
		await this.UserRepository.resetPassword(email, password);

		await this.EmailRepository.eliminateTemporalEmail(idTemporalEmail);
	}
}