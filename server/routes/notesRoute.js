const express = require('express');
const router = express.Router();
const {
    getNotes,
    createNote,
    getNotebyId,
    deleteNote
} = require('../controllers/notesController');

router.get('/', getNotes)
router.post('/create', createNote)

router.get('/:id', getNotebyId);
router.delete('/:id', deleteNote);

module.exports = router;