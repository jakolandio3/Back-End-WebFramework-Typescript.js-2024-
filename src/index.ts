import { User } from './models/User';

const Jakob = new User({ name: 'jakob', age: 28 });

console.log(Jakob.get('name'));
console.log(Jakob.get('age'));
