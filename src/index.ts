import { User } from './models/User';

const user = new User({ name: 'Jim', age: 37 });

user.events.on('change', () => {
  console.log('change!');
});
user.events.trigger('change');
