import React from 'react';
import './SearchOverlay.css';
import SearchBar from './SearchBar';
import { useState, useRef, useEffect } from 'react';

function SearchOverlay({ closeSearch, searchActivated }) {
   
   const [searchValue, setSearchValue] = useState('');

   const searchBarRef = useRef(); 
   
   function activateSearch() {
      if (searchBarRef.current) {
         searchBarRef.current.focus();
      }
   }

   useEffect(() => {
      activateSearch();
   }, [searchActivated]);
  
   return (
    <div className='search-overlay'>
      <div className='search-overlay-search-div'>
         
         <SearchBar 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            activateSearch={activateSearch}
            searchBarRef={searchBarRef}
         />
         <button onClick={closeSearch} className='search-overlay-close-search'>cancel</button>
      </div>

      <div className="so-suggestions-div">
         <div className="so-section">
            <h2 className='so-section-header'>Suggestions</h2>
            
            <ul className="so-list">
               <li>
                  <span>music</span>
               </li>
               <li>
                  <span>musical instruments</span>
               </li>
            </ul>
         </div>
         <div className="so-section">
            <h2 className='so-section-header'>Recent Searches</h2>
            
            <ul className="so-list">
               <li>
                  <span>music</span>
               </li>
               <li>
                  <span>language learning</span>
               </li>
            </ul>
         </div>
         <div className="so-section">
            <h2 className='so-section-header'>Trending</h2>
            
            <ul className="so-list">
               <li>
                  <span>memes</span>
               </li>
               <li>
                  <span>politics</span>
               </li>
               <li>
                  <span>nature</span>
               </li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default SearchOverlay;