//Import the mongoose Setup
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        const conn = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected to MongoDB`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports = connectDB