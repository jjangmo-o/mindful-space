import './App.css'; 
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      
      {/* The Header stays visible on ALL pages */}
      <Header />

      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
        {/* We use Link instead of <a href> to stop the page from reloading */}
        <Link to="/" style={{ textDecoration: "none", color: "#00bcd4", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#00bcd4", fontWeight: "bold" }}>
          About Us
        </Link>
      </nav>

      {/* The "Traffic Controller" - Switches content based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;