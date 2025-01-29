import React from "react";

export const Skills = () => (
  <section className="py-5 bg-violet">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold text-white">My Skills</h2>
      <div className="row">
        {[
          { skill: "C", img: "https://via.placeholder.com/100x100?text=C" },
          { skill: "C++", img: "https://via.placeholder.com/100x100?text=C++" },
          { skill: "Python", img: "https://via.placeholder.com/100x100?text=Python" },
          { skill: "JavaScript", img: "https://via.placeholder.com/100x100?text=JS" },
          { skill: "SQL", img: "https://via.placeholder.com/100x100?text=SQL" },
          { skill: "HTML/CSS", img: "https://via.placeholder.com/100x100?text=HTML/CSS" }
        ].map((item, index) => (
          <div className="col-md-4 text-center mb-4" key={index}>
            <div className="card border-0 shadow-sm">
              <img src={item.img} alt={item.skill} className="card-img-top rounded-circle mx-auto" />
              <div className="card-body">
                <h5 className="card-title text-white">{item.skill}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
