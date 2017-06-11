const mysql = require('mysql');
const dbConfig = require('./.dbConfig.js')
const knex = require('knex')(dbConfig);
const db = require('bookshelf')(knex);

const getNotes = (req, res) => {
  db.knex('notes').select('*')
    .then(function (data) {
      console.log('notes retrieved ', data);
    })
  }

const getNote = (req, res) => {

}

const createNote = (req, res) => {
  db.knex.insert({ id: null, title: req.body.title, notepad: req.body.notepad}).into('notes')
    .then(function(data) {
      console.log('note created');
    });

}

const changeNote = (req, res) => {
  db.knex('notes').where('id', req.body.id).update({ title: req.body.title, notepad: req.body.notepad })
    .then(function(data) {
      console.log('note updated');
    });
}

const deleteNote = (req, res) => {
  db.knex('notes').where('id', req.body.id).del()
    .then(function (data) {
      console.log('note deleted'); 
    });
}

module.exports = {
  getNotes: getNotes,
  getNote: getNote,
  createNote: createNote,
  changeNote: changeNote,
  deleteNote: deleteNote
}