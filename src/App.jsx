import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import About from "./components/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking
    }
  };

  return (
    <div className="neon-portfolio">
      {/* Neon Background */}
      <div className="neon-background">
        <div className="gradient-ring gradient-ring-1"></div>
        <div className="gradient-ring gradient-ring-2"></div>
        <div className="gradient-ring gradient-ring-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">Alishba Qureshi</div>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`} id="nav-links">
            <button onClick={() => scrollToSection("about")} className="nav-link">About me</button>
            <button onClick={() => scrollToSection("education")} className="nav-link">My Journey</button>
            <button onClick={() => scrollToSection("projects")} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection("skills")} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
          </nav>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
