import { UserProps } from './User';

//there was some error handling here so I had to tell TS that attributes will always pass an object type check
export class Attributes<T extends {}> {
	constructor(private data: T) {}

	//changed this to an arrow function as it binds this to it
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};
	//t here represents the type passed in which is an interface and k represents a key in that interface object, now typescript knows what this key type will be it can give us all the attributes associated with that type upon returning it

	//this means we can only ever call get with the strings of the keys we define in the type configuration

	set(updateProp: T): void {
		//Object assign method here copy pastes the data from the passed in argument and copy pastes it to this.data (UserProps type makes sure it is passed an object with name:str and age:num)
		Object.assign(this.data, updateProp);
	}

	getAll(): T {
		return this.data;
	}
}
