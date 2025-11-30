import React from 'react';
import './Home.css';
import Post from '../../Components/Post/Post';

function Home() {
  return (
    <div className='home-page'>
      <h1 className='home-page-trending-h1'>Trending</h1>
      
      <ul className="home-page-feed-ul">
        <li className="home-page-feed-li">
          <Post />
        </li>
        <li className="home-page-feed-li">
          <Post />
        </li>
        <li className="home-page-feed-li">
          <Post />
        </li>
        <li className="home-page-feed-li">
          <Post />
        </li>
      </ul>

    </div>
  )
}

export default Home