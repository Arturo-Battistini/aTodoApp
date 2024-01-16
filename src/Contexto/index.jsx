import React, { createContext, useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Contexto = createContext()

// eslint-disable-next-line react/prop-types
export const ContextoProvider = ({ children }) => {
  // language
  const [language, setLanguage] = useState(false)
  const handleLanguage = () => {
    setLanguage(!language)
  }

  // smooth transitions
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
    Aos.refresh()
  }, [])

  /* estado del componente DayNight que controla el modo nocturno de la app */
  const [dayNight, setDayNight] = useState(false)

  /* blur del background en mobile */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // solo para ver si hay datos en los inputs
  const [validarDatos, setValidarDatos] = useState(false)

  // registros de profesion y edad
  const obtenerRegistros = () => {
    const datos = localStorage.getItem('registro')
    if (datos) {
      return JSON.parse(datos)
    } else {
      return []
    }
  }

  // Registro de profesion y edad en pantalla
  const [personas, setPersonas] = useState(obtenerRegistros())

  // inputs Name and Age
  const [profesion, setProfesion] = useState('')
  const [edad, setEdad] = useState('')
  const [tarea, setTarea] = useState('')

  // localStorage registro
  const [registro, setRegistro] = useState(obtenerRegistros())
  // pass the register to a text
  useEffect(() => {
    localStorage.setItem('registro', JSON.stringify(registro))
  }, [registro]
  )

  /* -------------------------------------------------------------------estilos */
  // estilos localstorage

  const obtenerEstilos = () => {
    const estilos = localStorage.getItem('selectedItems')
    if (estilos) {
      return JSON.parse(estilos)
    } else {
      return []
    }
  }

  const [selectedItems, setSelectedItems] = useState(obtenerEstilos())

  useEffect(() => {
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
  }, [selectedItems])

  // --------------------------------------------------------------------------localStorage name
  const ConvertirName = () => {
    const llave = localStorage.getItem('name')
    if (llave) {
      return JSON.parse(llave)
    } else {
      return []
    }
  }
  const [validarNombre, setValidarNombre] = useState(ConvertirName())

  const [nombre, setNombre] = useState(ConvertirName())

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(validarNombre))
  }, [validarNombre]
  )

  return (
    <Contexto.Provider value={{
      obtenerRegistros,
      personas,
      setPersonas,
      profesion,
      setProfesion,
      edad,
      setEdad,
      registro,
      setRegistro,
      validarDatos,
      setValidarDatos,
      validarNombre,
      setValidarNombre,
      nombre,
      setNombre,
      tarea,
      setTarea,
      selectedItems,
      setSelectedItems,
      dayNight,
      setDayNight,
      language,
      setLanguage,
      handleLanguage,
      isMobileMenuOpen,
      setIsMobileMenuOpen

    }}>
      {children}
    </Contexto.Provider>
  )
}
