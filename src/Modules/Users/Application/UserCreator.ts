/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserRepository } from '../Domain/Contracts/UserRepository';
import { UserAdder } from '../Domain/Models/UserAdder';

export class UserCreator {
	private UserRepository: UserRepository;
	private User: UserAdder;

	constructor(UserRepository: UserRepository, User: UserAdder){
		this.UserRepository = UserRepository;
		this.User = User;
	}

	public async create(): Promise<any> {
		await this.UserRepository.createUser(this.User);
	}
}