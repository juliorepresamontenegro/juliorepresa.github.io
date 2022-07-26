import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h6>Email</h6>
            <h5>juliorepresamontenegro@gmail.com</h5>
            <a href="mailto:juliorepresamontenegro@gmail.com" target="_blank">Enviar mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h6>WhatsApp</h6>
            <h5>+34 616853003</h5>
            <a href="https://wa.me/34616853003" target="_blank">Enviar mensaje</a>
          </article>
          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h6>Telegram</h6>
            <h5>+34 616853003</h5>
            <a href="https://t.me/+34616853003">Enviar mensaje</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact