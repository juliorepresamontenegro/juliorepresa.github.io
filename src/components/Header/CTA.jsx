import React from 'react'
import CV from '../../assets/Cv_JulioRepresa.pdf'

const CTA = () => {
  return (
    <div>
      <div className='cta'>
        <div className='botones'>
          <a href={CV} download className='btn1'>Descargar CV</a>
          <a href="#contact" className='btn1 btn-primary'>Contact</a>
        </div>
      </div>
      <div className='barra'>

      </div>
    </div>
  )

}

export default CTA