import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EntryList from '../../components/EntryList';
import EntryForm from '../../components/EntryForm';

const Home = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch entries from the backend API
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Failed to fetch entries:', error);
      }
    };

    fetchEntries();
  }, []);

  const handleEntryCreated = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <div>
      <h1>My Diary Entries</h1>
      <EntryList entries={entries} />
      <EntryForm onEntryCreated={handleEntryCreated} />
    </div>
  );
};

export default Home;
