import React from "react";
import "../index.css";

const Portfolio = () => {
  // Example function for button click
  const viewLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="portfolio" className="section bg-dark">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project">
            <img src="/images/mybusiness.png" alt="Personal Portfolio" />
            <h4>Personal Portfolio</h4>
            <p>Web development</p>
            <button
              className="eye-btn"
              onClick={() => viewLink("https://kyekyeku-tech.site")}
            >
              <i className="fa fa-eye"></i>
            </button>
          </div>

          {/* Project 2 */}
          <div className="project">
            <img src="/images/thenelson.png" alt="Foundation" />
            <h4>Foundation Website</h4>
            <p>Web development</p>
            <button
              className="eye-btn"
              onClick={() =>
                viewLink("https://thenelsonfoundation.netlify.app")
              }
            >
              <i className="fa fa-eye"></i>
            </button>
          </div>

          {/* Project 3 */}
          <div className="project">
            <img src="/images/socialmedia boost.png" alt="Web App" />
            <h4>Social Media Boost</h4>
            <p>Applications</p>
            <button className="eye-btn" onClick={() => viewLink("#")}>
              <i className="fa fa-eye"></i>
            </button>
          </div>

          {/* Add more projects as needed */}
          <div className="project">
            <img src="/images/ebolotrading.png" alt="Ebolo Trading" />
            <h4>Ebolo Trading Doha</h4>
            <p>Web App</p>
            <button className="eye-btn" onClick={() => viewLink("#")}>
              <i className="fa fa-eye"></i>
            </button>
          </div>

          <div className="project">
            <img src="/images/chidizwifibank.png" alt="Android" />
            <h4>Chidiz Wifi Bank </h4>
            <p>Web Development</p>
            <button className="eye-btn" onClick={() => viewLink("#")}>
              <i className="fa fa-eye"></i>
            </button>
          </div>

          <div className="project">
            <img src="/images/ayekooccusms.png" alt="Sms portal" />
            <h4>Ayeccu Sms Portal</h4>
            <p>Web Development</p>
            <button className="eye-btn" onClick={() => viewLink("#")}>
              <i className="fa fa-eye"></i>
            </button>
          </div>
          <div className="project">
            <img src="/images/nanabees.png" alt="Foundation" />
            <h4>Nana-Beesfoundation</h4>
            <p>Foundation Website</p>
            <button className="eye-btn" onClick={() => viewLink("#")}>
              <i className="fa fa-eye"></i>
            </button>
          </div>
          <div className="project">
            <img src="/images/mr.bankersms.png" alt="Sms Portal" />
            <h4>Mr. Banker SMS Portal</h4>
            <p>Web App | SMS portal</p>
            <button className="eye-btn" onClick={() => viewLink("#")}>
              <i className="fa fa-eye"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
