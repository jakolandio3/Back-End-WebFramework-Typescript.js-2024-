import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './Apisync';
import { Collection } from './Collection';
export interface UserProps {
	name?: string;
	age?: number;
	id?: string | number;
	//here im making the props optional in the object so you can change one item
}

const DATABASE = ' http://localhost:3000/users';
//making a lot of these properties optional means we can allow empty classes to be made and assign these values later

export class User extends Model<UserProps> {
	//creating a static class method here for a pre-configured environment
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(DATABASE)
		);
	}
	static buildUserCollection(): Collection<User, UserProps> {
		return new Collection<User, UserProps>(DATABASE, (json: UserProps) =>
			User.buildUser(json)
		);
	}
	setRandomAge(): void {
		const age = Math.round(Math.random() * 100);
		this.set({ age });
	}
}
