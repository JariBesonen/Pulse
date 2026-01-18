import React from "react";
import "./ProfileSaved.css";
import ProfileNavbar from "../../Components/ProfileNavbar/ProfileNavbar";
function ProfileSaved() {
  return (
    <div className="profilesaved-page">
      <ProfileNavbar />
      <div className="saved-list">
        <div className="saved-post">
          <div className="post-users-info-wrapper">
            <div className="post-profile-pic"></div>
            <p>username</p>
          </div>
          <span>content</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileSaved;
