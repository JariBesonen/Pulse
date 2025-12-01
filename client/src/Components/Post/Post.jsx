import React from 'react';
import './Post.css';
import CommentButton from '../PostActions/CommentButton';
import LikeButton from '../PostActions/LikeButton';
import DislikeButton from '../PostActions/DislikeButton';

function Post({  }) {
  return (
    <div className='post-container'>
      <div className="post-uploader-info-div">
         <div className='post-uploader-profile-pic'></div>
         <h3 className="post-uploader-community-name">Music</h3>
      </div>
      
      <h2 className='post-title'>What music genre do you hate the most?</h2>
    
      <ul className='post-actions-ul'>
         <li className='post-actions-li'>
          <LikeButton />
         </li>
         <li className='post-actions-li'>
          <DislikeButton />
         </li>
         <li className='post-actions-li'>
          <CommentButton />
         </li>
      </ul>
    </div>
  )
}

export default Post