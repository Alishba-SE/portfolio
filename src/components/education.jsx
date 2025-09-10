import React from "react";

const Education = () => {
  const timelineData = [
    {
      type: "Experience",
      title: "Web Development Intern",
      subtitle: "PTCL Headquarter | Aug 2025 – Sep 2025",
      details: [
        "Developed features in React & Node.js",
        
      ],
      color: "yellow-400",
    },
    {
      type: "Education",
      title: "BSc in Software Engineering",
      subtitle: "Capital University of Science and Technology (CUST)",
      details: [
        "Relevant Coursework: AI, DB Systems, Web Engineering, Mobile App Dev",
        "Focus Areas: AI/ML, IoT, Web Development, App Development",
        "Final Year Project: Not decided",
      ],
      color: "cyan-400",
    },
    {
      type: "Achievements",
      title: "Awards & Certificates",
      subtitle: "CUST & Hackathons",
      details: [
        "3× Chancellor’s Honor Certificates (4.0 GPA)",
        "3× Dean’s Honor Certificates",
        "Hackathon Participation Certificate",
      ],
      color: "pink-400",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-background relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="projects-heading text-center mb-16">🎓 My Journey</h2>

        <div className="relative timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div
                className={`timeline-marker bg-${item.color}-500 shadow-neon marker-glow`}
              />
              <div className="timeline-content bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-neon hover:shadow-neon-lg transition-all duration-500">
                <h3
                  className={`text-xl font-bold text-${item.color}-400 mb-2 flex items-center gap-2`}
                >
                  {item.type === "Experience" ? "💼" : item.type === "Education" ? "🎓" : "🏆"} {item.type}
                </h3>
                <p className="text-gray-300 font-semibold mb-1">{item.title}</p>
                <p className="text-gray-400 italic mb-2">{item.subtitle}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
