import React from "react";
import "../index.css";

const certificates = [
  {
    id: 1,
    img: "/images/coursera1.jpeg",
    title: "Microsoft Excel Certificate",
    desc: "SAFO OPPONG's account is verified. Coursera certifies their successful completion of Microsoft Excel.",
    issuer: "Coursera (2024)",
    link: "https://www.coursera.org/account/accomplishments/verify/SA2YXBFW7EL7",
  },
  {
    id: 2,
    img: "/images/NVTI I.jpeg",
    title: "Information Technology Certificate",
    desc: "Safo Oppong is a certified NVTI Cert II Pass Certificate Holder.",
    issuer: "NVTI (2024)",
    link: "https://www.nvtighana.org/",
  },
  {
    id: 3,
    img: "/images/NVTI I.jpeg",
    title: "Information Technology Certificate",
    desc: "Safo Oppong is a certified NVTI Cert I Pass Certificate Holder.",
    issuer: "NVTI (2023)",
    link: "https://www.nvtighana.org/",
  },
  {
    id: 4,
    img: "/images/coursera.jpeg",
    title: "Google Sheets Certificate",
    desc: "Safo Oppong's account is verified. Coursera certifies their successful completion of Google Sheets.",
    issuer: "Coursera (2023)",
    link: "https://www.coursera.org/account/accomplishments/records/D9M5AFE5JSX3",
  },
  {
    id: 5,
    img: "/images/EUPEAN OPEN.jpeg",
    title: "Software Engineering",
    desc: "Safo Oppong's account is verified. European Open University certifies their successful completion of Full Stack Development.",
    issuer: "European Open University (2023)",
    link: "https://www.academyeurope.org/lp-profile/SAFO%20OPPONG/certificates/",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section bg-dark">
      <div className="container">
        <h2>Certificates</h2>
        <div className="awards-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="award-card">
              <img src={cert.img} alt={cert.title} />
              <h4>{cert.title}</h4>
              <p>{cert.desc}</p>
              <p>Issued by {cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Show Credentials
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
