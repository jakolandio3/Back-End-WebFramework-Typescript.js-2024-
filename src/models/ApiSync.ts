import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface HasId {
	id?: number | string;
}

//guarantee  that the type will have a number

export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) {}
	//defining a fetch method with axios
	async fetch(id: number | string): AxiosPromise {
		//the type here was a little tricky because I used async await instead of .then just out of preference
		//requests that axios gets the object which has the id == this users id
		try {
			const response: AxiosResponse = await axios.get(`${this.rootUrl}/${id}`);
			const data = response;
			return data;
		} catch (error) {
			throw new Error(
				`${error}
					id does not exist on server please save object first to persist the data`
			);
		}
	}
	//lets add a save function to push to the server with axios
	save(data: T): AxiosPromise {
		const { id } = data;
		//saying here that we will create a put request {updating the object with the same id} if there is an id key in the object, otherwise it will create a post request to push a new object to the server
		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			return axios.post(this.rootUrl, data);
		}
	}
}
