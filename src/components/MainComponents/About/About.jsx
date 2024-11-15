import React, { useContext } from 'react'
import ProfilePicture from '../../../assets/perfil.jpg'
import { Contexto } from '../../../Contexto/index'

const About = () => {
  const { language } = useContext(Contexto)

  return (

    <section data-aos="fade-right" data-aos-delay="150" id='about' className='text-pText aboutme-container default-box '>

      <div className='universal-title_description--container w-full  '>
        <h3 className='universal-title_description'> {!language ? 'Acerca de mi' : 'About me'} </h3>
      </div>

      <div className='aboutme flex flex-nowrap sm:flex-col gap-5 '>

        <div className='aboutme-content w-[60%] flex flex-col gap-5 sm:w-full'>
          <article className='aboutme-description '>
          <p>
            {!language
              ? (
              <>
                El compromiso y la dedicación son la filosofía que me guía en la vida. Para mí, es importante aportar valor a mi entorno y ser útil en cada lugar al que voy. Me apasiona aprender y enfrentar nuevos desafíos.
                <br /><br />
                Valoro el debate constructivo que aporte ideas valiosas a mis proyectos.
              </>
                )
              : (
              <>
               Commitment and dedication are the philosophy that guides me in life. For me, it’s important to bring value to my surroundings and be helpful wherever I go. I am passionate about learning and facing new challenges.
              <br /><br />
              I value constructive discussions that bring valuable ideas to my projects.
              </>
                )}
          </p>

          </article>
          <p>{!language
            ? (<>Últimas tecnologías utilizadas al <span className='text-skyblue'>15/11/2024</span> en mi último proyecto:</>)
            : (<>Latest technologies used as of <span className='text-skyblue'>11/15/2024</span> in my most recent project:</>)}</p>
          <article className='aboutme-list-container flex w-full '>
            <ul className='aboutme-list w-full flex flex-wrap gap-3'>
              <li className='aboutme-item'> {!language ? 'Angular' : 'Angular'}</li>
              <li className='aboutme-item'> {!language ? 'SASS' : 'SASS'}</li>
              <li className='aboutme-item'> {!language ? 'Node.js' : 'Node.js'}</li>
              <li className='aboutme-item'> {!language ? 'FireBase' : 'FireBase'}</li>
            </ul>
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
