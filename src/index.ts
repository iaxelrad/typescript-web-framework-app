import { User } from './models/User';

const user = new User({ name: 'John', age: 16 });

user.set({ name: 'Peter' });

console.log(user.get('name'));
console.log(user.get('age'));
