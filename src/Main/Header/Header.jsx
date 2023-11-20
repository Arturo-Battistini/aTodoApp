import React, { useState, useEffect, useContext } from 'react'
import { Contexto } from '../../Contexto/index'
import "../../index.css"
import { Logo } from '../../Icons/Icons'
import { Bars3BottomRightIcon, XMarkIcon, SunIcon, MoonIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'

const Header = () => {

  const { language, setLanguage, isMobileMenuOpen, setIsMobileMenuOpen
  } = useContext(Contexto)


  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const handleHeaderAnchor = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className='text-white flex justify-between w-full fixed h-[70px] bg-[#0a192ff7] backdrop-blur-sm z-10
        '>
      <section className='logo-container flex items-center pl-4'>
        <a data-aos="fade-down" href='#home'>
          <Logo />
        </a>

      </section>

      <section className={`info-container flex items-center sm:z-[-1] ${isMobileMenuOpen ? '' : 'sm:hidden '} `}>

        <div className='links-container flex justify-between items-center h-full w-full gap-3 '>

          <ul className={`list-links-container  flex items-center gap-3 font-[lato] font-thin w-full 
              ${isMobileMenuOpen ?
              'sm:flex-col sm:absolute sm:top-[0] sm:right-0 sm:items-center sm:w-[70vw] sm:bg-[#0a192ff7]   sm:h-screen sm:justify-start sm:pt-28 gap-6 sm:shadow-[-5px_2px_7px_-4px_rgba(0,0,0,0.7)]'
              :
              ''}`}>

            <div data-aos="fade-down" className='language-container flex gap-2 w-full justify-center items-center mt-1'>
              <GlobeAmericasIcon className='world-icon w-4 h-4 fill-skyblue  ' />
              <span onClick={() => setLanguage(false)} className='cursor-pointer hover:text-skyblue transition-all duration-300  font-bold text-[10px]'>SPA</span>
              <span onClick={() => setLanguage(true)} className='cursor-pointer hover:text-skyblue transition-all duration-300  font-bold text-[10px]'>ENG</span>
            </div>

            <li className='' data-aos="fade-down" data-aos-delay="100" >
              <a className='list-items whitespace-nowrap' onClick={() => handleHeaderAnchor()} href='#about'>
                {!language ? 'Acerca de mi' : 'About me'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="300" >
              <a className='list-items' onClick={() => handleHeaderAnchor()} href='#servicios'>
                {!language ? 'Servicios' : 'Services'}
              </a>
            </li>

            <li data-aos="fade-down" data-aos-delay="300" >
              <a className='list-items' onClick={() => handleHeaderAnchor()} href='#portafolio'>
                {!language ? 'Portafolio' : 'Portfolio'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="500" >
              <a className='list-items' onClick={() => handleHeaderAnchor()} href='#knoleadge'>
                {!language ? 'Conocimientos' : 'knowledge'}
              </a>
            </li>
            <li data-aos="fade-down" data-aos-delay="700" >
              <a className='list-items' onClick={() => handleHeaderAnchor()} href='#contacto'>
                {!language ? 'Contacto' : 'Contact'}
              </a>
            </li>
            <button data-aos="fade-down" data-aos-delay="1200"
              className='header-button '>
              <a className='custonButton py-1 px-5  sm:w-[80%] sm:m-0' href='../../../Currículum-EN.pdf' target='_blank'>
                {!language ? 'CV' : 'Resume'} </a>
            </button>

            <div className='day-night_container flex gap-2 w-full justify-center mr-4 sm:mr-0 sm:bg-[#132745] sm:p-3' data-aos="fade-down" data-aos-delay="1500" >
              <MoonIcon className='w-4 h-4 text-transparent stroke-skyblue  hover:text-skyblue transition-all duration-500' />
              <SunIcon className=' w-4 h-4  text-transparent stroke-yellow-400  hover:text-yellow-400  transition-all duration-500
                '/>
            </div>
          </ul>

        </div>
      </section>

      <section className='[display:none] Ham justify-center items-center mr-4 sm:flex pato '>
        {isMobileMenuOpen ?
          <XMarkIcon className='xmark w-10 h-10 text-skyblue stroke-skyblue ' onClick={() => handleMobileMenu()} />
          : <Bars3BottomRightIcon className='bars w-10 h-10 text-skyblue stroke-skyblue ' onClick={() => handleMobileMenu()} />}

      </section>
    </header>
  )
}

export default Header