import { Primitives } from '../Properties/Primitives';
import { UserProp } from '../Properties/UserAdder';
import { ValueObject } from './ValueObject';

export class UserAdder extends ValueObject<UserProp> {
	private readonly userAdder: UserProp;
 
	constructor(userAdder: UserProp){
		super(userAdder);
		this.userAdder = userAdder;
	}

	public get(): Primitives<UserProp> {
		const { email, name, password, status, createAt, updatedAt } = this.userAdder;
		return {
			name,
			email: email.value,
			password,
			status,
			createAt,
			updatedAt
		};
	}
}