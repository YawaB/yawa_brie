import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yawa-brinda-mawuviwo/" target='_blank' rel="noreferrer"> <BsLinkedin /></a>
        <a href="https://github.com/YawaB" target='_blank' rel="noreferrer"><BsGithub/> </a>
        <a href="https://www.linkedin.com/in/yawa-brinda-mawuviwo/" target='_blank' rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials