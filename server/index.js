const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// bring in any express middleware functions and other libraries you need
const router = require('./router');
const init = require('./init');

// create an express instance
const app = express();

// hook any middleware you need to into the express instance, including your route handlers
// hint: use the bodyParser middleware to parse the request body for POST & PUT requests.
app.use(bodyParser.json());

app.use('/', router);

// serve the `../public/` folder using the express.static() middleware function
// (you will want to use the path library to correctly resolve the path to ../public.)
app.use(express.static(path.resolve(__dirname, '../public')));

// listen on this port:
const port = 5050;

init()
  .then(() => {
    app.listen(port, () => console.log(`app listening on port ${port}`));
  })
  .catch(err => console.error('Unable to connect to the database:', err));
