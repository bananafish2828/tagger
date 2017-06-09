const express = require('express');

const noteController = require('./controllers/Note.controller');

const router = express.Router();

router.post('/notes', noteController.addNote);
router.get('/notes', noteController.fetchNotes);
router.get('/notes/:id', noteController.fetchNote);
router.put('/notes/:id', noteController.editNote);
router.delete('/notes/:id', noteController.deleteNote);

module.exports = router;
