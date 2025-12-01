import React from 'react';
import './SearchOverlay.css';
import SearchBar from './SearchBar';
import { useState } from 'react';

function SearchOverlay({ closeSearch }) {
   
   const [searchValue, setSearchValue] = useState('');
   
  
   return (
    <div className='search-overlay'>
      <div className='search-overlay-search-div'>
         
         <SearchBar 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
         />
         <button onClick={closeSearch} className='search-overlay-close-search'>cancel</button>
      </div>
    </div>
  )
}

export default SearchOverlay;