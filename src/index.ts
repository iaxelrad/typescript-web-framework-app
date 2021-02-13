import { User } from './models/User';

const user = new User({ id: 1, name: 'newer newer name', age: 10 });

user.on('save', () => {
  console.log(user);
});

user.save();
//Reminder how 'this' works in JS
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   },
// };

// const printColor = colors.printColor;

// printColor();
