import React from "react";
import './Logout.css';
function Logout({handleLogout}) {
    return (
        <button onClick={handleLogout} className="logout-btn">logout</button>
    )
}
export default Logout;