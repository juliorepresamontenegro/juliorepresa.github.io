import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__Logo'></a>
      <ul className='permalinks'>
      <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#portfolio"></a>Portfolio</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>
      <div className='footer__socials'>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
        <a href="https://github.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Julio Represa. All rights reserved.</small>
      </div>




    </footer>
  )
}

export default Footer