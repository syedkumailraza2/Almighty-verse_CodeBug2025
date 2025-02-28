import React from 'react'
import Homenavbar from './Components/Homenavbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Thirdparty from './Pages/Thirdparty'
import SearchPartner from './Pages/SearchPartner'

function App() {
  return (
    <div>
      <Homenavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search-partner" element={<SearchPartner/>} />
      </Routes>
    </div>
  )
}

export default App
