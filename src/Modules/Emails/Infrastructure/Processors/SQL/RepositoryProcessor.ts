// ?Domain
import { Email } from '../../../../Users/Domain/Models/Email';
import { EmailRepository } from '../../../Domain/Contracts/EmailRepository';
import { TemporalEmail } from '../../../Domain/Models/TemporalEmail';


// ?Infrastructure
import { EmailQueries } from '../../Stores/SQL/Queries';

export class SQLRepositoryProcessor extends EmailQueries implements EmailRepository {

	public async eliminateTemporalEmail (idTemporalEmail: number) {
		await this.deleteTemporalEmail(idTemporalEmail);
	}

	public async checkIdToPassChange (idTemporalEmail: number, email: Email) {
		return await this.verifyIdToPassChange(idTemporalEmail, email);
	}
	public async createTemporalEmail (temporalEmail: TemporalEmail) {
		await this.addTemporalEmail(temporalEmail);
	}

	public async readTemporalEmail ({ email, code }: { email: Email, code: number }) {
		return await this.getTemporalEmail({ email, code});
	}

	public async finishTemporalEmail (email: Email): Promise<void> {
		await this.disableTemporalEmail(email);
	}

	public async checkCodeToResetPassword (email: Email, code: number) {
		return await this.verifyCodeToResetPassword(email, code);
	}

}