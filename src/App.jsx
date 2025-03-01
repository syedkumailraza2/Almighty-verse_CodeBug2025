import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, Outlet } from "react-router-dom";
import Land from "./Pages/Land";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import NextReg from "./Pages/NextReg";
import SearchPartner from "./Pages/SearchPartner";
import Inbox from "./Pages/Inbox";
import AllEvents from "./Pages/Event";
import StudentDesk from "./Pages/StudentDesk";
import NotesView from "./Pages/NotesView";
import AiMentor from "./Pages/AiMentor";
import { jwtDecode } from "jwt-decode";
import Homenavbar from "./Components/Homenavbar";
import Thirdparty from "./Pages/Thirdparty";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    setIsAuthenticated(false); // Set authentication state to false
    navigate("/login"); // Redirect to login page
    window.location.reload(); // Reload the current page
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (decodedToken.exp > currentTime) {
          setIsAuthenticated(true); // Token is valid
        } else {
          // Token is expired, log the user out
          handleLogout();
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        handleLogout();
      }
    } else {
      setIsAuthenticated(false); // No token found
    }
  }, [navigate]);

  // Layout for authenticated pages (includes Homenavbar)
  const AuthenticatedLayout = () => (
    <>
      <Homenavbar />
      <Outlet /> {/* This renders the nested routes */}
    </>
  );

  return (
    <div>
      <Routes>
        {/* Public Routes (Only accessible if NOT authenticated) */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Land />} />
            <Route path="/register" element={<Register />} />
            <Route path="/NextReg" element={<NextReg />} />
            <Route
              path="/login"
              element={<Login setAuth={() => setIsAuthenticated(true)} />}
            />
          </>
        ) : (
          // Redirect to home if authenticated and trying to access public routes
          <Route path="*" element={<Navigate to="/home" />} />
        )}

        {/* Protected Routes (Only accessible if authenticated) */}
        {isAuthenticated ? (
          <Route element={<AuthenticatedLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/search-partner" element={<SearchPartner />} />
            <Route path="/request-box" element={<Inbox />} />
            <Route path="/event-calendar" element={<AllEvents />} />
            <Route path="/student-desk" element={<StudentDesk />} />
            <Route path="/notes" element={<NotesView />} />
            <Route path="/ai-mentor" element={<AiMentor />} />
            <Route path="/thirdparty/:id" element={<Thirdparty/>} />
          </Route>
        ) : (
          // Redirect to login if not authenticated and trying to access protected routes
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;