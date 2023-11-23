import React, { useContext } from 'react'
import { Contexto } from '../../../Contexto/index'
import Services from './Abilities'
const SkillsCard = ({ skill, skill2, skill3, skill4, spaSkill, serviceSelected }) => {

  const { language
  } = useContext(Contexto)

  return (
    <article className='services-description flex flex-col flex-wrap justify-center  h-auto '>

      <h4 className='portfolio-title after:hidden' >{
        serviceSelected === 1 ? !language ? 'Tecnologías con las que puedo contribuir:' : 'Technologies I can contribute with:'
          :
          serviceSelected === 2 ? !language ? 'Tecnologías en las que tengo conocimientos, pero estoy en proceso de aprendizaje:' : 'Technologies in which I have knowledge, but I am in the learning process:'
            :
            serviceSelected === 3 ? !language ? 'Algunas aplicaciones de diseño con las que me gusta trabajar:' : 'Some design applications I enjoy working with:'
              : false}
      </h4>

      <ul className='services-list flex flex-col gap-2 mt-2'>
        <li className='aboutme-item'>{skill}</li>
        <li className='aboutme-item'>{skill2}</li>
        <li className='aboutme-item'>{skill3}</li>
        <li className='aboutme-item'>{skill4}</li>
      </ul>
    </article>
  )
}

export default SkillsCard