/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email } from '../../src/Modules/Users/Domain/Models/Email';
import { TemporalEmail } from '../../src/Modules/Emails/Domain/Models/TemporalEmail';

const email = 'zerodata.aolink@outlook.com';
const code = typeof 333;

describe('Check user update model class, business logic', () => {

	test('it should gets primitives data', ()=> {
		const temporal = new TemporalEmail(new Email(email));
    
		expect(typeof temporal.getTemporalEmail().code).toEqual(code);

		expect(temporal.getTemporalEmail().email).toEqual(email);
		expect(temporal.getTemporalEmail().status).toEqual(false);
	});

});