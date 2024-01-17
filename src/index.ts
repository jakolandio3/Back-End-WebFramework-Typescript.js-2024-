import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps } from './models/User';

// // const collection = User.buildUserCollection();
// // collection.on('change', () => console.log(collection));

// // collection.fetch();
// const user = User.buildUser({ name: 'Name', age: 20, id: 'bda8' });
// const root = document.getElementById('root');
// if (root) {
// 	const userEdit = new UserEdit(root, user);

// 	userEdit.render();
// 	console.log(userEdit);
// } else {
// 	throw new Error('Parent element ID does not exist');
// }

// const users = new Collection(
// 	'http://localhost:3000/users',
// 	(json: UserProps) => {
// 		return User.buildUser(json);
// 	}
// );

// users.on('change', () => {
// 	const root = document.getElementById('root');
// 	if (root) {
// 		new UserList(root, users).render();
// 	}
// });

// users.fetch();
