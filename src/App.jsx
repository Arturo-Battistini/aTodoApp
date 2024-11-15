import React from 'react'
import { useRoutes, HashRouter } from 'react-router-dom'
import './index.css'
import { ContextoProvider } from './Contexto/index'

import Main from './Main/Main'
import DefaultStyles from './DefaulStyles/DefaultStyles'
import Todo from './Pages/Todo/Todo'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: '/todo/', element: <Todo /> }

  ])
  return (routes)
}

const App = () => {
  return (
    <HashRouter>
    <ContextoProvider>
      <DefaultStyles>
        <AppRoutes />
      </DefaultStyles>
    </ContextoProvider>
  </HashRouter>
  )
}

export default App
