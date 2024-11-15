import React, { useState, useContext } from 'react'
import { Contexto } from '../../../Contexto/index'
import SkillsCard from './SkillsCard'

const Abilities = () => {
  const { language } = useContext(Contexto)
  const [serviceSelected, setServiceSelected] = useState(1)
  return (

    <section data-aos="fade-right" data-aos-delay="150" id='abilities' className='text-pText services-container default-box p-32 sm:p-0 '>
      <div className='universal-title_description--container w-full '>
        <h3 className={'universal-title_description '}>
          {!language ? 'Mi ecosistema de trabajo ' : 'Skills and Knowledge'}
        </h3>
      </div>

      <div className='services flex sm:flex-wrap gap-8 w-full'>

        <article className='services-service before:content-[""] sm:w-full '>

          <ul className='service-list_container flex flex-col justify-between  h-auto relative  sm:w-full
            before:bg-[#6dbb8b46] before:h-full before:w-[1px] before:absolute before:left-[-15px] transition-all duration-300

            sm:flex-row sm:overflow-x-scroll  sm:before:h-[1px] sm:before:w-full sm:before:bottom-0  sm:before:left-0 '>

            <li onClick={() => setServiceSelected(1)}
              className={`transition-all duration-300 text-sm hover:text-skyblue skills-items  ${serviceSelected === 1 ? 'about-item_aditional-styles ' : ''}`}>
              Frontend
            </li>

            <li onClick={() => setServiceSelected(2)}
              className={`transition-all duration-300 text-sm hover:text-skyblue skills-items ${serviceSelected === 2 ? 'about-item_aditional-styles' : ''}`}>
              Backend
            </li>

            <li onClick={() => setServiceSelected(3)}
              className={`transition-all duration-300 text-sm hover:text-skyblue skills-items ${serviceSelected === 3 ? 'about-item_aditional-styles ' : ''}`}>
              {!language ? 'Diseño' : 'Design'}
            </li>
          </ul>

        </article>

        {serviceSelected === 1

          ? <SkillsCard skill={'Frameworks: Angular / React'} skill2={'Javascipt / TypeScript / HTML / CSS '} skill3={'SASS / Tailwind / Astro '} skill4={'Git / GitHub / Git Tortoice / Bitbucket'}
            engTitle={'Technologies I can contribute with'} serviceSelected={serviceSelected} />
          : false
        }
        {serviceSelected === 2
          ? <SkillsCard skill={'Oracle Sql / Mongo DB'} skill2={'Node.js / Express '} skill3={'Java / SpringBoot '} skill4={'Struts / MVC '}
            serviceSelected={serviceSelected}
          />
          : false
        }

        {serviceSelected === 3
          ? <SkillsCard skill={'Adobe Photoshop'} skill2={'Adobe Illustrator'} skill3={'Figma'} skill4={'Notion'}
            serviceSelected={serviceSelected} />
          : false
        }
      </div>

    </section>
  )
}

export default Abilities
