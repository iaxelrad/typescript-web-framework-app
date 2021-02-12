import { User } from './models/User';

const user = new User({ name: 'Jim', age: 37 });

user.save();
