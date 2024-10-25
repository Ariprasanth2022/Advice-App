import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Advice/Advice.css"
import { Advice } from './Advice/Advice'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Advice />
  </StrictMode>,
)
