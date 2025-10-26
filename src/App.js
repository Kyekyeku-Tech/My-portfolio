import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Transcript from "./components/Transcript";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
 
function App() {
  const orbitRef = useRef(null);
  const contactFormRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobilePanelRef = useRef(null);

  // === MOBILE MENU ===
  useEffect(() => {
    const hamburger = hamburgerRef.current || document.getElementById("hamburger");
    const mobilePanel = mobilePanelRef.current || document.getElementById("mobilePanel");

    if (!hamburger || !mobilePanel) return;

    const toggleMenu = () => {
      const open = mobilePanel.classList.toggle("open");
      hamburger.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
      mobilePanel.setAttribute("aria-hidden", open ? "false" : "true");
    };

    const closeMenu = () => {
      mobilePanel.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      mobilePanel.setAttribute("aria-hidden", "true");
    };

    hamburger.addEventListener("click", toggleMenu);
    document.querySelectorAll(".mobile-link").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
      document.querySelectorAll(".mobile-link").forEach((a) =>
        a.removeEventListener("click", closeMenu)
      );
    };
  }, []);

  // === SMOOTH SCROLL ===
  useEffect(() => {
    const anchors = document.querySelectorAll('nav a[href^="#"]');
    const handleClick = (e) => {
      const target = document.querySelector(e.currentTarget.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));
    return () => anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
  }, []);

  // === ORBIT ANIMATION ===
  useEffect(() => {
    const orbit = orbitRef.current || document.getElementById("orbit");
    if (!orbit) return;

    const logos = orbit.querySelectorAll(".orb-logo");
    let last = performance.now();
    let angle = 0;
    const speedDegPerSec = 20;
    let animationFrame;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      angle = (angle + speedDegPerSec * dt) % 360;

      logos.forEach((logo, idx) => {
        const n = logos.length;
        const base = (360 / n) * idx;
        const rad = (Math.PI / 180) * (base + angle);
        const radius = Math.min(135, window.innerWidth < 760 ? 110 : 140);
        const cx = orbit.clientWidth / 2;
        const cy = orbit.clientHeight / 2;
        const x = cx + Math.cos(rad) * radius - logo.clientWidth / 2;
        const y = cy + Math.sin(rad) * radius - logo.clientHeight / 2;
        logo.style.left = `${x}px`;
        logo.style.top = `${y}px`;
        logo.style.transform = `rotate(${-angle}deg)`;
      });

      if (!orbit.classList.contains("paused")) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    const pause = () => orbit.classList.add("paused");
    const resume = () => {
      orbit.classList.remove("paused");
      last = performance.now();
      requestAnimationFrame(tick);
    };

    orbit.addEventListener("mouseenter", pause);
    orbit.addEventListener("mouseleave", resume);

    logos.forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        logo.style.transform += " scale(1.12)";
        logo.style.filter = "drop-shadow(0 10px 18px rgba(0,120,255,0.18))";
      });
      logo.addEventListener("mouseleave", () => {
        logo.style.filter = "";
      });
    });

    return () => {
      orbit.removeEventListener("mouseenter", pause);
      orbit.removeEventListener("mouseleave", resume);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // === CONTACT FORM ===
  useEffect(() => {
    const contactForm = contactFormRef.current || document.getElementById("contactForm");
    if (!contactForm) return;

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(
        "Thanks — message captured locally. Hook up your backend or Netlify form to send it."
      );
      contactForm.reset();
    };

    contactForm.addEventListener("submit", handleSubmit);
    return () => contactForm.removeEventListener("submit", handleSubmit);
  }, []);

  // === HANDLERS FOR VIEW CV / FEEDBACK ===
  const handleViewCV = () => {
    window.open("/document/my_CV.pdf", "_blank");
  };

  const handleFeedback = (feedback) => {
    alert("Thank you for your feedback: " + feedback);
  };

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Certificates />
      <Transcript />
      <Blog />
      <Contact />
      <Footer onViewCV={handleViewCV} onFeedback={handleFeedback} />
    </>
  );
}

export default App;
