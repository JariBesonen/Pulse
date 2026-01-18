import React from "react";
import "./CreateForum.css";

function CreateForum() {
  return (
    <div className="create-forum-page">
      <form className="create-forum-form">
        <h2>create forum</h2>
        <label htmlFor="forum-name">forum name</label>
        <input type="text" id="forum-name" />
        <label htmlFor="forum-description">forum description</label>
        <textarea name="" id="forum-description"></textarea>
        <label htmlFor="forum-tags">help users find your forum</label>
        <input type="text" id="forum-tags" placeholder="#music, #funny.."/>
        <button className="create-forum-btn">create forum</button>
      </form>
    </div>
  );
}

export default CreateForum;
