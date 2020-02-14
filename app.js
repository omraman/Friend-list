const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgon = require("morgan");
const ApiFriend = require("./app/api/friend");
const db = require('./models')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

ApiFriend(app, db);
const PORT = 9090;

app.get('/api', ApiFriend);

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`)
})