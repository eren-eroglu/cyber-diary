import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreateEntry from './pages/CreateEntry';
import EditEntry from './pages/EditEntry';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/entries/new">Create Entry</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entries/new" element={<CreateEntry />} />
        <Route path="/entries/:id/edit" element={<EditEntry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
