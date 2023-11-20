import React, { useContext } from 'react'
import Todo from '../Pages/Todo/Todo'
import PortfolioItems from './PortfolioItems'
import plantilla from '../assets/plantilla.png'
import { Contexto } from '../Contexto/index'
const Portfolio = () => {
  const { language, setLanguage, handleLanguage
  } = useContext(Contexto)

  return (
    <section data-aos="fade-right" data-aos-delay="150" id='portafolio' className='portfolio default-box '>
      <div className='universal-title-description__container w-full mb-10  '>
        <h3 className='universal-title-description before:mr-3'> {!language ? 'Portafolio' : 'Portfolio'} </h3>
      </div>
      <section className='portfolio-container flex flex-col gap-10'>
        <PortfolioItems proyect={<Todo />} portfolioImage={plantilla} pDirection={'pl-10 py-3 relative right-10 text-right sm:right-0 sm:left-0 sm:text-left pl-0'}
          titleDirection={'text-right'} tecDirection={'items-end'} />


      </section>
    </section>
  )
}

export default Portfolio