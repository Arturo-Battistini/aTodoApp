import React,{useContext} from 'react'
import {Instagram,Linkedin,Gith} from '../../../Icons/Icons'
import { Contexto } from '../../../Contexto/index'
const Social = () => {
  const {language, setLanguage,handleLanguage
  } = useContext(Contexto)

  return (

    <aside  id='social' after='' className='social-media-container flex flex-col justify-center items-center overflow-hidden  '>
      <div className='social-media fixed bottom-[-20px] left-[calc(.9%)] flex flex-col items-center gap-5  text-pText 
          after:bg-pText after:h-[120px] after:inline-block after:w-[1px] after:mt-0
          sm:flex sm:flex-row sm:w-full sm:after:opacity-0 sm:static sm:justify-center sm:gap-7 sm:h-[50px]'>
        <Gith />
        <Instagram/>
        <Linkedin/>
      </div>
      <span className='font-[lato] text-pText font-thin text-centers hover:text-skyblue transition-all duration-300 text-xs mb-5 tracking-wider'
        >{!language ? 'Creado y Diseñado por Arturo Battistini': 'Builded by Arturo Battistini'}
      </span>
   </aside>
  )
}

export default Social