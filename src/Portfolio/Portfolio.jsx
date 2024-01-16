import React, { useContext } from 'react'
import PortfolioItems from './PortfolioItems'
import plantilla from '../assets/plantilla.png'
import { Contexto } from '../Contexto/index'
import Todoapp from '../assets/tl.png'
import NewsPage from '../assets/News.png'
const Portfolio = () => {
  const { language, dayNight } = useContext(Contexto)

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='portfolio' className='portfolio default-box   '>
      <div className='universal-title-description__container w-full mb-10  '>
        <h3 className={`universal-title_description ${dayNight ? 'universal-title_description--Light' : ''} `}>
          {!language ? 'Portafolio' : 'Portfolio'}
        </h3>

      </div>
      <section className='portfolio-container flex flex-col gap-[100px]'>
        <PortfolioItems
          apptitle={'Todo List'}
          apptitleEn={'Todo List'}
          proyect={Todoapp} portfolioImage={plantilla}
          appLink={'/todo'}
          pDirection={'pl-10 py-3 relative right-10 text-right sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-right'}
          tecDirection={'items-end'}
          tech={'React'} tech2={'Tailwind'} tech3={'Vite'}
          pfDescription={'Una pequeña aplicación para registrar una lista de tareas escritas por el usuario y que utiliza el localStorage para guardar las listas y las opciones de completado, evitando así la pérdida de datos'}
          pfDescriptionEn={'A small app to record a list of tasks written by the user that uses localStorage to save the lists and completion options, preventing data loss.'}
        />

        <PortfolioItems
          apptitle={'Noticias más recientes'}
          apptitleEn={'Latest News'}
          proyect={NewsPage} portfolioImage={plantilla}
          rowDirection={'flex-row-reverse'}
          appLink={'https://arturo-battistini.github.io/NEWSWEBSITE/'}
          pDirection={'flex pr-10 py-3 relative left-10 text-left sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-left'}
          tecDirection={'items-start  '}
          tech={'React'} tech2={'Vanilla CSS'} tech3={'News API'}
          pfDescription={'Explorando las Últimas Noticias: Una Página Web con Conocimientos Básicos de React, Consumo de APIs, Uso de Arrays y Listas, localStorage para Guardar Noticias, Enlaces a Fuentes Originales, Diseños Responsivos y Filtrado por Títulos y Categorías'}
          pfDescriptionEn={'Exploring the Latest News: A Website Demonstrating Basic React Skills, API Consumption, Use of Arrays and Lists, localStorage for Saving News, Links to Original Sources, Responsive Designs, and Filtering by Titles and Categories.'}
        />

      </section>
    </section>
  )
}

export default Portfolio
