const express = require('express');
const router = express.Router();
const {
    getNotes,
    createNote,
    getNotebyId,
    deleteNote,
    archieveNote,
    getArchievedNotes,
    getTags,
    getArchieveTags,
    getNotesbyTag
} = require('../controllers/notesController');

router.get('/', getNotes)
router.post('/create', createNote);
router.get('/archievedNotes', getArchievedNotes);
router.get('/getTags', getTags);
router.get('/getArchieveTags', getArchieveTags);
router.get('/getNotebyTags/:tag', getNotesbyTag);

router.put('/archieve/:id', archieveNote);
router.get('/:id', getNotebyId);
router.delete('/:id', deleteNote);

module.exports = router;