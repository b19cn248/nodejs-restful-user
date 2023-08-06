const express = require('express')
const app = express()
const db = require('./config/db/index')
const route = require('./routes/index');
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect();

route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});