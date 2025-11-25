import React from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.css";

function DropDownMenu() {

  const links = [
    { path: "/", label: "Home" },
    { path: "/create", label: "Create" },
    { path: "/explore", label: "Explore" },
    { path: "/profile", label: "Profile" },
    { path: "/settings", label: "Settings" }
  ]
  
  return (
    <div className="dropdown-menu-wrapper">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>
              <p>{link.label}</p>
            </Link>
          </li>
        ))}

        {/* <li>
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
        </li> */}
      </ul>
    </div>
  );
}
export default DropDownMenu;