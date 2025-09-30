const Note = require('../models/note');

const getNotes = async (req, res) => {
    try{
        const uid = req.header('x-user-id');

        if (!uid)
            return res.status(400).json({status: false, message: "User Id is must to get notes"});

        const notes = await Note.find({user: uid, archieved: false});

        return res.status(200).json(notes);

    } catch (err){
        res.status(500).json({ error: err.message });
    }
}

const getArchievedNotes = async (req, res) => {
    try{
        const uid = req.header('x-user-id');

        if (!uid)
            return res.status(400).json({status: false, message: "User Id is must to get notes"});

        const notes = await Note.find({user: uid, archieved: true});

        return res.status(200).json(notes);

    } catch (err){
        res.status(500).json({ error: err.message });
    }
}

const createNote = async (req, res) => {
    try{
        const { title, tags, content, user } = req.body;

        if (!title)
            return res.status(400).json({status: false, message: "Need Title"});
        if (!tags)
            return res.status(400).json({status: false, message: "Need Tags"});
        if (!content)
            return res.status(400).json({status: false, message: "Need Content"});
        if (!user)
            return res.status(400).json({status: false, message: "Need User iD"});

        const note = await Note.create({title, content, tags, user});

        return res.status(201).json({status: true, message: "Note Saved", note});
    } catch(err){
        res.status(500).json({ error: err.message });
    }
}

const getNotebyId = async (req, res) => {
    try{
        const noteId = req.params.id;

        if (!noteId)
            return res.status(400).json({status: false, message: "Note id is Required"});

        const note = await Note.findById(noteId);

        return res.status(201).json(note);
    }   catch(err) {
        res.status(500).json({error: err.message})
    }
}

const deleteNote = async (req, res) => {
    try{
        const noteId = req.params.id;

        if (!noteId)
            return res.status(400).json({status: false, message: "Note id is required"});

        const deleted = await Note.findByIdAndDelete(noteId);

        return res.status(201).json({deleted});
    }   catch(err){
        res.status(500).json({error: err.message});
        return null;
    }
}

const archieveNote = async (req, res) => {
    try{
        const noteId = req.params.id;

        if (!noteId)
            return res.status(400).json({status: false, message: "Note id is Required"});

        const change = await Note.findOneAndUpdate(
            { _id: noteId },
            { $set: { archieved: true } },
            { new: true })

        return res.status(200).json({change});
    }   catch (err){
        res.status(500).json({error: err.message})
        return null;
    }
}

module.exports = { 
    getNotes, 
    createNote,
    getNotebyId,
    deleteNote,
    archieveNote,
    getArchievedNotes
 }