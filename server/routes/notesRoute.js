const express = require('express');
const router = express.Router();
const {deleteNote, createNote, getNotes, getNotebyTag, getNotebyTitle, archieveNote} = require('../controllers/notesController');

router.delete("/:id", deleteNote);
router.post('/', createNote);
router.get('/', getNotes);
router.get('/tags/:tag', getNotebyTag);
router.get('/Title/:title', getNotebyTitle);
router.patch('/:id', archieveNote);

module.exports = router;