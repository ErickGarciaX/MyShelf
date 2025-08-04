import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Train from './Train.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Train /> 
  </StrictMode>,
)
