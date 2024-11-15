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
        <span className='text-[#ffd564b8]'>{!language
          ? <>Lamentablemente, no puedo compartir todos los proyectos en los que he trabajado, ya que la mayoría son privados. Sin embargo, estaré encantado de hablar sobre ellos y mi experiencia durante una conversación.</>
          : <>Unfortunately, I cannot showcase all the projects I have worked on, as most of them are private. However, I would be happy to discuss them and my experience during a conversation.</>} </span>

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
          pfDescription={'Una app de lista de tareas: usuario escribe tareas, localStorage guarda listas y opciones de completado, previene pérdida de datos.'}
          pfDescriptionEn={'A small task recording app: user writes tasks, localStorage saves lists and completion options, preventing data loss.'}
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
          pfDescription={'Explorando Noticias: Página Web React, APIs, Arrays, localStorage, Enlaces a Fuentes, Diseños Responsivos, Filtrado.'}
          pfDescriptionEn={'Exploring Latest News: Website Showcasing React Skills, API Usage, Arrays, localStorage for Saving News, Source Links, Responsive Designs, Filtering Titles & Categories.'}
        />

      </section>
    </section>
  )
}

export default Portfolio
