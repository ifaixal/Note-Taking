const Note = require('../models/note');
const ArchieveNote = require('../models/archieveNote');

// Function to deletNote for user (X)
const deleteNote = async (req, res) => {
    try{
        const deleted = await Note.findByIdAndDelete(req.params.id);
        if (!deleted)
            return res.status(400).json({ message: "Cannot Find the Note" })
        return res.json({ message: "Note deleted successfully" });
    }
    catch (err) {
        return res.status(404).json( {error: err.message });
    }
};

// Function to create note for user (X)
const createNote = async (req, res) => {
    // In later stages you can deploy it the way to reduce the redundant based on title
    // Just use Find method given by Note model
    try{
        const {title, content, tags, user} = req.body;

        if (!title)
            return res.status(400).json({success: false, message: "Title is Required"})
        if (!content)
            return res.status(400).json({success: false, message: "Content is Required"})
        if (!tags)
            return res.status(400).json({success: false, message: "Tags is Required"})
        // Validate at Later Stages
        // if (!user)
        //     res.status(400).json({success: false, message: "User Missing is Required"})
        const note = new Note({title, content, tags});
        const saveNote = await note.save();

        return res.status(201).json({success: true, message: "Note Created Successfully"})
    }
    catch (err) {
        return res.status(404).json( {success: false, error: err.message} )
    }
}

// Function to get All Note for user (X)
const getNotes = async (req, res) => {
    try {
        const uid = req.headers["x-user-id"];
        const notes = await Note.find({user: uid});
        if (notes.length === 0)
            return res.status(400).json( {success: false, message: "Cannot find notes"} )
        return res.status(200).json(notes);
    }
    catch (err) {
        return res.status(404).json( {success: false, error: err.message })
    }
}

// Function to get Tag of Archieve Notes for User (X)
const getTagOfNote = async (req, res) => {
    try{
        const userId = req.headers["x-user-id"];
        if (!userId)
            return res.status(401).json({success: false, message: "Cannot Find User"});

        const uniqueTagsAgg  = await Note.aggregate([
            { $match: { user: userId } },
            { $unwind: "$tags" },                      // flatten arrays
            { $group: { _id: null, tags: { $addToSet: "$tags" } } }, // unique
            { $project: { _id: 0, tags: 1 } }
        ]);

        const uniqueTags = uniqueTagsAgg[0]?.tags || [];

        if (uniqueTags.length === 0)
            return res.status(400).json({success: false, message: "No tags to sent"});
        return res.status(200).json(uniqueTags);
    }
    catch (err){
        return res.status(404).json({success: false, error: err.message})
    }
}

// // Function to getNotes by Tag for user (X)
const getNotebyTag = async (req, res) => {
    try{
        const tag = req.params.tag;
        const notebyTag = await Note.find({tags: tag})
        if (notebyTag.length === 0)
            return res.status(400).json({ success: false, message: "Cannot find note by specified Tag"})
        return res.status(200).json(notebyTag);
    }
    catch (err){
        return res.status(404).json( {success: false, error: err.message} )
    }
}

// // Function to getNotes by Title for user (X)
// An extra feature we can add is by getting from the database notes that has title no exact match is necessary
const getNotebyTitle = async (req, res) => {
    try{
        const title = req.params.title;
        const notebyTitle = await Note.find({title: title})
        if (notebyTitle.length === 0)
            return res.status(400).json( {success: false, message: "Cannot find note by specified Title"} )
        return res.status(200).json(notebyTitle);
    }
    catch (err){
        return res.status(404).json( {success: false, error: err.message} )
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
            return res.status(400).json({ success: false, message: "Couldn't find the Note"} )


        const title = getNotebyID.title;
        const content = getNotebyID.content;
        const tags = getNotebyID.tags;
        // user as well
        // const user = getNotebyID.user;
        const archieveNote = new ArchieveNote({title, content, tags});
        await archieveNote.save();

        await Note.findByIdAndDelete(noteID);

        return res.status(200).json({ success: true, message: "Archieved Note"} );
    }   catch (err){
        return res.status(404).json( { success: false, error: err.message} )
    }
}

// // Function to get Archieve Note for user (X)
const getArchieveNote = async (req, res) => {
    try{
        // Will be replaced later by find by specific Person
        const notes = await ArchieveNote.find();
        if (notes.length === 0)
            return res.status(400).json( { success:false, message: "No Archieve Notes" } )
        
        return res.status(200).json(notes)
    }
    catch (err){
        return res.status(404).json( {success: false, error: err.message} )
    }
}

// Function to get Tag of Archieve Notes for User (X)
const getTagOfArchieve = async (req, res) => {
    try{
        const uniqueTagsAgg  = await ArchieveNote.aggregate([
            { $unwind: "$tags" },                      // flatten arrays
            { $group: { _id: null, tags: { $addToSet: "$tags" } } }, // unique
            { $project: { _id: 0, tags: 1 } }
        ]);

        const uniqueTags = uniqueTagsAgg[0]?.tags || [];

        if (uniqueTags.length === 0)
            return res.status(400).json({success: false, message: "No tags to sent"});
        return res.status(200).json(uniqueTags);
    }
    catch (err){
        return res.status(404).json({success: false, error: err.message})
    }
}

// // Function to getArchieveNote by Tag for user (X)
const getArchieveNotebyTag = async (req, res) => {
    try{
        const tag = req.params.tag;
        const notebyTag = await ArchieveNote.find({tags: tag})
        if (notebyTag.length === 0)
            return res.status(400).json( {success: false, message: "Note do not exist"} );
        return res.status(200).json(notebyTag);
    }
    catch (err){
        return res.status(404).json( {success: false, error: err.message} )
    }
}

// Function to getArchieveNotes by Title for user (X)
// An extra feature we can add is by getting from the database notes that has title no exact match is necessary
const getArchieveNotebyTitle = async (req, res) => {
    try{
        const titles = req.params.title;
        const notebyTitle = await ArchieveNote.find({title: titles})
        if (notebyTitle.length === 0)
            return res.status(400).json( {success: false, message: "Note do not exist"} );
        return res.status(200).json(notebyTitle);
    }
    catch (err){
        return res.status(404).json( {success: false, message: "Cannot get notes from Backend"} )
    }
}

// Edit Note
const editNote = async (req, res) =>{
    try{
        const {title, content, id, tags} = req.body;
        const updated = await Note.findByIdAndUpdate(id, {title, content, tags}, { new: true, runValidators: true })
        if (!updated)
            return res.status(400).json( {success: false, message: "Error Updating Note"} )
        return res.status(200).json( {success: true, message: "Updated Note"} )
    }
    catch (err){
        return res.status(404).json( {success: false, error: err.message} )
    }
}

// Edit ArchieveNote
const archieveEditNote = async (req, res) =>{
    try{
        const {title, content, id, tags} = req.body;
        const updated = await ArchieveNote.findByIdAndUpdate(id, {title, content, tags}, { new: true, runValidators: true })
        if (!updated)
            return res.status(400).json( {success: false, message: "Error Updating Note"} )
        return res.status(200).json( {success: true, message: "Updated Note"} )
    }
    catch (err){
        return res.status(404).json( {success: false, error: err.message} )
    }
}

module.exports = {deleteNote, createNote, getNotes, getTagOfNote, getNotebyTag, getNotebyTitle, archieveNote, getArchieveNote, getTagOfArchieve, getArchieveNotebyTag, getArchieveNotebyTitle, editNote, archieveEditNote}