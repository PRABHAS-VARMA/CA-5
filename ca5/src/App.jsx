import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';

const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <Router>
      <div>
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/CA-5" element={<BookList searchText={searchText} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
