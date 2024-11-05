# Dashboard Demo

This app is designed to showcase all of the features of the dashboard in one place.
It wouldn't make sense to use all of them together and it would be pretty bloated. 
This app will run a bit slower due to the size and the fact that we have development dependencies.

## What's next? How do I make an app with this?
1. Clone the repository to your local machine
2. Run `bun install` (or `npm install` or `yarn install`)
3. copy the example.env file to .env `cp example.env .env`
4. Update the variables in the .env file
5. If you add any additional variables, you'll need to add them to the ~/env.js file
6. Use the start-database.sh script to start the database on your local machine or update 
    the database url to match your hosted database url.
7. Run `bun run dev` or `npm run dev` or `yarn dev`