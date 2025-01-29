import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




export const Home = () => (
  <section className="vh-100 d-flex align-items-center text-light" style={{ backgroundColor: "#2C2C54" }}>
    
    <div className="container text-center">
    <img src="mypicture.jpeg"className="rounded-circle mb-3 shadow-lg" 
        style={{ width:  "180px", height: "180px", objectFit: "cover", border: "4px solid #5F4B8B" }} 
      />
      <h1 className="display-3 fw-bold">Prateeksha GV</h1>
      <p className="lead">Aspiring AI/ML Engineer</p>
      <Link to="/contact" className="btn btn-outline-light btn-lg mt-4 px-5">Get in Touch</Link>
    </div>
  </section>
);

export default Home;