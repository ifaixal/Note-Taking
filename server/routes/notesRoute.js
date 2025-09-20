const express = require('express');
const router = express.Router();
const {deleteNote, createNote, getNotes, getTagOfNote, getNotebyTag, getNotebyTitle, archieveNote, getArchieveNote, getTagOfArchieve, getArchieveNotebyTag, getArchieveNotebyTitle, editNote, archieveEditNote} = require('../controllers/notesController');

router.delete("/:id", deleteNote);
router.post('/', createNote);
router.get('/', getNotes);
router.get('/tags', getTagOfNote);
router.get('/tags/:tag', getNotebyTag);
router.get('/Title/:title', getNotebyTitle);
router.patch('/:id', archieveNote);
router.get('/archieve', getArchieveNote);
router.get('/archieve/tags', getTagOfArchieve);
router.get('/archieve/:tag', getArchieveNotebyTag);
router.get('/archieve/Title/:title', getArchieveNotebyTitle);
router.post('/edit', editNote);
router.post('/editArchieve', archieveEditNote);

module.exports = router;