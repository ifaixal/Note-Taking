const Note = require('../models/note');
const ArchieveNote = require('../models/archieveNote');

// Function to deletNote for user (X)
const deleteNote = async (req, res) => {
    try{
        const deleted = await Note.findByIdAndDelete(req.params.id);
        if (!deleted)
            res.status(400).json({ message: "Cannot Find the Note" })
        res.json({ message: "Note deleted successfully" });
    }
    catch (err) {
        res.status(404).json( {error: err.message });
    }
};

// Function to create note for user (X)
const createNote = async (req, res) => {
    // In later stages you can deploy it the way to reduce the redundant based on title
    // Just use Find method given by Note model
    try{
        const {title, content, tags, user} = req.body;

        if (!title)
            res.status(400).json({success: false, message: "Title is Required"})
        if (!content)
            res.status(400).json({success: false, message: "Content is Required"})
        if (!tags)
            res.status(400).json({success: false, message: "Tags is Required"})
        // Validate at Later Stages
        // if (!user)
        //     res.status(400).json({success: false, message: "User Missing is Required"})
        const note = new Note({title, content, tags});
        const saveNote = await note.save();

        res.status(201).json({success: true, message: "Note Created Successfully"})
    }
    catch (err) {
        res.status(404).json( {success: false, error: err.message} )
    }
}

// Function to get All Note for user (X)
const getNotes = async (req, res) => {
    try {
        // Need to be replaced later by find only by username that too after saving it with specific Username
        const notes = await Note.find();
        if (notes.length === 0)
            res.status(400).json( {success: false, message: "Cannot find notes"} )
        res.status(200).json(notes);
    }
    catch (err) {
        res.status(404).json( {success: false, error: err.message })
    }
}

// // Function to getNotes by Tag for user (X)
const getNotebyTag = async (req, res) => {
    try{
        const tag = req.params.tag;
        const notebyTag = await Note.find({tags: tag})
        if (notebyTag.length === 0)
            res.status(400).json({ success: false, message: "Cannot find note by specified Tag"})
        res.status(200).json(notebyTag);
    }
    catch (err){
        res.status(404).json( {success: false, error: err.message} )
    }
}

// // Function to getNotes by Title for user (X)
// An extra feature we can add is by getting from the database notes that has title no exact match is necessary
const getNotebyTitle = async (req, res) => {
    try{
        const title = req.params.title;
        const notebyTitle = await Note.find({title: title})
        if (notebyTitle.length === 0)
            res.status(400).json( {success: false, message: "Cannot find note by specified Title"} )
        res.status(200).json(notebyTitle);
    }
    catch (err){
        res.status(404).json( {success: false, error: err.message} )
    }
}

// Function to getNotes by Content for user (X)
// External search engines (ElasticSearch / Atlas Search) Explore these things and then implement this Function
// const getNotebyContent = async (req, res) => {
    
// }

// // Function to getArchieveNotes by Content for user (X)
// const getArchieveNotebyContent = async (req, res) => {
    
// }

// // Function to archieve Note for user (X)
const archieveNote = async (req, res) => {
    try{
        // Get the note from All Note then Delete the note from All and then post it in Archieve Note
        const noteID = req.params.id
        const getNotebyID = await Note.findById(noteID);

        if (getNotebyID.length === 0)
            res.status(400).json({ success: false, message: "Couldn't find the Note"} )


        const title = getNotebyID.title;
        const content = getNotebyID.content;
        const tags = getNotebyID.tags;
        // user as well
        // const user = getNotebyID.user;
        const archieveNote = new ArchieveNote({title, content, tags});
        await archieveNote.save();

        await Note.findByIdAndDelete(noteID);

        res.status(200).json({ success: true, message: "Archieved Note"} );
    }   catch (err){
        res.status(404).json( { success: false, error: err.message} )
    }
}

// // Function to get Archieve Note for user (X)
const getArchieveNote = async (req, res) => {
    try{
        // Will be replaced later by find by specific Person
        const notes = await ArchieveNote.find();
        if (notes.length === 0)
            res.status(400).json( { success:false, message: "No Archieve Notes" } )
        
        res.status(200).json(notes)
    }
    catch (err){
        res.status(404).json( {success: false, error: err.message} )
    }
}

// // Function to getArchieveNote by Tag for user (X)
const getArchieveNotebyTag = async (req, res) => {
    try{
        const tag = req.params.tag;
        const notebyTag = await ArchieveNote.find({tags: tag})
        if (notebyTag.length === 0)
            res.status(400).json( {success: false, message: "Note do not exist"} );
        res.status(200).json(notebyTag);
    }
    catch (err){
        res.status(404).json( {success: false, error: err.message} )
    }
}

// Function to getArchieveNotes by Title for user (X)
// An extra feature we can add is by getting from the database notes that has title no exact match is necessary
const getArchieveNotebyTitle = async (req, res) => {
    try{
        const titles = req.params.title;
        const notebyTitle = await ArchieveNote.find({title: titles})
        if (notebyTitle.length === 0)
            res.status(400).json( {success: false, message: "Note do not exist"} );
        res.status(200).json(notebyTitle);
    }
    catch (err){
        res.status(404).json( {success: false, message: "Cannot get notes from Backend"} )
    }
}

// Edit Note
const editNote = async (req, res) =>{
    try{
        const {title, content, id, tags} = req.body;
        const updated = await Note.findByIdAndUpdate(id, {title, content, tags}, { new: true, runValidators: true })
        if (!updated)
            res.status(400).json( {success: false, message: "Error Updating Note"} )
        res.status(200).json( {success: true, message: "Updated Note"} )
    }
    catch (err){
        res.status(404).json( {success: false, error: err.message} )
    }
}

// Edit ArchieveNote
const archieveEditNote = async (req, res) =>{
    try{
        const {title, content, id, tags} = req.body;
        const updated = await ArchieveNote.findByIdAndUpdate(id, {title, content, tags}, { new: true, runValidators: true })
        if (!updated)
            res.status(400).json( {success: false, message: "Error Updating Note"} )
        res.status(200).json( {success: true, message: "Updated Note"} )
    }
    catch (err){
        res.status(404).json( {success: false, error: err.message} )
    }
}

module.exports = {deleteNote, createNote, getNotes, getNotebyTag, getNotebyTitle, archieveNote, getArchieveNote, getArchieveNotebyTag, getArchieveNotebyTitle, editNote, archieveEditNote}