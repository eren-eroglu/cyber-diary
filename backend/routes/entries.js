const express = require('express');
const router = express.Router();

// Import the controllers
const { getAllEntries, createEntry, updateEntry, deleteEntry } = require('../controllers/entries');

// Define the routes
router.get('/', getAllEntries);
router.post('/', createEntry);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);

module.exports = router;
