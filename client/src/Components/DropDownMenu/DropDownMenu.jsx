import React from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.css";

function DropDownMenu({ closeDropdownMenu }) {
  
  return (
    <div className="dropdown-menu-wrapper">
      <ul>
        <li>
          <Link to={"/"} onClick={() => closeDropdownMenu()}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"/createforum"} onClick={() => closeDropdownMenu()}>
            <p>Create</p>
          </Link>
        </li>
        <li>
          <Link to={"/explore"} onClick={() => closeDropdownMenu()}>
            <p>Explore</p>
          </Link>
        </li>
        <li>
          <Link to={"/profileposts"} onClick={() => closeDropdownMenu()}>
            <p>Profile</p>
          </Link>
        </li>
        <li>
          <Link to={"/settings"} onClick={() => closeDropdownMenu()}>
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default DropDownMenu;