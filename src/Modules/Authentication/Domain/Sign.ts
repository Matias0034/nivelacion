/* eslint-disable @typescript-eslint/no-explicit-any */
export class Sign {
	private methodLibrary: any;
	private secret: any = process.env.AUTH_JWT_SECRET;
	private timeToExpire: string;

	constructor(methodLibrary, timeToExpire: string){
		this.timeToExpire = timeToExpire;
		this.methodLibrary = methodLibrary;
	}


	public exec(data: unknown){
		return this.methodLibrary.sign({ data }, this.secret, { expiresIn: this.timeToExpire });
	}
}  