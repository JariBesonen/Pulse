import React from "react";
import "./ProfileForums.css";
import ProfileNavbar from "../../Components/ProfileNavbar/ProfileNavbar";
function ProfileForums() {
  return (
     <div className="profile-forums-page">
<ProfileNavbar />
  <div className="forums-list">
        <div className="forum">
          <div className="forum-users-info-wrapper">
            <div className="forum-profile-pic"></div>
            <p>forum name</p>
          </div>
          <span>forum description</span>
        </div>
      </div>
     </div>
  )
}
export default ProfileForums;
