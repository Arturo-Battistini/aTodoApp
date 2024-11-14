import React, { useState, useContext } from 'react'
import Card from './Card'
import { Contexto } from '../../../Contexto/index'
import '../../../index.css'

export const Skills = () => {
  const { language } = useContext(Contexto)

  const [fold, setFold] = useState(false)
  const handleFold = () => {
    setFold(!fold)
  }

  return (

    <section id='skills' data-aos="fade-right" data-aos-delay="150" className='default-box text-white flex flex-col items-center gap-10 '>
      <div className='universal-title_description--container w-full   '>
        <h3 className={'universal-title_description'}>
          {!language ? 'Cursos y estudios' : 'Courses'} </h3>
      </div>
      <div className='card-container grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2'>

        <Card titulo={'Curso de React.js'} description={'Introducción a React, componentes, hooks, routes, local-storage, context'} link={'https://platzi.com/p/arturobattistini/curso/7395-react/diploma/detalle/'} />
        <Card titulo={'Curso de React.JavaScript con Vite.JavaScript y TailwindCSS'} description={'Practica de react basico con tailwind / intermedio'} link={'https://platzi.com/p/arturobattistini/curso/7396-react-vite-tailwindcss/diploma/detalle/'} />
        <Card titulo={'Curso de Asincronismo con JavaScript'} description={'JavaScript intermedio'} link={'https://platzi.com/p/arturobattistini/curso/3175-asincronismo-js/diploma/detalle/'} />
        <Card titulo={'Curso de Responsive Design: Maquetación Mobile First'} description={'Maquetación con CSS vanilla'} link={'https://platzi.com/p/arturobattistini/curso/2030-mobile-first/diploma/detalle/'} />
        <Card titulo={'Curso Profesional de Git y GitHub'} description={'Como aplicar Git en un ambiente profesional'} link={'https://platzi.com/p/arturobattistini/curso/1557-git-github/diploma/detalle/'} />
        <Card titulo={'Curso de Creación de Páginas Web con Astro'} description={'Aprendiendo nuevo framework para crear páginas web estáticas'} link={'https://platzi.com/p/arturobattistini/curso/6207-astro/diploma/detalle/'} />
        {fold
          ? <>
            <Card titulo={'Curso Práctico de HTML y CSS'} description={'Practica para profundizar conocimientos'} link={'https://platzi.com/p/arturobattistini/curso/1758-html-practico/diploma/detalle/'} />
            <Card titulo={'Curso de React.js: Navegación con React Router'} description={'Manejo de rutas estaticas y dinamicas'} link={'https://platzi.com/p/arturobattistini/curso/3468-react-router/diploma/detalle/'} />
            <Card titulo={'Curso de React.js: Patrones de Render y Composición'} description={'Ampliando conocimientos en el ecosistema de React.js'} link={'https://platzi.com/p/arturobattistini/curso/2457-react-patrones-render/diploma/detalle/'} />
            <Card titulo={'Curso Básico de JavaScript'} description={'Desarrollo con Angular'} link={'https://platzi.com/p/arturobattistini/curso/1814-basico-javascript/diploma/detalle/'} />
            <Card titulo={'Curso Básico de Programación'} description={'Desarrollo con Node.js'} link={'https://platzi.com/p/arturobattistini/curso/1050-basico-programacion/diploma/detalle/'} />
            <Card titulo={'Curso Básico de Python'} description={'Introducción a Python'} link={'https://platzi.com/p/arturobattistini/curso/1937-python-basico/diploma/detalle/'} />
            <Card titulo={'Curso de Animaciones con CSS'} description={'Ampliando conocimientos de CSS'} link={'https://platzi.com/p/arturobattistini/curso/2337-animaciones-css/diploma/detalle/'} />
            <Card titulo={'Curso de API REST con Javascript: Fundamentos'} description={'APIS en formato JSON'} link={'https://platzi.com/p/arturobattistini/curso/2985-api/diploma/detalle/'} />
            <Card titulo={'Curso de Closures y Scope en JavaScript'} description={'Ampliando conocimientos de JavaScript'} link={'https://platzi.com/p/arturobattistini/curso/3213-javascript-closures-scope/diploma/detalle/'} />
            <Card titulo={'Curso de Complejidad Algorítmica con Python'} description={'Inteligencia Artificial'} link={'https://platzi.com/p/arturobattistini/curso/1775-algoritmos-python/diploma/detalle/'} />
            <Card titulo={'Curso de Computación Básica'} description={'Introducción a la computción'} link={'https://platzi.com/p/arturobattistini/curso/1741-computacion-basica-2019/diploma/detalle/'} />
            <Card titulo={'Curso de Creación de Tiendas en Línea con WooCommerce'} description={'WooCommerce en Wordpress'} link={'https://platzi.com/p/arturobattistini/curso/1981-woocommerce/diploma/detalle/'} />
            <Card titulo={'Curso de CSS Grid Básico'} description={'Fundamentos de Programación || Figma'} link={'https://platzi.com/p/arturobattistini/curso/2474-css-grid/diploma/detalle/'} />
            <Card titulo={'Curso de Diseño Web con CSS Grid y Flexbox'} description={'Ampliando conocimientos de CSS'} link={'https://platzi.com/p/arturobattistini/curso/2229-flexbox-css-grid/diploma/detalle/'} />
            <Card titulo={'Curso Definitivo de HTML y CSS'} description={'Introducción a HTML y CSS'} link={'https://platzi.com/p/arturobattistini/curso/2008-html-css/diploma/detalle/'} />
            <Card titulo={'Curso de Frontend Developer'} description={'Principios, flujo de trabajo y teoria sobre el frontend'} link={'https://platzi.com/p/arturobattistini/curso/2467-frontend-developer/diploma/detalle/'} />
            <Card titulo={'Curso Práctico de Frontend Developer'} description={'Principios, flujo de trabajo y teoria sobre el frontend en practica'} link={'https://platzi.com/p/arturobattistini/curso/2477-frontend-developer-practico/diploma/detalle/'} />

            <Card titulo={'Curso de Fundamentos de Bases de Datos'} description={'Introducción basica sobre bases de datos relacionales y no relacionales'} link={'https://platzi.com/p/arturobattistini/curso/1566-bd/diploma/detalle/'} />
            <Card titulo={'Curso de Introducción a la Web: Historia y Funcionamiento de Internet'} description={'Curso teorico'} link={'https://platzi.com/p/arturobattistini/curso/2053-intro-historia-internet/diploma/detalle/'} />
            <Card titulo={'Curso de Introducción al Pensamiento Computacional con Python'} description={'Introducción al pensamiento racional para programar adecuadamente'} link={'https://platzi.com/p/arturobattistini/curso/1764-python-cs/diploma/detalle/'} />
            <Card titulo={'Curso de JavaScript Engine (V8) y el Navegador'} description={'Backend con JavaScript'} link={'https://platzi.com/p/arturobattistini/curso/1798-javascript-navegador/diploma/detalle/'} />
            <Card titulo={'Curso de Manipulación del DOM'} description={'Ampliando mis conocimientos con JavaScript'} link={'https://platzi.com/p/arturobattistini/curso/2193-dom/diploma/detalle/'} />
            <Card titulo={'Curso de Sistemas de Diseño Efectivos'} description={'Diseño de Productos Digitales y UX'} link={'https://platzi.com/p/arturobattistini/curso/1420-sistemas-diseno/diploma/detalle/'} />
            <Card titulo={'Curso de Transformaciones y Transiciones en CSS'} description={'Ampliando conocimientos de CSS'} link={'https://platzi.com/p/arturobattistini/curso/2336-transformaciones-transiciones-css/diploma/detalle/'} />
            <Card titulo={'Curso Práctico de JavaScript'} description={'Ampliando conocimientos de JavaScript'} link={'https://platzi.com/p/arturobattistini/curso/3271-javascript-practico/diploma/detalle/'} />
            <Card titulo={'Curso Práctico de JavaScript 2 '} description={'Ampliando conocimientos de JavaScript'} link={'https://platzi.com/p/arturobattistini/curso/2327-javascript-practico-2021/diploma/detalle/'} />
            <Card titulo={'Curso Práctico de Maquetación en CSS'} description={'Ampliando conocimientos de CSS'} link={'https://platzi.com/p/arturobattistini/curso/1744-practico-css/diploma/detalle/'} />
            <Card titulo={'Curso Profesional de CSS Grid Layout'} description={'Ampliando conocimientos de CSS'} link={'https://platzi.com/p/arturobattistini/curso/2222-css-grid-layout/diploma/detalle/'} />

          </>
          : null}
      </div>

      <div className='flex gap-5 sm:flex-col w-full justify-center'>

        <button
          onClick={() => handleFold()}
          className='custonButton px-12 py-3 mt-5 '>{fold ? language ? 'See less' : 'Ver menos' : !language ? 'Ver mas' : 'See more'}
        </button>

        <button
          onClick={() => handleFold()}
          className='custonButton px-5 py-3 mt-5 text-yellow-400 font-bold border-yellow-400 tracking-wider '>
          <a href='https://platzi.com/p/arturobattistini/' target='_blank' rel="noreferrer">{!language ? 'Certificar Fuentes' : 'Check Sources'} </a>
        </button>
      </div>
    </section>
  )
}
