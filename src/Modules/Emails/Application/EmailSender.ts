// ?Domain
import { SendEmail } from '../Domain/Models/SendEmail';
import { EmailRepositorySender } from '../Domain/Contracts/EmailSender';
import { UserRepository  } from '../../Users/Domain/Contracts/UserRepository';
import { ERROR_MESSAGE } from '../Domain/Enums/ErrorMessage';
import { Email } from '../../Users/Domain/Models/Email';

export class EmailSender {
	private readonly SendEmail: SendEmail;
	private readonly UserRepository: UserRepository;
	private readonly Transport: EmailRepositorySender;

	constructor (SendEmail: SendEmail, UserRepository: UserRepository, Transport: EmailRepositorySender) {
		this.SendEmail = SendEmail;
		this.UserRepository = UserRepository;
		this.Transport = Transport;
	}

	//* "To" is the email of User
	private async dataUser (): Promise<boolean> {
		return await this.UserRepository.readUserByEmail(new Email(this.SendEmail.generateEmail().to));
	}

	private async condition(){
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: any = await this.dataUser();
		
		if(!data){
			throw new Error(ERROR_MESSAGE.EMAIL_NOT_FOUND);
		}
		if(data.status === true){
			throw new Error(ERROR_MESSAGE.USER_BLOCKED);
		}	
	}

	public async send (): Promise<void> {
		await this.condition();
		await this.Transport.Send(this.SendEmail);
	}
}
