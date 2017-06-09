const Sequelize = require('sequelize');
const db = require('../db');

const Note = db.define('note', {
  title: {
    type: Sequelize.TEXT
  },
  text: {
    type: Sequelize.TEXT
  }
});

module.exports = Note;
