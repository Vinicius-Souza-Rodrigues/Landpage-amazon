import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import Produto from './components/Produto'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path="/" element={<Main />} />
          <Route path="/teste" element={<Produto />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
