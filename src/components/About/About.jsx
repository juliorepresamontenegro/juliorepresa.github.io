import React from 'react'
import './about.css'
import foto from '../../assets/Imagen3.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div>
        
        <div className='container about__container'>
          <div className='foto'>
            <img src={foto} alt="" />
          </div>
          <div className='letra'>
            <h2>Ingeniería electrónica industrial y automática </h2>
            <h4>Especialidad: Automática</h4>
            <h4>Universidad de Vigo 2017-2022</h4>
            <div className='espaciado'>
              <h2>Máster en ingeniería Industrial</h2>
              <h4>Universidad Carlos III 2022-Actualidad
              </h4>
            </div>
          </div>
          <div className='letra'>
            <h2>Operario Electrónico en Audasa</h2>
            <h4>Trabajo temporal de tres meses de verano como operario electrónico,
              realizaba el mantenimiento de las instalaciones de los peajes que incluyen
              la AP9, AG-55 y AG-57. Vías dinámicas, manuales, así como de los
              periféricos de vías de cobro automático (monederos, billeteros, módulos
              emisores de tickets...) además de nuevas instalaciones como cámaras
              ANPR. 2021</h4>
            
          </div>

        </div>
        <div className='container about__container2'>
          
          <div className='letra'>
            <h2>23 años</h2>
          </div>
          <div className='letra'>
            <h4>Interés en todos los ámbitos de la ingeniería como desarrollo de código, sistemas embebidos o diseños mecánicos. </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About