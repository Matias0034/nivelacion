/* eslint-disable @typescript-eslint/no-explicit-any */
// ?Domain
import { EmailRepositorySender } from '../../../Domain/Contracts/EmailSender';
import { SendEmail } from '../../../Domain/Models/SendEmail';

// !Dependencies
import sendgrid from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

export class RepositorySendgridProcessorSender implements EmailRepositorySender {
 
	public async Send(Email: SendEmail): Promise<void> {
		const API_KEY: any = process.env.SENGRID_API_KEY;
		sendgrid.setApiKey(API_KEY);
		await sendgrid.send(Email.generateEmail());
	}
}
