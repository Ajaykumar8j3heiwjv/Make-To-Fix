import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter,Route,Link } from 'react-router-dom'
import Main1 from './main1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      < Main1 />
    </BrowserRouter>
  </StrictMode>
)

