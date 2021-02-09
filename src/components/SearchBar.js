import React from 'react';
import SearchIcon from '@material-ui/icons/Search';



const SearchBar = ({ handleChange, handleSubmit, searchValue }) => {
  return (
    <form className="header__search" onSubmit={handleSubmit}>
      <SearchIcon />
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
