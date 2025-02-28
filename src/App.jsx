<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Land from "./Pages/Land";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NextReg from "./Pages/NextReg";
import Homenavbar from "./Components/Homenavbar";
import SearchPartner from "./Pages/SearchPartner";
import Inbox from "./Pages/Inbox";
import AllEvents from "./Pages/Event";
import Addnotes from "./Pages/Addnotes";
=======
import React from 'react'
import Homenavbar from './Components/Homenavbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Thirdparty from './Pages/Thirdparty'
import SearchPartner from './Pages/SearchPartner'
import Inbox from './Pages/Inbox'
import AllEvents from './Pages/Event'
import Addnotes from './Pages/Addnotes'
import NotesView from './Pages/Notesview'
import StudentDesk from './Pages/Studentdesk'
import AiMentor from './Pages/AiMentor'
>>>>>>> ff864e6b936a35506ee653c11be38329ec39822f

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Check if user is already logged in (JWT token exists)
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div> 
    
      <Routes>
<<<<<<< HEAD
        {/* Landing Page */}
        <Route path="/" element={<Land />} />

        {/* Authentication Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/NextReg" element={<NextReg />} /> 
        <Route path="/login" element={<Login setAuth={() => setIsAuthenticated(true)} />} />
      

        {/* Protected Routes: Accessible Only if Authenticated */}
        {isAuthenticated ? (
          <>
          
            <Route path="/home" element={<Home />} />
            <Route path="/search-partner" element={<SearchPartner />} />
            <Route path="/request-box" element={<Inbox />} />
            <Route path="/event-calendar" element={<AllEvents />} />
            <Route path="/student-desk" element={<Addnotes />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
=======
        <Route path="/home" element={<Home />} />
        <Route path="/search-partner" element={<SearchPartner/>} />
        <Route path="/request-box" element={<Inbox/>} />
        <Route path="/event-calendar" element={<AllEvents/>} />
        <Route path="/student-desk" element={<StudentDesk/>} />
        <Route path="/notes" element={<NotesView/>} />
        <Route path="/ai-mentor" element={<AiMentor/>} />
>>>>>>> ff864e6b936a35506ee653c11be38329ec39822f
      </Routes>
    </div>
  );
}

export default App;
