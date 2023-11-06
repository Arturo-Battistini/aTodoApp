import React,{useContext,useState,useEffect} from 'react'
import {SunIcon,MoonIcon } from '@heroicons/react/24/solid'
import { Contexto } from '../../Contexto/index'

const DayNight = () => {

  const {dayNight, setDayNight} = useContext(Contexto)
  
  const handleNight = () =>{
    setDayNight(false)
   }
  const handleDay = () =>{
    setDayNight(true)
   }

  return (
    <div className='dayNight z-[1] absolute top-[-40px] text-white w-28  '>
      <button className='text-white w-full h-full   rounded-xl flex items-center p- gap-1'>
        <SunIcon className={`w-[50%] h-[25px] bg-[#5baed6a6] text-yellow-400 rounded-3xl  transition-all duration-300 ease-in ${!dayNight? 'brightness-[0.3]' : ''} `}
          onClick={() => handleDay()}
        />
        <MoonIcon className={`w-[50%] h-[25px] bg-[#29375b] rounded-3xl transition-all ${dayNight? 'brightness-[0.3]' : ''}`}
          onClick={() => handleNight()}
        />
      </button>

    </div>
  )
}

export default DayNight