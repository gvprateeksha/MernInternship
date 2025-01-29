import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct way to use Routes and Route
import { BrowserRouter } from "react-router-dom"; 
import Navbar from "./nav"; 
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";
import Education from "./education"; // Ensure this is imported

const App = () => {
  return (
    
    <>
    <BrowserRouter></BrowserRouter>
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
      <BrowserRouter/>
    </>
    
  );
};

export default App;