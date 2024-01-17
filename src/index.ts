// import { User } from './models/User';

// const collection = User.buildUserCollection();
// collection.on('change', () => console.log(collection));

// collection.fetch();

import { UserForm } from './views/UserForm';
const userForm = new UserForm(document.getElementById('root'));

userForm.render();
