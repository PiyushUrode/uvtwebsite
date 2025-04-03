import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <>

      <Toaster />
      <React.StrictMode>
        <App />
      </React.StrictMode>

  </>
)
