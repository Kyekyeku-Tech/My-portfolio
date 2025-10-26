// src/components/Hero.jsx
import React from "react";
import "../index.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        <div className="profile-stage">
          <div className="avatar-wrap">
            <img
              src="/images/my-avatar.png"
              alt="Safo Oppong"
              className="avatar"
            />
            <div className="glow"></div>
          </div>

          <div className="orbit">
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="Html5"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="Css3"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="Javascript"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" alt="Python"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="Java"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg" alt="Andriod"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github"/>
            <img className="orb-logo" src="https://www.svgrepo.com/show/303589/office-1-logo.svg" alt="microsoft suit"/>
          </div>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Safo Oppong</h1>
          <p className="hero-sub">Front-end Developer • Android Apps • Microsoft Suite</p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn primary">View Work</a>
            <a href="#contact" className="btn ghost">Hire Me</a>
             <a href="/document/my_cv.pdf" className="eye-btn" target="_blank"
            rel="noopener noreferrer"
          >
              <i className="fa fa-eye"></i>
              <span>View CV</span>
            </a>
            <a href="/document/my_cv.pdf" download className="cv-btn download">
              <i className="fa fa-download"></i>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
