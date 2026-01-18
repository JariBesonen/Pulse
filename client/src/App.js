import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu.jsx";
import Home from "./Pages/Home/Home.jsx";
import ProfilePosts from "./Pages/Profile/ProfilePosts.jsx";
import Create from "./Pages/Create/Create.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import SearchOverlay from "./Components/SearchOverlay/SearchOverlay.jsx";
import ProfileForums from "./Pages/ProfileForums/ProfileForums.jsx";
import ProfileSaved from "./Pages/ProfileSaved/ProfileSaved.jsx";

function App() {
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const [searchActivated, setSearchActivated] = useState(false);

  function toggleDropdownMenu() {
    setMenuDropdownVisible((prev) => !prev);
  }

  function closeDropdownMenu() {
    setMenuDropdownVisible(false);
  }

  function openSearch() {
    setSearchActivated(true);
  }

  function closeSearch() {
    setSearchActivated(false);
  }

  return (
    <Router>
      <Navbar toggleDropdownMenu={toggleDropdownMenu} openSearch={openSearch} />

      {searchActivated && (
        <SearchOverlay
          closeSearch={closeSearch}
          searchActivated={searchActivated}
        />
      )}

      {menuDropdownVisible && (
        <DropDownMenu closeDropdownMenu={closeDropdownMenu} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileposts" element={<ProfilePosts />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/profileforums" element={<ProfileForums />} />
        <Route path="/profilesaved" element={<ProfileSaved />} />
      </Routes>
    </Router>
  );
}

export default App;
