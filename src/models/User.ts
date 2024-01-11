interface UserProps {
	name?: string;
	age?: number;
	//here im making the props optional in the object so you can change one item
}

//making a lot of these properties optional means we can allow empty classes to be made and assign these values later

export class User {
	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(updateProp: UserProps): void {
		//Object assign method here copy pastes the data from the passed in argument and copy pastes it to this.data (UserProps type makes sure it is passed an object with name:str and age:num)
		Object.assign(this.data, updateProp);
	}
}
