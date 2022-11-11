/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { UserRepository } from '../Domain/Contracts/UserRepository';
import { Email } from '../Domain/Models/Email';

export class UserDeleter {
	private UserRepository: UserRepository;

	constructor(UserRepository: UserRepository){
		this.UserRepository = UserRepository;
	}

	public async delete(email: Email): Promise<any>{
		return await this.UserRepository.deleteUserByEmail(email);
	}
}