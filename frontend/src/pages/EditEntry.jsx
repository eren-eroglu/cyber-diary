import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEntry = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch the entry data from the backend API
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`/api/entries/${id}`);
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.error('Failed to fetch entry:', error);
      }
    };

    fetchEntry();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the entry
      const response = await axios.put(`/api/entries/${id}`, { title, content });
      console.log('Entry updated:', response.data);
    } catch (error) {
      console.error('Failed to update the entry:', error);
    }
  };

  return (
    <div>
      <h1>Edit Entry</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEntry;
