// ?Domain
import { ValueObject } from './ValueObject';
import { UserPropUpdater } from '../Properties/UserUpdater';
import { Primitives } from '../Properties/Primitives';

export class modeUpdate extends ValueObject<UserPropUpdater> {
    
	private readonly userAdder: UserPropUpdater;

	constructor(userAdder: UserPropUpdater){
		super(userAdder);
		this.userAdder = userAdder;
	}

	public get(): Primitives<UserPropUpdater> { 
		return {
			name: this.userAdder.name,
			email: this.userAdder.email.value,
			updatedAt: this.userAdder.updatedAt
		};
	}
}