// ?Domain
import { ValueObject } from '../../../Users/Domain/Models/ValueObject';
import { Conf } from '../Contracts/Props/Conf';

export class HostEmail extends ValueObject<Conf> {
	private readonly value: Conf;

	constructor (config: Conf) {
		super(config);
		this.value = config;
	}

	public prepareEmail (): object {
		return {
			host: this.value.host,
			port: this.value.port,
			secure: this.value.secure,
			auth: {
				user: this.value.user,
				pass: this.value.pass
			}
		};
	}
}
