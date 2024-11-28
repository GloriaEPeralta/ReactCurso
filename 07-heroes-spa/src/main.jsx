import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'  // Se importa el Router
import './styles.css'

import { HeroesApp } from './HeroesApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Se envuelve la aplicación en el Router */}
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>,
);
