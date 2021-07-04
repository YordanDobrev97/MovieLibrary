# MovieLibrary

## :hammer: Back-end technologies
* Express
* TypeScript
* MongoDB

## :hammer: Front-end technologies
* React
* TypeScript
* Material UI

# Getting started
- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the server (the command is valid as for back-end so front-end)

## Back-end Structure

- `app.ts` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose.
- `config/` - This folder contains configuration for mongoose.
- `interfaces/` - This folder contains all interfaces which using models.
- `entities/` - This folder contains the schema definitions for our Mongoose models.
- `services/` - This folder contains services which record and read data from the database.

## Front-end Structure

- `components/` - This folder contains all components.
- `interfaces/` - This folder contains all interfaces which using components.
- `context/` - This folder contains the context our application.
- `services/` - This folder contains services which fetch data from server.

## Additional information
- Back-end server listening port `8080`
- Front-end server listening port `3000`
