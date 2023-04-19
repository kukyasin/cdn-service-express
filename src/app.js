const express = require("express");
const bodyParser = require('body-parser')
require('./db/mongo')
require('dotenv').config()
const cdnRouter = require('./routers/cdn')

const app = express();
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.send('Pushouse API')
})
app.use(express.json())

app.use(cdnRouter)

module.exports = app