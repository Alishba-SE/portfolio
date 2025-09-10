import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: "85%" },
    { name: "JavaScript", level: "90%" },
    { name: "Python", level: "80%" },
    { name: "Game Programming", level: "75%" },
    { name: "Android App Development", level: "70%" },
    { name: "C++", level: "80%" },
    { name: "HTML & CSS", level: "95%" },
    { name: "SQL & Databases", level: "80%" },
    { name: "AI & Machine Learning", level: "65%" }
  ];

  return (
    <section className="skills-section py-16" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-content">
              <h3>{skill.name}</h3>
              <div className="skill-progress-bar">
                <div
                  className="skill-progress-fill"
                  style={{ "--fill-level": skill.level }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
