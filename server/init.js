// why did I choose to have an init.js file?

// Establishing our database connection is an asynchronous process.
// Instead of setting up our database models and fire up the express server at the same time,
// in which case there is no guarantee that our database connection will be established before our
// back-end API starts accepting requests, we want to do the database set up before the express server starts.

// our app should not be running if a database connection cannot be established. this init file
// ensures that the app wait for a database connection before beginning to listen for HTTP requests.

const db = require('./db');
const Note = require('./models/Note.model');

const init = () => {
  return db.authenticate()
    .then(() => Note.sync())
};

module.exports = init;
