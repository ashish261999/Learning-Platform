// app.js
const express = require('express');
const connectDb = require('./database/bd');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

connectDb();

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello Ashish! Your server is up and running 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
