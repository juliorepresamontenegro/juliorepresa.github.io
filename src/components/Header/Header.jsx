import React from 'react'
import './header.css'
import CTA from './CTA'
import QR from '../../assets/Imagen2.jpg'
import HeaderSocial from './HeaderSocials'
import barrablanca from './barrablanca'

const Header = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${QR})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize:'cover',width:1750, height: 600}}>
        <div className="container header__container">
          <h1>Julio Represa</h1>
          <h2>Industrial Engineer</h2>
          <CTA />
          <HeaderSocial />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
     
  </div>
      
    
  )
}

export default Header