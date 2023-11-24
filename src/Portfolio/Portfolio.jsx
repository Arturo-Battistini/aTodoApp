import React, { useContext } from 'react'
import Todo from '../Pages/Todo/Todo'
import PortfolioItems from './PortfolioItems'
import plantilla from '../assets/plantilla.png'
import { Contexto } from '../Contexto/index'
import Todoapp from '../assets/tl.png'
const Portfolio = () => {
  const { language, dayNight
  } = useContext(Contexto)

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='portfolio' className='portfolio default-box   '>
      <div className='universal-title-description__container w-full mb-10  '>
        <h3 className={`universal-title_description ${dayNight ? 'universal-title_description--Light' : ''} `}>
          {!language ? 'Portafolio' : 'Portfolio'}
        </h3>

      </div>
      <section className='portfolio-container flex flex-col gap-10'>
        <PortfolioItems
          proyect={Todoapp} portfolioImage={plantilla}
          appLink={'/todo'}
          pDirection={'pl-10 py-3 relative right-10 text-right sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-right'}
          tecDirection={'items-end'}
          tech={'React'} tech2={'Tailwind'} tech3={'Vite'}
          pfDescription={'Una pequeña aplicación para registrar una lista de tareas escritas por el usuario y que utiliza el localStorage para guardar las listas y las opciones de completado, evitando así la pérdida de datos'}
          pfDescriptionEn={'A small app to record a list of tasks written by the user that uses localStorage to save the lists and completion options, preventing data loss.'}
        />


      </section>
    </section>
  )
}

export default Portfolio