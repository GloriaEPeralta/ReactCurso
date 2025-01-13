import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'  // Importamos el Provider
import { BrowserRouter } from 'react-router-dom'
import { JournalApp } from './JournalApp'
import { store } from './store' // Importamos el store

import './styles.css'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Enviamos el store al Provider */} 
      <BrowserRouter>
        <JournalApp  />
      </BrowserRouter>  
    </Provider>
   

  </StrictMode>,
)
