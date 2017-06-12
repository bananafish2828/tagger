const mysql = require('mysql');
const dbConfig = require('../db/.dbconfig.js')
const knex = require('knex')(dbConfig);
const db = require('bookshelf')(knex);

const getNotes = (req, res) => {
  db.knex('notes').select('*')
    .then(function(data) {
      res.status(200);
      res.json(data);
    });
}

const getNote = (req, res) => {
  console.log('inside NoteController, retreiving note...');
  db.knex('notes').select('title', 'notepad').where('id', req.params.id)
    .then(function(data) {
      if (data.length > 0) {
        res.status(200);
        res.json(data);
      } else {
        console.log('message does not exist');
        res.sendStatus(404);
      }
    });
}

const createNote = (req, res) => {
  db.knex.insert({ id: null, title: req.body.title, notepad: req.body.notepad}).into('notes')
    .then(function(data) {
      res.status(201);
      console.log('note created');
      res.end();
    })
    .catch(function(err) {
      if (err) {
        console.log('error creating note');
        res.sendStatus(404);
      } 
    });
}

const changeNote = (req, res) => {
  db.knex('notes').where('id', req.params.id).update({ title: req.body.title, notepad: req.body.notepad })
    .then(function(data) {
      if (data) {
        res.status(201);
        console.log('note updated');
        res.end();
      } else {
        console.log('message does not exist');
        res.sendStatus(404);
      }
    });
}

const deleteNote = (req, res) => {
  db.knex('notes').where('id', req.params.id).del()
    .then(function (data) {
      if (data) {
        res.status(201);
        console.log('note deleted');
        res.end(); 
      } else {
        console.log('unable to delete');
        res.sendStatus(404); 
      }
    });
}

module.exports = {
  getNotes: getNotes,
  getNote: getNote,
  createNote: createNote,
  changeNote: changeNote,
  deleteNote: deleteNote
}