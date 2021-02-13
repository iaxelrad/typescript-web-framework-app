import { User } from './models/User';

const user = new User({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
//Reminder how 'this' works in JS
// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   },
// };

// const printColor = colors.printColor;

// printColor();
