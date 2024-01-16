import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
export interface UserProps {
	name?: string;
	age?: number;
	id?: string | number;
	//here im making the props optional in the object so you can change one item
}

const DATABASE = ' http://localhost:3000/users';
//making a lot of these properties optional means we can allow empty classes to be made and assign these values later

export class User {
	//hardcoding the eventing library because theres not really a need to swap it out and it abstracts some of the logic and uses some good composition
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync(DATABASE);
	public attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}
	// calling some delegation methods here
	get get() {
		return this.attributes.get;
	}

	get on() {
		//the getter wont call the function here so it returns a reference so you can call it.. it drags up the class from the child
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	set(update: UserProps): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.get('id');
		if (typeof id !== 'string') {
			throw new Error('Can"t fetch data without an id defined');
		}
		this.sync.fetch(id).then((response: AxiosResponse): void => {
			this.set(response.data);
		});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.trigger('save');
			});
	}
}
