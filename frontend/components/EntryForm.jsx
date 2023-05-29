import  { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
const EntryForm = ({ onEntryCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new entry
      const response = await axios.post("/api/entries", { title, content });
      const newEntry = response.data;

      // Reset the form fields
      setTitle("");
      setContent("");

      // Invoke the callback with the newly created entry
      onEntryCreated(newEntry);
    } catch (error) {
      console.error("Failed to create a new entry:", error);
    }
  };

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Save Entry</button>
      </form>
    </div>
  );
};

EntryForm.propTypes = {
  onEntryCreated: PropTypes.func.isRequired,
};

export default EntryForm;
