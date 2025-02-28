import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Addnotes from './Pages/Addnotes.jsx'
import Notesview from './Pages/Notesview.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App/> 
    
  </BrowserRouter>
)
