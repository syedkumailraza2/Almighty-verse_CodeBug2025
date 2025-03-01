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
import StudentDesk from "./Pages/StudentDesk"; // Ensure correct import
import NotesView from "./Pages/NotesView"; // Ensure correct import
import AiMentor from "./Pages/AiMentor"; // Ensure correct import

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
            <Route path="/student-desk" element={<StudentDesk />} />
            <Route path="/notes" element={<NotesView />} />
            <Route path="/ai-mentor" element={<AiMentor />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
