export type Callback = () => void;
// setting up a type alias so it doesnt get too confusing in the code

export class Eventing {
	//adding a property for the events
	events: { [key: string]: Callback[] } = {};
	// this is just stating that the keys are unknown on creation but guarantee they will be strings and will always point to an array of callbacks

	//this will be a list of events to call on render/change/update
	on = (eventName: string, callback: Callback): void => {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
		//take the array at the event name key and push the new array or create one
	};

	// adding the event listners to desired type
	trigger = (eventName: string): void => {
		// this.events[eventName]?.map((event) => event()); this is my initial way
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach((callback) => callback());
		//essentially my code did the same without assigning the variable to handlers
	};
}
