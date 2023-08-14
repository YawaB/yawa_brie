import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/me.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Hello I'am</h5>
      <h1>Yawa Brinda</h1>
      <h5 className="text-light">Fullstack Developper</h5>
      <CTA />
      <HeaderSocial />
      <div >
        <img src={ME} alt="me"className="me"/>
      </div>
      <a href="#contact" className='scroll__down'>Scroll down</a>
      
    </div>
    </header>
  )
}

export default Header