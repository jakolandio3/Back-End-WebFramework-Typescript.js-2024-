import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
	//specifying two generic arguments here, one for the models structure and one for the object data we expect to get back from the fetch
	models: T[] = [];
	events: Eventing = new Eventing();
	//we have to use a getter here because of the callstack
	constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
	get on() {
		return this.events.on;
	}
	get trigger() {
		return this.events.trigger;
	}
	fetch(): void {
		axios.get(this.rootUrl).then((res: AxiosResponse) => {
			res.data.forEach((value: K) => {
				this.models.push(this.deserialize(value));
			});
			this.trigger('change');
		});
	}
}
