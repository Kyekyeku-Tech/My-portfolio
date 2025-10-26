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
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg"/>
            <img className="orb-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
            <img className="orb-logo" src="https://www.svgrepo.com/show/504591/microsoft-office.svg"/>
          </div>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Safo Oppong</h1>
          <p className="hero-sub">Front-end Developer • Android Apps • Microsoft Suite</p>
          <div className="hero-cta">
            <a href="#portfolio" className="btn primary">View Work</a>
            <a href="#contact" className="btn ghost">Hire Me</a>
            <button className="cv-btn view">
              <i className="fa fa-eye"></i>
              <span>View CV</span>
            </button>
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
