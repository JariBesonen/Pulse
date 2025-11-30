import React from 'react';
import './Post.css';

function Post({  }) {
  return (
    <div className='post-container'>
      <div className="post-uploader-info-div">
         <div className='post-uploader-profile-pic'></div>
         <h3 className="post-uploader-community-name">Music</h3>
      </div>
      
      <h2 className='post-title'>What music genre do you hate the most?</h2>
    </div>
  )
}

export default Post