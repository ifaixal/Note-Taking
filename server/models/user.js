const mongoose = require('mongoose')
// Schema of User
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    role: { type: String, enum:["guest", "user"], default: "guest"},

    // limits
    noteLimit: { type: Number, default: 10 }, // example limit for guests
    notesCreated: { type: Number, default: 0 },

    // metadata
    createdAt: { type: Date, default: Date.now },
})

module.export = mongoose.model("user", userSchema);