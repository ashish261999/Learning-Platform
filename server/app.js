const express = require('express');
const connectDb = require('./database/bd');
const userroute = require("./routes/user.route");
const cookieParser = require('cookie-parser');
const cors= require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;


connectDb();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:8080",
  credentials:true
}));




app.use("/api/user" ,userroute);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
