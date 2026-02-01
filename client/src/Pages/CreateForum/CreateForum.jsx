import React, { useState } from "react";
import "./CreateForum.css";

function CreateForum() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forumName, setForumName] = useState("");
  const [forumDes, setForumDes] = useState("");
  // const [forumTags, setForumTags] = useState([]);

  const handleCreateForum = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(forumName, forumDes);
    try {
      const response = await fetch("/api/forums/createForum", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ forumName, forumDes }),
      });
      //I'll continue to finish working on data. just using console.log as a place holder
      const data = await response.json();
      console.log(data);
      setForumName('');
      setForumDes('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-forum-page">
      <form onSubmit={handleCreateForum} className="create-forum-form">
        <h2>create forum</h2>
        {error && <p>{error}</p>}
        {loading && <p>loading..</p>}
        <label htmlFor="forum-name">forum name</label>
        <input
          type="text"
          id="forum-name"
          onChange={(e) => setForumName(e.target.value)}
          value={forumName}
          required
        />
        <label htmlFor="forum-description">forum description</label>
        <textarea
          id="forum-description"
          onChange={(e) => setForumDes(e.target.value)}
          value={forumDes}
          required
        ></textarea>
        {/* <label htmlFor="forum-tags">help users find your forum</label>
        <input
          type="text"
          id="forum-tags"
          placeholder="#music, #funny.."
          onChange={(e) => setForumTags(e.target.value)}
          value={forumTags}
          required
        /> */}
        <button type="submit" className="create-forum-btn">
          create forum
        </button>
      </form>
    </div>
  );
}

export default CreateForum;
