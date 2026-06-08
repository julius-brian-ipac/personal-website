import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import Favicon from './assets/icons/favicon.png'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <title>Julius Brian Ipac</title>
    <link rel='icon' href={Favicon} />

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
