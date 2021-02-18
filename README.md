# TypeScript Web Framework App

This App is a very simple yet illustrative of how one can utilize TypeScript to its potential.
This small framework app has drawn inspiration, and essentially re-implemented
a small portion two older web frameworks - Marionette.js and Backbone.js.
This App was created as part of an excellent Udemy TS Course named "Typescript: The Complete Developer's Guide"
by the always fantastic Stephen Grider.
I thoroughly enjoyed making it and learned a great amount of Typescript in the process.

## Installation

1. Clone this repo into your personal folder
2. Start off with the command
   `npm install` or `npm i` from inside a terminal opened at your root directory.

3. In your root folder create a db.json file that will house an object as follows:
   ```
   {
     "users": []
   }
   ```

## Usage

1. Start off with two commands in two separate terminal windows:
   1.1 `npm run start:db` - starts a local json server that communicates with the db.json file added in the installation process.
   1.2 `npm run start:parcel` - starts up a web application bundler at localhost:1234.

2. Open up your browser to http://localhost:1234 where you will see the rendered out User form. You can set the User's name,
   set a random age and save the user to the local db.json file.

3. In order to see the Detail view of the users collection just comment out lines 6-16 in index.ts and
   comment in lines 18-32 and on the same localhost:1234 address yo will see rendered out the list of saved users after they are fetched from db.json.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
