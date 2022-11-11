/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { UserRepository    } from '../../../Domain/Contracts/UserRepository';
import { Email      } from '../../../Domain/Models/Email';
import { UserAdder  } from '../../../Domain/Models/UserAdder';
import { modeUpdate  } from '../../../Domain/Models/UserUpdater';

// ?Infrastructure
import { UserQueries } from '../../Store/SQL/Queries';

export class SQLRepositoryProcessor extends UserQueries implements UserRepository {
    
	public async resetPassword (email: Email, password: string){
		await this.resetPassByEmail(email, password);
	}

	public async readPassByEmail(email: Email) {
		return await this.findPassByEmail(email);
	}

	public async createUser (User: UserAdder): Promise<void> {
		await this.create(User);
	}

	public async readUsers (): Promise<any> {
		return await this.findAll();
	}

	public async readUserByEmail (email: Email): Promise<any> {
		return await this.findByEmail(email);

	}

	public async updatedUserByEmail (id: number, UserUpdater: modeUpdate): Promise<any> {
		await this.patchUserByEmail(id, UserUpdater);
	}

	public async deleteUserByEmail (email: Email): Promise<any> {
		await this.deleteByEmail(email);
	}

}