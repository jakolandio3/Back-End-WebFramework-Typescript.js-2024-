import { User } from './models/User';

const user = new User({ id: 'd315', name: 'newer name', age: 0 });
console.log(user);

user.on('save', () => {
	console.log('save worked');
});

user.save();
// remember the id is now a string because axios has changed so just fix that through the course
