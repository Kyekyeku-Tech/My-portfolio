import React from "react";
import "../index.css";

const Transcript = () => {
  return (
    <section id="transcript" className="section">
      <div className="container">
        <h2>Academic Transcript</h2>
        <div className="transcript-card">
          <p>
            My academic transcript from <strong>ALX AFRICA</strong> is available below:
          </p>
          <a
            href="/document/transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 View Transcript (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Transcript;
