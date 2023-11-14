// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setWord(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className="searchBar">
      <input
        type="search"
        className="searchpanel"
        placeholder="Search your Food"
        value={word}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
