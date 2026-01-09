import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AllState from './Components/AllState.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <AllState>
         <App />
      </AllState>
   </BrowserRouter>

)
