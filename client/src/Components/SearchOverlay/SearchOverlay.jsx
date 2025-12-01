import React from 'react';
import './SearchOverlay.css';
import SearchBar from './SearchBar';
import { useState } from 'react';

function SearchOverlay() {
   
   const [searchValue, setSearchValue] = useState('');
   
  
   return (
    <div className='search-overlay'>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}

export default SearchOverlay;