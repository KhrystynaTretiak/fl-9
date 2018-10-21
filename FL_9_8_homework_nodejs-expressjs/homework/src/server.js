const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const router = require( './routes');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
