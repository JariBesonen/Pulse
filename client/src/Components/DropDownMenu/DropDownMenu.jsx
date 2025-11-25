import React from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.css";

function DropDownMenu() {
  return (
    <div className="dropdown-menu-wrapper">
      <ul>
        <li>
          <Link to={"/"}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/create"}>
            <p>Create</p>
          </Link>
        </li>
        <li>
          <Link to={"/explore"}>
            <p>Explore</p>
          </Link>
        </li>
        <li>
          <Link to={"/profile"}>
            <p>Profile</p>
          </Link>
        </li>
        <li>
          <Link to={"/settings"}>
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default DropDownMenu;
