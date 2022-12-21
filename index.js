const express = require('express');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, (error) => {
	if (!error)
		console.log(`Server up and listening on port: ${PORT}`);
	else
		console.log("Cannot start server...", error);
});
