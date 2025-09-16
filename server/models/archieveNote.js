const mongoose = require('mongoose')
// Schema for Archieved Notes
const archieveNoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    tags: [{ type: String }],
    user: { type: String }
})

module.exports = mongoose.model("ArchieveNote", archieveNoteSchema);