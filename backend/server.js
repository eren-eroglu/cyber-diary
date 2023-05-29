const express = require("express");
const app = express();
const cors = require('cors');
const entriesRouter = require("./routes/entries");
require("dotenv").config();
const connectDB = require("./db/db"); // Import the connectDB function

// Set up middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount the routes
app.use("/api/entries", entriesRouter);

// Connect to the database
connectDB();

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
