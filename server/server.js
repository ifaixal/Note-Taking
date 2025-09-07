const express = require('express');
const dotenv = require('dotenv');

//Load Dotenv Config
dotenv.config();

const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})