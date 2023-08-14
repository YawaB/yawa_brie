import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Wireframing and Prototyping</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
          </ul>
        </article>

        {/* ================WEB DEVELOPMENT==================== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>API Integration</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Custom Feature Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Back-End & Front-End Development</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>My Knowledges</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>API Integration</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Custom Feature Development</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Back-End & Front-End Development</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
