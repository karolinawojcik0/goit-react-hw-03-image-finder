import React, { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchText}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
