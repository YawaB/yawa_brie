import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/images/portfolios/portfolio1.jpg";
import IMG2 from "../../assets/images/portfolios/portfolio2.jpg";
import IMG3 from "../../assets/images/portfolios/portfolio3.jpg";
import IMG4 from "../../assets/images/portfolios/portfolio4.jpg";
import IMG5 from "../../assets/images/portfolios/portfolio5.png";
import IMG6 from "../../assets/images/portfolios/portfolio6.jpg";

const data_portfolio = [
  {
    id: 1,
    image: IMG1,
    title: "Expence",
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Expence",
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Expence",
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Expence",
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Expence",
    github: "https://github.com",
    live: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Expence",
    github: "https://github.com",
    live: "https://github.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data_portfolio.map((item) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={item.live} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
