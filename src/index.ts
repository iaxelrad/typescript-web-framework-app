import { User } from './models/User';

const user = new User({ name: 'John', age: 16 });

user.on('change', () => {});

console.log(user);
