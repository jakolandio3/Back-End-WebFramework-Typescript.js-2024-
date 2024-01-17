import { User } from './models/User';

import { UserForm } from './views/UserForm';

// const collection = User.buildUserCollection();
// collection.on('change', () => console.log(collection));

// collection.fetch();
const user = User.buildUser({ name: 'Name', age: 20 });
const root = document.getElementById('root');
if (root) {
	const userForm = new UserForm(root, user);

	userForm.render();
} else {
	throw new Error('Parent element ID does not exist');
}
