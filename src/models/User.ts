interface UserProps {
	name?: string;
	age?: number;
	//here im making the props optional in the object so you can change one item
}

type Callback = () => void;
// setting up a type alias so it doesnt get too confusing in the code

//making a lot of these properties optional means we can allow empty classes to be made and assign these values later

export class User {
	//adding a property for the events
	events: { [key: string]: Callback[] } = {};
	// this is just stating that the keys are unknown on creation but guarantee they will be strings and will always point to an array of callbacks

	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(updateProp: UserProps): void {
		//Object assign method here copy pastes the data from the passed in argument and copy pastes it to this.data (UserProps type makes sure it is passed an object with name:str and age:num)
		Object.assign(this.data, updateProp);
	}

	//this will be a list of events to call on render/change/update
	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
		//take the array at the event name key and push the new array or create one
	}

	// adding the event listners to desired type
	trigger(eventName: string): void {
		// this.events[eventName]?.map((event) => event()); this is my initial way
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach((callback) => callback());
		//essentially my code did the same without assigning the variable to handlers
	}
}
