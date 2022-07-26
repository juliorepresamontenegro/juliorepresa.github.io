import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Software Develpment</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Excelente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Matlab/Simulink</h4>
                <small className='text-light'>Excelente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Muy bueno</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>OpenCv</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Qt</h4>
                <small className='text-light'>Bueno</small>
              </div>
            </article>
            

          </div>

        </div>
        <div className='experience__backend'>
        <h3>3D Modeling Software</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SolidWorks</h4>
                <small className='text-light'>Muy bueno</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Blender</h4>
                <small className='text-light'>Bueno</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Catia</h4>
                <small className='text-light'>Bueno</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AutoCad</h4>
                <small className='text-light'>Muy bueno</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Fusion360</h4>
                <small className='text-light'>Básico</small>
              </div>
            </article>

           

          </div>

        </div>
        
      </div>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Other Software</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PSoC Creator</h4>
                <small className='text-light'>Excelente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Labview</h4>
                <small className='text-light'>Bueno</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Microsoft Office</h4>
                <small className='text-light'>Excelente</small>
              </div>
            </article>
          </div>

        </div>
        <div className='experience__backend'>
        <h3>Hardware</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Microcontroladores</h4>
                <small className='text-light'>PSoC 5 LP, Pic, Arduino...</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Raspberry Pi</h4>
                <small className='text-light'>Muy bueno</small>
              </div>
            </article>

            

           

          </div>

        </div>
        
      </div>
    
    </section>
  )
}

export default Experience