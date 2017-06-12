const express = require ('express');
const router = express.Router();

const NoteController = require ('./controllers/NoteController');

router.get('/notes', NoteController.getNotes);
router.get('/notes/:id', NoteController.getNote);
router.post('/notes', NoteController.createNote);
router.put('/notes/:id', NoteController.changeNote);
router.delete('/notes/:id', NoteController.deleteNote);

console.log('router active');

module.exports = router;
