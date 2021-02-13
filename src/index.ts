import { User } from './models/User';

const user = new User({ name: 'Jim', age: 37 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
//Reminder how 'this' works in JS
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   },
// };

// const printColor = colors.printColor;

// printColor();
