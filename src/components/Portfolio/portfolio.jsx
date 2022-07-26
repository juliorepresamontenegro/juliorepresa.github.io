import React from 'react'
import './portfolio.css'
import TFG from '../../assets/47404986P.pdf'
import IMG1 from '../../assets/Imagen1.png'
import IMG2 from '../../assets/blender.jpg'
import IMG3 from '../../assets/Captura.jpg'
import IMG4 from '../../assets/dia2.PNG'
import IMG5 from '../../assets/Imagen4.jpeg'
import IMG6 from '../../assets/Imagen6.png'
import { BrowserRouter, Route, Link } from "react-router-dom";

const portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
            <article className='portfolio__item'  >
                <div className='portfolio__item-image' >
                    <img src={IMG1} alt="" />
                </div>
                <h3>Filtro de retraso temporal en una grúa puente</h3>
                <div className='portfolio__item-cta'>
                    <a href={TFG} download className='btn'>Acceder al proyecto</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG3} alt="" />
                </div>
                <h3>Diseño de un robot autónomo en CoppeliaSim</h3>
                <div className='portfolio__item-cta'>
                    <a href={TFG} download className='btn'>Acceder al proyecto</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG2} alt="" />
                </div>
                <h3>Varios proyectos de diseño en blender</h3>
                <div className='portfolio__item-cta'>
                    <a href={TFG} download className='btn'>Acceder al proyecto</a>
                </div>
            </article>

            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG5} alt="" />
                </div>
                <h3>Detector de sitio libre con OpenCv en Raspberry Pi</h3>
                <div className='portfolio__item-cta'>
                    <a href={TFG} download className='btn'>Acceder al proyecto</a>
                </div>
            </article>
            
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG6} alt="" />
                </div>
                <h3>Bot de telegram para obtener precios de distintos activos</h3>
                <div className='portfolio__item-cta'>
                    <Link to="/grua" className='btn'>Acceder al proyecto</Link>
                </div>
            </article>


        </div>

    </section>
  )
}

export default portfolio