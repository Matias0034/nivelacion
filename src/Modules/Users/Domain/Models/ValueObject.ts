/* eslint-disable @typescript-eslint/no-explicit-any */
interface ValueObjectProps {
    [index: string]: any
}
export class ValueObject<T extends ValueObjectProps> {

	private props: T;

	constructor(props: T){
		this.props = {
			...props
		};
	}


	protected equals(vo?: ValueObject<T>): boolean{
		if(vo === null ||  vo === undefined || vo.props === undefined){
			return false;
		}

		return JSON.stringify(this.props) === JSON.stringify(vo.props);
	}
}