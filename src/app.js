const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongo");
require("dotenv").config();
const cdnRouter = require("./routers/cdn");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Pushouse API");
});

app.use(cdnRouter);

module.exports = app;
