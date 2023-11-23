import React, { useContext } from 'react'
import { Instagram, Linkedin, Gith } from '../../../Icons/Icons'
import { SunIcon, MoonIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'
import { Contexto } from '../../../Contexto/index'
const Social = () => {
  const { language, setLanguage, handleLanguage
  } = useContext(Contexto)

  return (

    <aside id='social' after='' className='social-media-container flex flex-col justify-center items-center overflow-hidden  '>
      <div className='social-media fixed bottom-[-20px] left-[calc(.9%)] flex flex-col items-center gap-5  text-pText 
          after:bg-pText after:h-[120px] after:inline-block after:w-[1px] after:mt-0
          sm:flex sm:flex-row sm:w-full sm:static sm:justify-center sm:gap-7 sm:h-[50px] sm:after:hidden'>

        <Gith />
        <Instagram />
        <Linkedin />
      </div>
      <span className='font-[lato] text-pText font-thin text-center hover:text-skyblue transition-all duration-300 text-[8px] mb-1 tracking-wider'
      >{!language ? 'Inspirado en brittanychiang y creado desde 0 por Arturo Battistini' : 'Inspired by brittanychiang and created from scratch by Arturo Battistini.'}
      </span>
    </aside>
  )
}


export default Social