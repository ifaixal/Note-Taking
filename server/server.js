const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Note = require('./models/note')

//Load Dotenv Config
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

connectDB();
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})