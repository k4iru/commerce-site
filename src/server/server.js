// environment variables create .env file to use.
require("dotenv").config();

const path = require("path");
const express = require("express");
const PORT = process.env.SERVER_PORT || 8888;
const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

require("./routes/exampleApi")(app);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
