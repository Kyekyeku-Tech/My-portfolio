import React from "react";
import "../index.css";

const blogPosts = [
  {
    id: 1,
    image: "./assets/images/blog1.png",
    title: "Discover Hackr.io in 2024",
    description:
      "Hackr.io is a platform where users recommend courses and tutorials on software development. It’s packed with guides on frameworks, web and mobile development, Java projects, and software testing — a treasure trove for IT enthusiasts.",
    link: "https://hackr.io/",
  },
  {
    id: 2,
    image: "./assets/images/blog2.png",
    title: "Best fonts for coding",
    description:
      "As a coder, a good font reduces eye strain and improves focus. After testing many, I prefer Jetbrains Mono for code editors and Iosevka for terminals — clean, legible, and elegant.",
    link: "https://www.micheldebree.nl/posts/codingfont/",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2>Blog</h2>
        <div className="grid-2">
          {blogPosts.map((post) => (
            <article className="post" key={post.id}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a
                className="link"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
