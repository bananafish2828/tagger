const Sequelize = require('sequelize');
const path = require('path');

// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
const db = new Sequelize('tagger', 'admin', 'password', {
  dialect: 'sqlite',
  storage: path.resolve(__dirname, './tagger.sqlite')
});

module.exports = db;
