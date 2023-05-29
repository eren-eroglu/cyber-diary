const Entry = require('../models/Entry');

// Get all entries
const getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving entries' });
  }
};

// Create a new entry
const createEntry = async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create a new entry' });
  }
};

// Update an entry
const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEntry = await Entry.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the entry' });
  }
};

// Delete an entry
const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    await Entry.findByIdAndRemove(id);
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete the entry' });
  }
};

module.exports = {
  getAllEntries,
  createEntry,
  updateEntry,
  deleteEntry,
};
