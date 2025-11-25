import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import DropDownMenu from "./Components/DropDownMenu/DropDownMenu.jsx";
import Home from "./Pages/Home/Home.jsx";
import Profile from "./Pages/Profile/Profile.jsx";

function App() {
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);

  function toggleDropdownMenu() {
    setMenuDropdownVisible((prev) => !prev);
  }

  return (
    <Router>
      <Navbar toggleDropdownMenu={toggleDropdownMenu} />

      {menuDropdownVisible && <DropDownMenu />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
