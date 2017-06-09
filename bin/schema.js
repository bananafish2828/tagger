const db = require('../server/db');
const Note = require('../server/models/Note.model');

db.authenticate()
  .then(() => {
    return Note.sync({force: true})
  })
  .then(() => {
    console.log('Recreated tables.');
  })
  .catch(() => {
    console.log('Error creating tables');
  });
