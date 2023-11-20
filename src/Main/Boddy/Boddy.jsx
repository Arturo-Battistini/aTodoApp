import React, { useContext } from 'react'
import { Contexto } from '../../Contexto/index'
import Registro from '../../Pages/Todo/Todo'
import Card from '../../components/MainComponents/Knoleadge/Card'
import "../../index.css"
import Presentation from '../../components/MainComponents/Home/Presentation/'
import About from '../../components/MainComponents/About/About'
import Services from '../../components/MainComponents/Services.jsx/Services'
import Portfolio from '../../Portfolio/Portfolio'
import Contact from '../../components/MainComponents/Contact/Contact'
import Social from '../../components/MainComponents/SocialMedia/Social'
import Mail from '../../components/MainComponents/SocialMedia/Mail'
import { Knoleadge } from '../../components/MainComponents/Knoleadge/Knoleadge'

const Boddy = () => {
  const { language, setLanguage, isMobileMenuOpen, setIsMobileMenuOpen
  } = useContext(Contexto)
  return (
    <main className={`mt-[72px] w-[90%] flex flex-col gap-4 sm:w-11/12 ${isMobileMenuOpen ? 'sm:blur-sm' : ''}`}>
      <Presentation />
      <About />
      <Services />
      <Portfolio />
      <Knoleadge />
      <Contact />
      <Social />
      <Mail />
    </main>
  )
}

export default Boddy