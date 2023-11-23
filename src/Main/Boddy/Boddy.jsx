import React, { useContext } from 'react'
import { Contexto } from '../../Contexto/index'
import Registro from '../../Pages/Todo/Todo'
import Card from '../../components/MainComponents/Skills/Card'
import "../../index.css"
import Presentation from '../../components/MainComponents/Presentation/Presentation'
import About from '../../components/MainComponents/About/About'
import Abilities from '../../components/MainComponents/Abilities/Abilities'
import Portfolio from '../../Portfolio/Portfolio'
import Contact from '../../components/MainComponents/Contact/Contact'
import Social from '../../components/MainComponents/SocialMedia/Social'
import Mail from '../../components/MainComponents/SocialMedia/Mail'
import { Skills } from '../../components/MainComponents/Skills/Skills'

const Boddy = () => {
  const { language, setLanguage, isMobileMenuOpen, setIsMobileMenuOpen
  } = useContext(Contexto)
  return (
    <main className={`mt-[72px] w-[90%] flex flex-col gap-4 sm:w-11/12 ${isMobileMenuOpen ? 'sm:blur-sm' : ''}`}>
      <Presentation />
      <About />
      <Portfolio />
      <Abilities />
      <Skills />
      <Contact />
      <Mail />
      <Social />
    </main>
  )
}

export default Boddy