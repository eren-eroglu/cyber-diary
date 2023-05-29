import { useState } from 'react';
import axios from 'axios';

const CreateEntry = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new entry
      const response = await axios.post('http://localhost:5000/api/entries', { title, content });
      console.log('New entry created:', response.data);

      // Reset the form fields
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to create a new entry:', error);
    }
  }; // Add the closing bracket here

  return (
    <div>
      <h1>Create New Entry</h1>
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

export default CreateEntry;
