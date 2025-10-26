import React from "react";
import "../index.css";

const Contact = () => {
  return (
    <section id="contact" className="section bg-dark">
      <div className="container split">
        {/* Contact Information */}
        <div className="col contact-card">
          <h2>Contact</h2>

          <p>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@kyekyeku.tech"> info@kyekyeku.tech</a>
          </p>

          <p>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+233545454000"> +233 545 454 000</a>
          </p>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            Takoradi, Ghana
          </p>

          {/* Social Links */}
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/oppong-safo-259a35205/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Kyekyeku-Tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://facebook.com/oppong.safo.35"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://wa.me/+233545454000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col form-card">
          <h3>Send a Message</h3>
          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (You can connect this form to EmailJS or Firebase)");
            }}
          >
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
