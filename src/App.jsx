import { useContext, useState, useEffect } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './index.css'
import { ContextoProvider } from './Contexto/index'
import Main from './Main/Main'
import DefaultStyles from './DefaulStyles/DefaultStyles'
import { Helmet } from 'react-helmet'
import Todo from './Pages/Todo/Todo'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: 'aTodoApp/', element: <Main /> },
    { path: 'aTodoApp/todo', element: <Todo /> }
  ])
  return routes
}


const App = () => {


  return (
    <BrowserRouter>
      <DefaultStyles>
        <ContextoProvider>
          <AppRoutes />
        </ContextoProvider>
      </DefaultStyles>
    </BrowserRouter>
  )
}

export default App
