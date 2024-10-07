import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Sobre from './components/Sobre/Sobre'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Sobre/>
  </StrictMode>,
)
