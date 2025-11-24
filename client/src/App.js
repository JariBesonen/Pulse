import './App.css';
import Navbar from './Components/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from reactRouterDom;
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
