require('dotenv/config');
const express = require('express');

const indexRoute = require('./routes/index.js');
const heroesRoute = require('./routes/heroes.js');

// Initialize server
const app = express();
const PORT = process.env.PORT;

// Body parser middleware
app.use(express.json());

// Routes to handle
app.use('/', indexRoute);
app.use('/heroes', heroesRoute);

// Server listen
app.listen(PORT, (error) => {
	if (!error)
		console.log(`Server up and listening on port: ${PORT}`);
	else
		console.log("Cannot start server...", error);
});
