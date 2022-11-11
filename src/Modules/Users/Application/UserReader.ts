/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserRepository } from '../Domain/Contracts/UserRepository';
import { Email } from '../Domain/Models/Email';

export class UsersReadeByEmail {
	private UserRepository: UserRepository;

	constructor(UserRepository: UserRepository){
		this.UserRepository = UserRepository;
	}

	private ifExists(user: object | null): void{
		if(user === null){
			throw new Error('User was not found in the database');
		}
	}
    
	public async read(email: Email): Promise<any>{
		const user = await this.UserRepository.readUserByEmail(email);
		this.ifExists(user);
		return user;
	}
}