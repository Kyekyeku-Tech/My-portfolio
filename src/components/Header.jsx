import React from "react";
import "../index.css";
const Header = () => {
    return (
        <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home">
        <span class="brand-icon">⚡</span>
        <span class="brand-text">Kyekyeku-Tech</span>
      </a>

      <nav class="nav">
        <ul class="nav-list" id="navList">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#resume" class="nav-link">Resume</a></li>
          <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
          <li><a href="#awards" class="nav-link">Awards</a></li>
          <li><a href="#certificates" class="nav-link">Certificates</a></li>
          <li><a href="#transcript" class="nav-link">Transcript</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
      </button>
    </div>

    <div class="mobile-panel" id="mobilePanel" aria-hidden="true">
      <ul class="mobile-list">
        <li><a href="#home" class="mobile-link">Home</a></li>
        <li><a href="#about" class="mobile-link">About</a></li>
        <li><a href="#resume" class="mobile-link">Resume</a></li>
        <li><a href="#portfolio" class="mobile-link">Portfolio</a></li>
        <li><a href="#certificates" class="mobile-link">Certificates</a></li>
        <li><a href="#transcript" class="mobile-link">Transcript</a></li>
        <li><a href="#contact" class="mobile-link">Contact</a></li>
      </ul>
    </div>
  </header>
    );
};

export default Header;