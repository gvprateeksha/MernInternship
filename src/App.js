import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./home";
import Skills from "./skills";
import Projects from "./projects";
import AboutMe from "./aboutme";  // Import the AboutMe component
import Contact from "./contact";

const App = () => {
  return (
    <Router>
      <div style={{ backgroundColor: "#2A2A2A", color: "#fff" }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#5F4B8B" }}>
          <div className="container">
            <Link className="navbar-brand text-light fw-bold" to="/">Prateeksha GV</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link text-light" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/skills">Skills</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/projects">Projects</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/aboutme">About Me</Link></li> {/* Updated to AboutMe */}
                <li className="nav-item"><Link className="nav-link text-light" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutMe" element={<AboutMe />} /> {/* Updated to AboutMe */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
