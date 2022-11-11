/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { UserRepository } from '../Domain/Contracts/UserRepository';
import { modeUpdate } from '../Domain/Models/UserUpdater';

export class UserUpdater {
	private UserRepository: UserRepository;
	private modeUpdate: modeUpdate;

	constructor(UserRepository: UserRepository, modeUpdate: modeUpdate){
		this.UserRepository = UserRepository;
		this.modeUpdate = modeUpdate; 
	}

	public async update(id: number): Promise<any>{
		return await this.UserRepository.updatedUserByEmail(id, this.modeUpdate);
	}
}