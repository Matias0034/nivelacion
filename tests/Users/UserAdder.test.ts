/* eslint-disable @typescript-eslint/no-explicit-any */
import { Constants } from '../../src/Modules/Users/Domain/Enums/constants';
import { Email } from '../../src/Modules/Users/Domain/Models/Email';
import { UserAdder } from '../../src/Modules/Users/Domain/Models/UserAdder';

const email = 'zerodata.aolink@outlook.com';
const name = 'Matias';
const date = new Date;



describe('Check log user class, business logic', () => {

	test('it should gets primitives data', ()=> {
		const User = new UserAdder({
			createAt: date,
			email: new Email(email),
			name,
			password:'pass',
			status: true,
			updatedAt: date
		});
    
		expect(User.get()).toEqual({
			createAt: date,
			email,
			name,
			password:'pass',
			status: true,
			updatedAt: date
		});
	});


	test('it should works, the email is correct', () => {
		expect(new Email(email).value).toBe(email);
	});


	test('it should fails, the email is incorrect', () => {

		try {
			new Email('zerodata.aolink').value;
		} catch (error: any) {
			expect(error.toString()).toBe('Error: '+ Constants.EMAIL_INCORRECT);
		}


	});
});
    