import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Prateeksha GV
          </a>
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
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#interests">
                  Interests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="bg-dark text-light text-center py-5">
        <div className="container">
          <h1 className="display-4">Prateeksha GV</h1>
          <p className="lead">Aspiring Machine Learning Engineer</p>
          <a href="#contact" className="btn btn-outline-light mt-3">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-primary">About Me</h2>
          <p className="text-center">
            I am a dedicated and ambitious Machine Learning engineer passionate
            about solving real-world problems using AI and data-driven
            approaches. My journey is fueled by curiosity and a commitment to
            excellence in the field of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center text-pink">Skills</h2>
          <div className="row mt-4">
            {["Python", "Machine Learning", "Deep Learning", "Data Science", "SQL"].map(
              (skill, index) => (
                <div className="col-md-4 text-center mb-3" key={index}>
                  <div className="card bg-secondary text-light">
                    <div className="card-body">
                      <h5>{skill}</h5>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-primary">Projects</h2>
          <div className="row mt-4">
            {[
              {
                title: "Smart Waste Sorting",
                description:
                  "A deep learning-based system for waste classification.",
              },
              {
                title: "Keyword Extraction",
                description:
                  "An NLP-based project for extracting keywords from text.",
              },
            ].map((project, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="bg-dark text-light py-5">
        <div className="container">
          <h2 className="text-center text-pink">Interests</h2>
          <div className="row mt-4">
            {[
              {
                title: "AI and Machine Learning",
                description:
                  "Exploring innovative AI algorithms to solve problems.",
              },
              {
                title: "Data Science",
                description:
                  "Analyzing data and creating actionable insights.",
              },
              {
                title: "Open Source Contributions",
                description:
                  "Collaborating with the community to build tools.",
              },
            ].map((interest, index) => (
              <div className="col-md-4 text-center mb-3" key={index}>
                <div className="card bg-secondary text-light">
                  <div className="card-body">
                    <h5 className="card-title text-pink">{interest.title}</h5>
                    <p className="card-text">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-primary">Contact Me</h2>
          <p>Email: <a href="mailto:prateeksha.gv2023aiml@sece.ac.in">prateeksha.gv2023aiml@sece.ac.in</a></p>
          <p>Phone: 8248717352</p>
          <div className="mt-4">
            <a href="https://github.com" className="btn btn-outline-primary mx-2">
              GitHub
            </a>
            <a href="https://linkedin.com" className="btn btn-outline-primary mx-2">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <p>© 2025 Prateeksha GV. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
