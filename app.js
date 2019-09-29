require("dotenv/config");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const root = require("./src/routes/root");

const app = express();
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || "production";

app.listen(port, () => {
  console.log(`Server running in ${env} mode on port ${port}`);
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", root);

module.exports = app;
