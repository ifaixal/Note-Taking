const express = require('express');
const dotenv = require('dotenv');   //To get private data
const connectDB = require('./config/db'); //To Connect with Database
const notesRoute = require('./routes/notesRoute');

//Load Dotenv Config
dotenv.config();

const port = process.env.PORT;  //Port which will run this server
const app = express();  //Initialize App

app.use(express.json());

app.use('/api/notes', notesRoute);

connectDB();
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})