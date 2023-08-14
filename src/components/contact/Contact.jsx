import React, { useRef } from "react";
import "./contact.css";
import { MdMailOutline } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0z2mpia",
      "template_gg61wyu",
      formRef.current,
      "JAtViF3NCaIx4RUSW"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mawuviwobrinda@gmail.com</h5>
            <a href="mailto:mawuviwobrinda@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <IoLogoLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mawuviwo Yawa brinda</h5>
            <a
              href="https://www.linkedin.com/in/yawa-brinda-mawuviwo/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+212 766-725165</h5>
            <a
              href="https://api.whatsapp.com/send?phone+212766725165"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn  btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
