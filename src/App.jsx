import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education"; // ⬅️ NEW
import About from "./components/About";

function App() {
  // Hamburger toggle for mobile
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }, []);

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

          <nav className="nav-links" id="nav-links">
            <a href="#about" className="nav-link">About me</a>
            <a href="#education" className="nav-link">My Journey</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="hamburger" id="hamburger">&#9776;</div>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Education /> {/* ⬅️ NEW SECTION */}
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
