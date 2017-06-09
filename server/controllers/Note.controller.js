const Note = require('../models/Note.model');

// GET => /notes
const fetchNotes = (req, res) => {
  Note.findAll()
    .then(notes => {
      res.json({
        results: notes.map(note => note.toJSON())
      });
    })
    .catch(err => {
      console.log('error fetching all notes. err = ', err);
      res.status(500).send('error fetching notes');
    });
};

// GET => /notes/:id
const fetchNote = (req, res) => {
  const { id } = req.params;
  Note.find({ where: { id: id } })
    .then(note => {
      if (!note) {
        return res.status(400).send('That note does not exist');
      }
      return res.json({
        result: note.toJSON()
      });
    })
    .catch(err => {
      console.log('err = ', err);
      res.status(500).send(`Error fetchiing note with id ${id}`);
    })
  res.json({
    notes: []
  });
};

// POST => /notes
const addNote = (req, res) => {
  const { title, text } = req.body;
  Note.create({
    title: title,
    text: text
  })
    .then(() => {
      res.status(201).json({
        success: true
      });
    })
    .catch(err => {
      console.log('err = ', err);
      res.status(500).send('error creating a new message in database');
    });
};

// PUT => /notes/:id
const editNote = (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;
  Note.update({
    title: title,
    text: text
  }, {
    where: { id: id }
  })
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => {
      console.log('err = ', err);
      res.status(500).send('error editing a note');
    });
};

// DEL => /notes/:id
const deleteNote = (req, res) => {
  const { id } = req.params;
  Note.destroy({ where: { id: id }})
    .then(() => {
      res.json({ success: true });
    })
    .catch(err => {
      console.log('err = ', err);
      res.status(500).send(`error deleting note with id ${id}`);
    });
};

module.exports = {
  addNote: addNote,
  fetchNote: fetchNote,
  fetchNotes: fetchNotes,
  editNote: editNote,
  deleteNote: deleteNote
};
