import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setAuth }) => { // ✅ Accept setAuth as a prop
  const navigate = useNavigate();
  const [prn_no, setprn_no] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!prn_no || !password) {
      alert("PRN No and Password are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/student/login",
        { prn_no, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // ✅ Save JWT token
        alert("Login Successful!");

        setAuth(true); // ✅ Update authentication state
        navigate("/home"); // ✅ Redirect to Home
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
    
      <div className="flex items-center justify-center min-h-screen bg-black p-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950"></div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-5xl">
          {/* Left Side - Login Form */}
          <div className="w-1/2 p-10">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Login Into Your Account
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block font-medium">Enter your PRN No:</label>
                <input
                  type="text"
                  placeholder="Ex. 12345678"
                  value={prn_no}
                  onChange={(e) => setprn_no(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block font-medium">Enter your Password:</label>
                <input
                  type="password"
                  placeholder="Ex. xyz"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <p className="text-sm text-gray-500 text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-black font-bold cursor-pointer"
                >
                  Register
                </span>
              </p>

              <button type="submit" className="w-full bg-black text-white rounded-lg p-2">
                Login
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 bg-white flex items-center justify-center p-8 relative">
            <img src="/login.png" alt="WebRoom" className="max-w-full rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
