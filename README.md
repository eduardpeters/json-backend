# json-backend
First Backend project at The Bridge serving a JSON data file
The Frontend can be found [here](https://github.com/eduardpeters/json-frontend).

## Usage

Clone the repository and `cd` into its directory. Run `npm install` (if you don't have Node and NPM installed, you will want to do that beforehand) to have all dependencies installed.

The backend requires a `.env` file with the following contents to pair with the Frontend project:
- PORT=3001
- DB_FILE="superhero.json"
- CORS_ORIGIN="http://localhost:3000"

Aftewards running `npm start` will start the server and be ready to receive requests.

## Background and functionality

This is the first Express server built during the Bootcamp and the goal was to design the endpoints to allow CRUD operations on a JSON file. Data persistance is made possible by reading and writing to the .json file.

### Endpoints

- /hero/
    - GET will retrieve a list of all heroes with an ID, Name and Publisher
    - POST will add a hero with the contents of the request body
- /hero/:id
    - GET will retrieve the hero with the requested ID
    - PUT will replace the hero with the requested ID with the contents of the request body
    - PATCH will replace the valid fields provided in the request body for the requested ID
    - DELETE will delete the hero with the requested ID