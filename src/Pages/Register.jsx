import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prn_no: "",
    phone_no: "",
    course: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    
     
      <div className="flex items-center justify-center min-h-screen bg-black p-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950"></div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-5xl">
          <div className="w-1/2 bg-white flex items-center justify-center p-8">
            <img src="/sign.png" alt="WebRoom" className="max-w-full rounded-md" />
          </div>

          <div className="w-1/2 p-10">
            <h2 className="text-2xl font-bold mb-6">Register to WebRoom !</h2>

            <form className="space-y-4">
              <div>
                <label className="block font-medium">Enter your name :</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex. Abhishek Khatale"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block font-medium">Enter your email :</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex. abhishekkhatale@gmail.com"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block font-medium">Enter your PRN No :</label>
                  <input
                    type="text"
                    name="prn_no"
                    value={formData.prn_no}
                    onChange={handleChange}
                    placeholder="Ex. 123456789"
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-medium">Enter your Phone No :</label>
                  <input
                    type="text"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleChange}
                    placeholder="Ex. 123456789"
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block font-medium">Select Course :</label>
                  <select name="course" value={formData.course} onChange={handleChange} className="w-full border rounded-lg p-2">
                    <option>BCA</option>
                    <option>BSC-IT</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block font-medium">Select Year :</label>
                  <select name="year" value={formData.year} onChange={handleChange} className="w-full border rounded-lg p-2">
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                  </select>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Already have an account?{" "}
                <span onClick={() => navigate("/login")} className="text-black font-bold cursor-pointer">Login</span>
              </p>

              <button
                type="button"
                onClick={() => navigate("/NextReg", { state: formData })}
                className="w-full bg-black text-white rounded-lg p-2 mt-4">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default Register;
