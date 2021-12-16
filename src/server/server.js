// environment variables create .env file to use.
require('dotenv').config();

const path = require('path');
const express = require('express');
const PORT = process.env.SERVER_PORT || 8888;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

require('./routes/exampleApi')(app);

 app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});