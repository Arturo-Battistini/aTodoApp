import React, { useContext } from 'react'
import { Contexto } from '../../../Contexto/index'

const Contact = () => {
  const { language } = useContext(Contexto)

  return (

    <section id='contact' className='mb-5 text-pText Contact default-box p-10 gap-5 h-[90vh] ' data-aos="zoom-in" data-aos-delay="150">
      <div className='mini-title '>
        <h5 className=''> {!language ? '¿Que sigue?' : 'What is next?'}</h5>
      </div>

      <div className='contact-title text-center'>
        <h2 className='text-titleText text-[clamp(15px,8vw,50px)] leading-[5rem] sm:leading-[2.5rem] opacity-80'>
          {!language ? 'Pongámonos en contacto!' : 'Get in touch'}</h2>
      </div>

      <div className='contact-description'>
        <p className='letras-p text-center'>
          {!language ? 'Si vienes por alguna oferta laboral o para hacer alguna sugerencia sobre algún servicio, o si tienes alguna recomendación sobre cómo mejorar como desarrollador, todas serán bienvenidas.✌️' : 'If you come for a job offer or to provide any suggestions regarding a service, or if you have any recommendations on how to become a better developer, all are welcome.'}</p>
      </div>

      <button className='contact-button custonButton px-8 py-4 mt-4'>
        <a href='https://web.whatsapp.com/send?phone=56950372531&text=Hola, como estas? me gustaria hacerte una consulta ;)'>
          {!language ? 'Salúdame 😊' : 'Say Hello'}</a>
      </button>
    </section>
  )
}

export default Contact
