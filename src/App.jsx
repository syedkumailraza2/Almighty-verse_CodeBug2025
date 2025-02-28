import React from 'react'
import Homenavbar from './Components/Homenavbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Thirdparty from './Pages/Thirdparty'
import SearchPartner from './Pages/SearchPartner'
import Inbox from './Pages/Inbox'
import AllEvents from './Pages/Event'

function App() {
  return (
    <div>
      <Homenavbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search-partner" element={<SearchPartner/>} />
        <Route path="/request-box" element={<Inbox/>} />
        <Route path="/event-calendar" element={<AllEvents/>} />
      </Routes>
    </div>
  )
}

export default App
