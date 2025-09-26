const mongoose = require('mongoose')
// Schema for All Notes
const notesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    archieved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    tags: [{ type: String }], 
    user: { type: String }
})

module.exports = mongoose.model("Note", notesSchema);