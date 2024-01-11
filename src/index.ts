import { User } from './models/User';

const Jakob = new User({ name: 'jakob', age: 28 });

Jakob.set({ name: 'jakos' });
Jakob.set({ age: 68 });

console.log(Jakob.get('name'));
console.log(Jakob.get('age'));

Jakob.on('click', () => console.log('ive clicked'));
Jakob.on('click', () => console.log('ive clocked'));

// Jakob.events['click'][0]();
// Jakob.events['click'][1]();
Jakob.trigger('click');
