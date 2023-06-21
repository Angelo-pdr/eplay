import React from 'react'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'

import GlobalCss from './styles'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './Routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className='container'>
        <Header/>
      </div>
      <Footer />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
