const express = require('express');
const router = express.Router();
const {
    getNotes,
    createNote,
    getNotebyId,
    deleteNote,
    archieveNote,
    getArchievedNotes
} = require('../controllers/notesController');

router.get('/', getNotes)
router.post('/create', createNote);
router.get('/archievedNotes', getArchievedNotes);

router.put('/archieve/:id', archieveNote);
router.get('/:id', getNotebyId);
router.delete('/:id', deleteNote);

module.exports = router;