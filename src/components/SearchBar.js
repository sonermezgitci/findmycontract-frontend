import React from 'react';

const SearchBar = ({ handleChange, handleSubmit, searchValue }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='type'
        value={searchValue}
        onChange={handleChange}
        placeholder='Search players...'
      />

      <input type='Submit' />
    </form>
  );
};

export default SearchBar;
