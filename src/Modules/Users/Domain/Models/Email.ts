export class Email {
	private readonly emailRegex: RegExp =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	public value: string;

	constructor(email: string){
		this.isValid(email);
		this.value = email;
	}


	private isValid(email: string): void{
		if(this.emailRegex.test(email) === false){
			throw new Error('Email is not valid, please try it more later');
		}
	}

}