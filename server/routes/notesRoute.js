const express = require('express');
const router = express.Router();
const {deleteNote, 
    createNote, 
    getNotes, 
    getTagOfNote, 
    getNotebyID, 
    archieveNote, 
    getArchieveNote, 
    getTagOfArchieve, 
    editNote, 
    archieveEditNote, 
    getNotesbyTag} = require('../controllers/notesController');

router.post('/', createNote);
router.get('/', getNotes);
router.get('/tags', getTagOfNote);
router.get('/:id/:tag', getNotesbyTag);

router.patch('/edit', editNote);
router.post('/editArchieve', archieveEditNote);

router.get('/archieve', getArchieveNote);
router.get('/archieve/tags', getTagOfArchieve);

router.delete('/:id', deleteNote);
router.get('/:id', getNotebyID);
router.patch('/:id', archieveNote);

module.exports = router;