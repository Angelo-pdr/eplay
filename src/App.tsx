import React from 'react'
import { BrowserRouter } from 'react-router-dom'

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
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
