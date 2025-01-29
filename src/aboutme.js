// AboutMe.js
import React from "react";

const AboutMe = () => {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-purple">About Me</h2>
        <div className="row">
          {/* First Box: Introduction */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <p className="text-dark">
                  Hello, I'm a passionate Front-End Developer and Machine Learning Engineer. 
                  I love solving complex problems and building intuitive, user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Second Box: Hackathons */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <p className="text-dark">
                  I have participated in various hackathons, including:
                </p>
                <ul className="text-dark">
                  <li>SelfE Hackathon – Secured 9th place among 70 teams</li>
                  <li>Industrial Hackathon</li>
                  <li>Freshathon</li>
                  <li>Ideathon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Third Box: MERN Stack Internship */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <p className="text-dark">
                  In addition to my hackathon experiences, I have completed a <strong>MERN Stack internship</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Box: Java and DSA Training */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <p className="text-dark">
                  I also participated in a <strong>Java, DSA (Data Structures and Algorithms) training session</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
