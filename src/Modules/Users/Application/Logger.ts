/* eslint-disable @typescript-eslint/no-explicit-any */
import { VerifierEncrypter } from '../../../Utils/VerifierEncrypter';
import { UserRepository } from '../Domain/Contracts/UserRepository';
import { Email } from '../Domain/Models/Email';
import { LogUser } from '../Domain/Models/LogData';

export class Logger {
	private UserRepository: UserRepository;
	private VerifierEncrypter: VerifierEncrypter;

	constructor(UserRepository: UserRepository, VerifierEncrypter: VerifierEncrypter){
		this.UserRepository = UserRepository;
		this.VerifierEncrypter = VerifierEncrypter;
	}

	public async authenticate(email: Email): Promise<any> {
		const data = await this.UserRepository.readPassByEmail(email);

		if(!data){
			throw new Error('Unauthorized');
		}

		await this.VerifierEncrypter.verify(data.dataValues.password);

		const dataUser = await this.UserRepository.readUserByEmail(email);


		//DTO
		return new LogUser(dataUser).get();

	}
}