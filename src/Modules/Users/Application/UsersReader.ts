/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserRepository } from '../Domain/Contracts/UserRepository';

export class UsersReader {
	private UserRepository: UserRepository;

	constructor(UserRepository: UserRepository){
		this.UserRepository = UserRepository;
	}

	public async read(): Promise<any>{
		return await this.UserRepository.readUsers();
	}
}