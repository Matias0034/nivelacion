/* eslint-disable @typescript-eslint/no-explicit-any */
import { Constants } from '../../src/Modules/Users/Domain/Enums/constants';
import { LogUser } from '../../src/Modules/Users/Domain/Models/LogData';

const email = 'zerodata.aolink@outlook.com';
const name = 'Matias';

describe('Check log user class, business logic', () => {
	test('it should gets only email and name', ()=> {
		const User = new LogUser({
			email,
			name,
			status: false
		});
    
		expect(User.get()).toEqual({ name, email });
	});
    
    
	test('if status is true, it should gets an error', ()=> {
		try {
			new LogUser({
				email: 'zerodata.aolink@outlook.com',
				name: 'Matias',
				status: true
			});
		} catch (error: any) {

			expect(error.toString()).toBe('Error: '+ Constants.BLOCKED);
		}
		
	});


});
