import React from "react";
import { FaGithub } from "react-icons/fa";

/* Your project data */
const projects = [
  {
    name: "Fight Detection System",
    url: "https://github.com/VikramaDhanvi/Fight-Detection",
    desc: "Real-time video-based violence detection using CNN models and frame classification.",
  },
  {
    name: "Real Estate Website",
    url: "https://github.com/VikramaDhanvi/Real-Estatw-Website/tree/main",
    desc: "Property-listing platform with filtering, chat, and login built with PHP, JS, MySQL.",
  },
  {
    name: "Insurance Cost Prediction",
    url: "https://github.com/VikramaDhanvi/Medical-Insurance-Cost-Prediction",
    desc: "Predictive model estimating medical costs using scikit-learn regression.",
  },
  {
    name: "Telemedicine Platform",
    url: "https://github.com/VikramaDhanvi/telemedicine-platform",
    desc: "Online doctor-consultation platform with authentication, dashboard, and appointments.",
  },
];

const Projects = () => (
  <section id="projects" className="py-5">
    <div className="container">
      <h2 className="fw-bold mb-4">Projects</h2>

      <div className="row g-4">
        {projects.map((proj) => (
          <div className="col-md-6" key={proj.name}>
            <div className="card project-card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                {/* title */}
                <h5 className="card-title fw-semibold">
                  <FaGithub className="me-2" /> {proj.name}
                </h5>

                {/* description */}
                <p className="card-text flex-grow-1">{proj.desc}</p>

                {/* neon-gradient button */}
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  className="align-self-start"
                >
                  <button className="button">
                    <FaGithub className="me-1" />
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
