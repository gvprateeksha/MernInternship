import React from "react";

export const Projects = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-5 fw-bold text-primary">Projects</h2>
      <div className="row">
        {[{
          title: "Smart Waste Sorting",
          description: "Deep learning and computer vision-based system for material classification.",
          img: "https://via.placeholder.com/600x400"
        }, {
          title: "Keyword Extraction",
          description: "NLP-based system for text summarization and keyword extraction.",
          img: "https://via.placeholder.com/600x400"
        }, {
          title: "Recipe Recommendation System",
          description: "AI-driven platform suggesting recipes based on user preferences and dietary needs.",
          img: "https://via.placeholder.com/600x400"
        }, {
          title: "E-commerce Analytics Dashboard",
          description: "Dashboard for analyzing e-commerce sales data, tracking KPIs, and predicting trends.",
          img: "https://via.placeholder.com/600x400"
        }].map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card border-0 shadow-sm h-100">
              <img src={project.img} className="card-img-top" alt={project.title} />
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
);

export default Projects;
