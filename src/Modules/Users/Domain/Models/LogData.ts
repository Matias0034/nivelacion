import { Constants } from '../Enums/constants';
import { UserLog } from '../Properties/Generics';
import { Primitives } from '../Properties/Primitives';
import { LogProp } from '../Properties/UserReader';
import { ValueObject } from './ValueObject';

export class LogUser extends ValueObject<LogProp> {
	private readonly userAdder: LogProp;
 
	constructor(userAdder: LogProp){
		super(userAdder);
		this.userAdder = userAdder;
		this.status();
	}


	private status(): void{
		if(this.userAdder.status === true){
			throw new Error(Constants.BLOCKED);
		}
	}

	public get(): Primitives<UserLog> {
		return {
			name: this.userAdder.name,
			email: this.userAdder.email
		};
	}
}