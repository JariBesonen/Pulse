import React from 'react';
import './PostActions.css';

function CommentButton() {
  return (
    <button className='post-action-btn'>
      <span className='post-action-count'>13</span>

      <svg className='post-action-icon' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0.5C7.51642 0.5 9.5 2.40582 9.5 4.6875C9.49978 6.96901 7.51628 8.87402 5 8.87402C4.34246 8.87402 3.72066 8.74313 3.16016 8.50879L2.96387 8.42676L2.76953 8.51074L0.538086 9.46777L1.4502 7.74512L1.60352 7.4541L1.39746 7.19824C0.831474 6.49431 0.500089 5.62664 0.5 4.6875C0.5 2.40582 2.48358 0.5 5 0.5Z" fill="white" stroke="white"/>
      </svg>
    </button>
  )
}

export default CommentButton;