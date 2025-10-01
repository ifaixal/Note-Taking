const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');
const notesRoute = require('./routes/notesRoute');

const PORT = process.env.PORT;

const app = express();

const allowedOrigins = ['http://localhost:5173', 'http://10.29.44.41:5173'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/notes', notesRoute);

connectDB();    //Connect Database

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
