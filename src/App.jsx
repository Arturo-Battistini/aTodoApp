import { useContext,useState,useEffect } from 'react'
import Registro from './components/Registro/Registro'
import './index.css'
import { ContextoProvider } from './Contexto/index'

const App = () => {
  
  return (
    <ContextoProvider>
      <Registro />
    </ContextoProvider>
  )
}

export default App
