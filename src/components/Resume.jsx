import React from "react";
import "../index.css";

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2>Resume</h2>
        <div className="timeline">
          <div className="tl-item">
            <time>2024 — Present</time>
            <h4>Takoradi Technical University</h4>
            <p>Studying tech + marketing intersection.</p>
          </div>
          <div className="tl-item">
            <time>2023 — 2024</time>
            <h4>ALX Africa</h4>
            <p>Front-end and developer training.</p>
          </div>
          <div className="tl-item">
            <time>2018 — 2022</time>
            <h4>Sales Executive</h4>
            <p>Sales, client relations and data management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
