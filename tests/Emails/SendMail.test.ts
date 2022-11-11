/* eslint-disable @typescript-eslint/no-explicit-any */
import { Email } from '../../src/Modules/Users/Domain/Models/Email';
import { SendEmail } from '../../src/Modules/Emails/Domain/Models/SendEmail';

const email = 'zerodata.aolink@outlook.com';

describe('Check user update model class, business logic', () => {

	test('it should gets primitives data', ()=> {
		const Transport = new SendEmail({
			to: new Email(email),
			from: new Email(email),
			html: '',
			subject:'test subject'
		});
    
		expect(Transport.generateEmail()).toEqual({
			to: email,
			from: email,
			html: '',
			subject: 'test subject'
		});
	});

});
    