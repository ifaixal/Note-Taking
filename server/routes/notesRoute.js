const express = require('express');
const router = express.Router();
const {
    getNotes,
    createNote
} = require('../controllers/notesController');

router.get('/', getNotes)
router.post('/create', createNote)

module.exports = router;