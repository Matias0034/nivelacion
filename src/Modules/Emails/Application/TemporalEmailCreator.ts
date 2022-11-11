// ?Domain
import { EmailRepository } from '../Domain/Contracts/EmailRepository';
import { TemporalEmail } from '../Domain/Models/TemporalEmail';


export class TemporalEmailCreator {
	private readonly TemporalEmail: TemporalEmail;
	private readonly EmailRepository: EmailRepository;


	constructor (TemporalEmail: TemporalEmail, EmailRepository: EmailRepository) {
		this.TemporalEmail = TemporalEmail;
		this.EmailRepository = EmailRepository;

	}

	public async create (): Promise<void> {
		await this.EmailRepository.createTemporalEmail(this.TemporalEmail);
	}
}
