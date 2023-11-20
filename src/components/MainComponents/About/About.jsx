import React,{useContext} from 'react'
import ProfilePicture from '../../../assets/perfil.jpg'
import { Contexto } from '../../../Contexto/index'

const About = () => {
  const {language
  } = useContext(Contexto)

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='about' className='text-pText aboutme-container default-box p-12 sm:p-0 '>
      <div className='universal-title-description__container w-full  '>
        <h3 className='universal-title-description'> {!language ? 'Acerca de mi' : 'About me'} </h3>
      </div>

      <div className='aboutme flex flex-nowrap sm:flex-col gap-5 '>
        
        <div className='aboutme-content w-[60%] flex flex-col gap-5 sm:w-full'>
          <article className='aboutme-description '>
            <p>
              {!language ? 'Prefiero la eficiencia ante todo; disfruto pasando horas escribiendo código y enfrentando nuevos retos. Tengo paciencia para enfrentar adversidades y no temo equivocarme, ya que sé que saldré fortalecido. Me gusta trabajar en equipo, pero también disfruto de la soledad y el control que implica llevar un proyecto pequeño en solitario. Priorizo la perfección en mi trabajo y no me gusta dejar proyectos a medias. Prefiero recibir retroalimentación de mis clientes y estar abierto a sugerencias para mejorar la experiencia del cliente y del usuario. Me entusiasma aplicar nuevas tecnologías en mis proyectos, contribuir al crecimiento de mis clientes y seguir brindando ayuda a medida que la aplicación evoluciona.' 
              : ' I prioritize efficiency above all; I enjoy spending hours writing code and facing new challenges. I have patience to deal with adversities and am not afraid of making mistakes, as I know I will emerge stronger. I like working in a team, but I also enjoy the solitude and control that comes with handling a small project alone. I prioritize perfection in my work and dislike leaving projects unfinished. I prefer to receive feedback from my clients and am open to suggestions to improve the customer and user experience. I am excited about applying new technologies in my projects, contributing to my clients growth, and continuing to provide assistance as the application evolves.'}
            </p>
          </article>

          <article className='aboutme-list-container flex w-full '>
            <ul className='aboutme-list w-full flex flex-wrap gap-3'>
            <li className='aboutme-item'> {!language ? 'Trabajo duro' : 'Hard work'}</li>
            <li className='aboutme-item'> {!language ? 'Aprendizaje' : 'Learning'}</li>
            <li className='aboutme-item'> {!language ? 'Humildad' : 'Humility'}</li>
            <li className='aboutme-item'> {!language ? 'Perseverancia' : 'Perseverance'}</li>
            <li className='aboutme-item'> {!language ? 'Crecimiento personal' : 'Personal growth'}</li>
            <li className='aboutme-item'> {!language ? 'Lealtad' : 'Loyalty'}</li>
            <li className='aboutme-item'> {!language ? 'Familia' : 'Family'}</li>
            <li className='aboutme-item'> {!language ? 'Principios' : 'Principles'}</li>
            <li className='aboutme-item'> {!language ? 'Dignidad' : 'Dignity'}</li>
            <li className='aboutme-item'> {!language ? 'Compañerismo' : 'Companionship'} </li>
            <li className='aboutme-item'> {!language ? 'Paciencia' : 'Patience '} </li>
            </ul>
{/*             <ul className='aboutme-list w-full flex flex-wrap gap-3'>
              <li className='aboutme-item'>React</li>
              <li className='aboutme-item'>Taildwind</li>
              <li className='aboutme-item'>WebPack</li>
              <li className='aboutme-item'>Javascript</li>
              <li className='aboutme-item'>sass</li>
              <li className='aboutme-item'>Html5</li>
              <li className='aboutme-item'>Wordpress</li>
              <li className='aboutme-item'>Css</li>
              <li className='aboutme-item'>Docker</li>
              <li className='aboutme-item'>Node Js (inprogress)</li>
              <li className='aboutme-item'>Next Js (inprogress)</li>
            </ul> */}
          </article>
        </div>

        <div className='profile-picture w-[40%] h-[60%] sm:w-full'>

          <picture className='h-full flex justify-center relative 

          before:content-[""] before:absolute before:top-[15px] before:ml-7 before:w-[100%] before:h-[100%]   before:rounded-md
          before:border-[1px] before:border-skyblue  before:mix-blend-hard-light
          before:z-[1] before:hover:top-[12px] before:hover:ml-6 before:transition-all before:duration-300 sm:before:w-[80%]

          after:content-[""] after:absolute after:top-[0]  after:w-[100%] after:h-[100%]  after:rounded-md
          after:transition-all after:duration-300 sm:after:w-[80%]
           after:bg-skyblue '>

            <img className='picture transition-all duration-300 w-[100%] p h-[100%] rounded-md z-[1] mix-blend-multiply object-cover object-top sm:w-[80%] ' 
            src={ProfilePicture} alt='Profile-Picture'
            
            ></img>
          </picture>
        </div>
      </div>

      </section>
  )
}

export default About