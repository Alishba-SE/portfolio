// src/components/Projects.jsx
import React from "react";
import project1 from "../assets/gameSS.jpg";
import project2 from "../assets/LushSS.jpg";
import project3 from "../assets/hireahelperSS.jpg";
import project4 from "../assets/handSS.jpg";
import project5 from "../assets/bioscoutSS.jpg";
import project6 from "../assets/hireahelperSS.jpg";
import project7 from "../assets/baazsSS.jpg";

const projects = [
  {
    id: 1,
   title: "3D Game (End of the World)",
description: "An open-world survival game in Unity where players explore a post-apocalyptic environment, gather resources, and survive against hazards and hostile creatures.",
image: project1,
link: "#",


  },
  {
    id: 2,
  title: "E-commerce App (Lushdrobe)",
description: "An Android shopping app built with Android Studio, featuring easy browsing, product categories, and secure checkout for makeup products.",
image: project2,
link: "#",

  },
  {
    id: 3,
 title: "Website (Hire a Helper)",
description: "A web platform to quickly find and hire laborers, plumbers, gardeners, and other workers in Islamabad.",
image: project3,
link: "#",

  },
  {
    id: 4,
    title: "Hand Gesture Model",
   description: "An AI model that identifies specific Urdu Sign Language words, enabling easier communication for the hearing-impaired community.",

    image: project4,
    link: "#",
  },
  {
    id: 5,
    title: "BioScout Website",
    description: "BioScout is a web platform I built to help users document, identify, and explore biodiversity observations in Islamabad.",
    image: project5,
    link: "#",
  },
  {
    id: 6,
    title: "Weather Forecast Prediction Model",
    description: "Built a forecasting model using Poisson regression, trained on historical weather data to predict rainy days based on temperature, humidity, and wind speed.",
    image: project6,
    link: "#",
  },
  {
    id: 7,
    title: "BAAZS Clothing Store",
    description: "Trained a hand gesture recognition model using Teachable Machine to classify various gestures for potential sign language applications.",
    image: project7,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section py-16" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
