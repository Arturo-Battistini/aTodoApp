import React,{useContext} from 'react'
import { useInView } from 'react-intersection-observer';
import { Contexto } from '../../../Contexto/index'

const Contact = () => {
  const {language, setLanguage,handleLanguage
  } = useContext(Contexto)
  
  return (

    <section data-aos="zoom-in" data-aos-delay="150" id='contacto' className='mb-5 text-pText Contact default-box p-10 gap-5  '>
      <div className='mini-title '>
        <h5 className=''> {!language ? '¿Que sigue?': 'What is next?'}</h5>
      </div>

      <div className='contact-title text-center'>
        <h2 className='text-titleText text-[clamp(15px,8vw,50px)] leading-[5rem] sm:leading-[2.5rem] opacity-80'>
        {!language ? 'Pongámonos en contacto!': 'Get in touch'}</h2>
      </div>

      <div className='contact-description'>
        <p className='letras-p text-center'>
          {!language ? 'Garantizamos un servicio honesto, dedicado, flexible, precios competitivos y de calidad.': 'English'}</p>
      </div>

     <button className='contact-button custonButton px-8 py-4 mt-4'> <a>  {!language ? 'Salúdame por Whatsapp': 'Say Hello'}</a> </button>
  </section>
  )
}

export default Contact