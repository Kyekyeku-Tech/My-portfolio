import React from "react";
import "../index.css";

const About = () => {
  return (
    <section id="about" className="section bg-dark">
      <div className="container split">
        <div className="col about-card" data-animate>
          <h2>About Me</h2>
          <p>
            I’m a Website Developer focusing on front-end development and Android apps. I build responsive, accessible websites and mobile experiences, plus I’m strong with Microsoft Office for data workflows.
          </p>

          <ul className="quick-stats">
            <li><strong>25+</strong><span>Projects</span></li>
            <li><strong>10+</strong><span>Clients</span></li>
            <li><strong>8</strong><span>Consultants</span></li>
          </ul>
        </div>

        <div className="col skills-card" data-animate>
          <h3>Skills</h3>
          <div className="skill">
            <label>Communication</label>
            <div className="progress"><div style={{width: "80%"}}></div></div>
          </div>
          <div className="skill">
            <label>Web Development</label>
            <div className="progress"><div style={{width: "70%"}}></div></div>
          </div>
          <div className="skill">
            <label>Microsoft Office</label>
            <div className="progress"><div style={{width: "90%"}}></div></div>
          </div>
          <div className="skill">
            <label>Mobile Applications</label>
            <div className="progress"><div style={{width: "50%"}}></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
