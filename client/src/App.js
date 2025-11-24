import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
