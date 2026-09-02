import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import App from './App'
import LandingPage from './pages/landingPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
      {/* <LandingPage/> */}
  </StrictMode>,
)
