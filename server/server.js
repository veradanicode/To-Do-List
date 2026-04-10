require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectToDB = require('./database/db');

// Connect to MongoDB
connectToDB();

    


app.listen(port, () => {
  console.log(` To-Do app listening at http://localhost:${port}`);
});