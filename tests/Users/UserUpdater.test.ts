/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email } from '../../src/Modules/Users/Domain/Models/Email';
import { modeUpdate } from '../../src/Modules/Users/Domain/Models/UserUpdater';

const email = 'zerodata.aolink@outlook.com';
const name = 'Matias';
const date = new Date;



describe('Check user update model class, business logic', () => {

	test('it should gets primitives data', ()=> {
		const User = new modeUpdate({
			email: new Email(email),
			name,
			updatedAt: date
		});
    
		expect(User.get()).toEqual({
			email,
			name,
			updatedAt: date
		});
	});

});
    