// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
const mysql = require('mysql');
const dbConfig = require('./.dbconfig.js')
const knex = require('knex')(dbConfig);

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('notes').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('notes', function(note) {
      note.increments('id').primary();
      note.string('title', 50);
      note.string('notepad', 255);
    }).then(function(table) {
      if (table) console.log('table has been created ', table);
    });
  };
})

module.exports = db