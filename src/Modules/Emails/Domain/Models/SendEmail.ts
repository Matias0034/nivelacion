/* eslint-disable @typescript-eslint/no-explicit-any */
import { ValueObject } from '../../../Users/Domain/Models/ValueObject';
import { Primitives } from '../../../Users/Domain/Properties/Primitives';
import { Send } from '../Contracts/Props/Send';

export class SendEmail extends ValueObject<Send> {
	private readonly Send: Send;

	constructor (send: Send) {
		super(send);
		this.Send = send;
	}

	public generateEmail (): Primitives<Send> {
		return {
			from: this.Send.from.value,
			to: this.Send.to.value,
			subject: this.Send.subject,
			html: this.Send.html
		};
	}
}
