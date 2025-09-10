import React from "react";
import { FaMapMarkerAlt, FaGraduationCap, FaLightbulb, FaEnvelope } from "react-icons/fa";
import resumePDF from "../assets/AlishbaQureshi-CV.pdf";

const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <h2 className="projects-heading">👩‍💻 About Me</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-10">
        {/* Left - Description */}
        <div className="space-y-6 hero-content">
        <div class="center-text">
  <p>
    Hi! I'm <span class="accent-text font-semibold">Alishba Qureshi</span>, a Software Engineering student from Islamabad, Pakistan. 
    I’m passionate about building innovative <span class="accent-text">Web Applications</span> and exploring the world of <span class="accent-text">Artificial Intelligence</span>.
  </p>

  <p>
    My academic journey has given me strong foundations in software development, databases, mobile applications, and AI/ML. 
    Beyond coding, I enjoy playing <span class="accent-text">badminton</span> and constantly challenging myself with new learning opportunities.
  </p>

  <p>
    I aim to contribute to impactful software solutions in Pakistan and grow as both an engineer and a problem solver. 🚀
  </p>
</div>
 
          {/* Resume Button */}
          <a
            href={resumePDF}
            download="AlishbaQureshi-CV.pdf"
            className="primary-button mt-4 inline-block"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Right - Info Cards */}
        <div className="grid grid-cols-1 gap-6">
          <div className="about-info-card flex items-center gap-4 p-4">
            <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-semibold text-white">Islamabad, Pakistan</p>
            </div>
          </div>

          <div className="about-info-card flex items-center gap-4 p-4">
            <FaGraduationCap className="text-pink-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">Education</p>
              <p className="font-semibold text-white">BS Software Engineering</p>
            </div>
          </div>

          <div className="about-info-card flex items-center gap-4 p-4">
            <FaLightbulb className="text-yellow-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">Expertise</p>
              <p className="font-semibold text-white">AI & Web Development</p>
            </div>
          </div>

          <div className="about-info-card flex items-center gap-4 p-4">
            <FaEnvelope className="text-purple-400 text-2xl" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold text-white">alishbaqureshi593@gmail.com</p>
            </div>
          </div>
        </div>
      </div> {/* <-- Closing max-w-5xl grid div */}
    </section>
  );
};

export default About;
