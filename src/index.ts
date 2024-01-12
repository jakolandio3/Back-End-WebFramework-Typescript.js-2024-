import { User } from './models/User';

const user = new User({ id: 'd315' });
console.log(user);

user.on('change', () => {
	console.log('change worked');
});

user.fetch();
