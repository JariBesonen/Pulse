import React from "react";
import "./ProfilePosts.css";
import ProfileNavbar from "../../Components/ProfileNavbar/ProfileNavbar";

function ProfilePosts() {
  return (
    <div className="profile-page">
      <ProfileNavbar />
      <div className="posts-list">
        <div className="post">
          <div className="post-users-info-wrapper">
            <div className="div post-profile-pic"></div>
            <p>username</p>
          </div>
          <span>content</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePosts;
