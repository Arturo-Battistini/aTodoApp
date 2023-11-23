import React from 'react'
import { FolderIcon, IdentificationIcon } from '@heroicons/react/24/solid'
import '../../../index.css'
const Card = ({ titulo, description, link }) => {
  return (
    <div className='card border border-skyblue p-4 rounded-lg '>
      <div className='header-card flex justify-between mb-3 '>
        <FolderIcon className='w-7 h-7 fill-skyblue ' />

        <a href={link} target='_blank'>
          <IdentificationIcon className='w-7 h-7 cursor-pointer hover:fill-skyblue transition-all duration-300 '></IdentificationIcon>
        </a>
      </div>
      <div className='boddy-card'>
        <h3 className='font-bold text-titleText'>{titulo}</h3>
        <p className='text-pText'>{description}</p>
      </div>
    </div>
  )
}

export default Card