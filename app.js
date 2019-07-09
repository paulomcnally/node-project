const express = require('express');
const middleware = require('./middleware');
const enrouten = require('express-enrouten');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// middlewares

app.use(middleware.auth);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// routes
app.use(enrouten({ directory: 'routes' }));


// server listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));