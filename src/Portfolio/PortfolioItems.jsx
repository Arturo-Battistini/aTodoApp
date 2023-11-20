import React, { useContext } from 'react'
import '../index.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { Gith } from '../Icons/Icons'
import { Contexto } from '../Contexto/index'
const PortfolioItems = ({ portfolioImage, gh, share, pDirection, rowDirection, titleDirection, tecDirection, proyect }) => {
  const { language, setLanguage, handleLanguage,
  } = useContext(Contexto)
  return (
    <div className={`Portfolio-items_container flex justify-center items-center ${rowDirection} sm:block sm:relative `}>

      <div className='portfolio-items_img-container w-[60%] sm:w-full '>
        {proyect}
      </div>

      <div className={`portfolio-items_txt-container w-1/2 flex flex-col gap-2 sm:gap-0 sm:p-5 sm:overflow-y-scroll ${titleDirection}
        sm:absolute sm:top-0 sm:w-full sm:h-full sm:bg-[#112240b3] `}>
        <div className='portfolio-title_container sm:text-left'>
          <p className='mini-title text-xs sm:bg-transparent  sm:left-0'>{!language ? 'Proyecto realizado' : 'English'}</p>
          <h3 className='portfolio-title'>{!language ? 'Todo List' : 'English'}</h3>
        </div>
        <div className='portfolio-content bg-[#112240] sm:bg-transparent  '>
          <p className={`text-pText  w-[100%] bg-[#112240] sm:bg-transparent h-full  rounded-sm ${pDirection}`}>
            {!language ? 'Un tema minimalista de color azul oscuro para VS Code, Sublime Text, Atom, iTerm y más. Disponible enMercado de Visual Studio, Control de paquetes,Administrador de paquetes Atom, ynpm.' : 'English'}

          </p>
        </div>

        <div className={`portfolio-tecnology_applicated  text-pText text-xs flex flex-col gap-1 sm:items-start ${tecDirection}`} >

          <ul className='tecnologies flex justify-between gap-3 mt-3'>
            <li className='aboutme-item text-xs  before:content-["-"]'>VS</li>
            <li className='aboutme-item text-xs  before:content-["-"]'>Sublime</li>
            <li className='aboutme-item text-xs  before:content-["-"]'>Atom</li>
            <li className='aboutme-item text-xs  before:content-["-"]'>AtomiTern2</li>
            <li className='aboutme-item text-xs  before:content-["-"]'>Hiper</li>
          </ul>

          <ul className='portfolio-share flex gap-2 justify-between  '>
            <Gith />
            <EyeIcon className=' w-5 h-5 fill-pText max-w-[18px] cursor-pointer hover:fill-skyblue transition-all duration-300' data-aos="fade-right" data-aos-delay="300" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItems