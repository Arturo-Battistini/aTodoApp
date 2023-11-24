import React from 'react'
import { SunIcon, MoonIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid'

const Mail = () => {
  return (

    <aside
      id='mail'
      className='flex flex-col gap-4 email-container fixed bottom-[-20px] right-[calc(.5%)] sm:bottom-0 sm:right-0 sm:relative  -tracking-tighter text-pText  text-xs
      sm:flex-row '>
      <span
        after=''
        className='email [writing-mode:vertical-lr]  cursor-pointer transition-all duration-300 hover:text-skyblue   hover:tracking-widest  
        after:bg-pText after:h-[120px] after:inline-block after:w-[1px] after:mt-5 
          sm:after:hidden sm:w-full sm:text-center sm:[writing-mode:horizontal-tb] '>
        <a data-aos="fade-left" data-aos-delay="1200" href="mailto:ab@abattistini.cl" target='_blank'>ab@abattistini.cl </a>
      </span>
    </aside>
  )
}

export default Mail