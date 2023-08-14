import React from 'react'
import './about.css'
import ME from '../../assets/images/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
         <img src={ME} alt="About image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
          Welcome to my website! I am a passionate web developer dedicated to crafting engaging and functional online experiences. My journey has allowed me to transform creative concepts into digital reality, using a blend of technical skills and artistic flair. 
          Every line of code I write is infused with my passion for innovation and excellence. Explore my portfolio to discover how I've brought my clients' ideas to life through dynamic and user-friendly websites. My aim is to shape the future of the web, one project at a time.
            {/* Bienvenue sur mon site ! Je suis une développeuse web passionnée par la création d'expériences en ligne captivantes et fonctionnelles. Mon parcours m'a permis de transformer des concepts créatifs en réalité numérique, en utilisant une combinaison de compétences
             techniques et de flair artistique. Chaque ligne de code que j'écris est imprégnée de ma passion pour l'innovation et la perfection. Explorez mon portefeuille pour découvrir comment j'ai donné vie aux idées de mes clients grâce à des sites web dynamiques et conviviaux
             . Mon objectif est de façonner le futur du web, un projet à la fois. */}
            </p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About