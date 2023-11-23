import React, { useEffect, useContext } from 'react'
import { Contexto } from '../../../Contexto/index'

const Presentation = () => {

  const { language, dayNight
  } = useContext(Contexto)

  return (

    <section data-aos="fade-right"
      data-aos-delay="300"
      id='home' className='presentation-container h-[100svh] flex flex-col justify-center p-3  ' >
      <div className='mini-title_container' >
        <h5 className={`mini-title ${dayNight ? 'text-highlight' : ''}`} >
          {!language ? 'Hola, me llamo' : 'Hi my name is'}
        </h5>
      </div>

      <div className='title-container '>
        <h1 className={`text-leadText titulo font-bold ${dayNight ? 'text-leadTextLight' : ''}`}>
          Arturo Battistini
        </h1>
      </div>

      <div className='sub-title_container'>
        <h2 className={`sub-title text-titleText titulo leading-[5rem] sm:leading-[2.5rem] opacity-80 ${dayNight ? 'text-titleTextLight' : ''}`}>
          {!language ? 'Construyo cosas para la web.' : 'I build things for the web.'}</h2>
      </div>

      <div className='title-description-container mt-5'>
        <p className={`title-description text-pText text-md mb-5 ${dayNight ? 'text-pTextLight' : ''}`}>
          {!language ? 'Creo sitios web y aplicaciones web completamente responsivos y funcionales para todos los dispositivos.' : 'I create fully responsive and functional websites and web applications for all devices.'}</p>

        <button className={`custonButton py-4 px-10 ${dayNight ? 'custonButtonLight' : ''}`}>
          <a href="https://web.whatsapp.com/send?phone=56950372531&text=Hola, como estas? me gustaria hacerte una consulta ;)" target='_blank'>
            {!language ? 'Contactame' : 'Contact me'}
          </a>
        </button>
      </div>
    </section>
  )
}

export default Presentation