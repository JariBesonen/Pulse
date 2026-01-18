import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavbar.css";
function ProfileNavbar() {
  return (
    <>
      <div className="profile-banner">
        <div className="banner-profile-pic"></div>
        <span className="banner-username">username</span>
        <button className="banner-message-btn">message</button>
      </div>
      <nav className="profile-nav">
        <ul>
          <li>
            <Link to={"/profileposts"}>posts</Link>
          </li>
          <li>
            <Link to={"/profileforums"}>forums</Link>
          </li>
          <li>
            <Link to={"/profilesaved"}>saved</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ProfileNavbar;
