import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct way to use Routes and Route

import Navbar from "./components/Navbar"; 
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education"; // Ensure this is imported

const App = () => {
  return (
    <>
      <Navbar /> {/* Include the Navbar */}
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} /> {/* Education route */}
      </Routes>
    </>
  );
};

export default App;
