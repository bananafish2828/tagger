// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
const sqlite = require('sqlite3')
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename : './noteDB.sql3'
  }
});

const db = knex.connection;



module.exports = db