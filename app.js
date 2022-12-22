require('dotenv/config');
const express = require('express');
const { loadLocals } = require('./middleware/loadLocals.js');

const indexRoute = require('./routes/index.js');
const heroesRoute = require('./routes/heroes.js');

// Initialize server
const app = express();
const PORT = process.env.PORT;

//  Middleware setup
app.use(express.json());
app.use(loadLocals);

// Routes to handle
app.use('/', indexRoute);
app.use('/heroes', heroesRoute);

/* 
* Set empty superheroes data:
* Will be initialized by middleware upon first request, academic exercise,
* as it could simply be initialized at once
*/
app.locals.superheroes = null;

// Server listens on configured port
app.listen(PORT, (error) => {
	if (!error)
		console.log(`Server up and listening on port: ${PORT}`);
	else
		console.log("Cannot start server...", error);
});
