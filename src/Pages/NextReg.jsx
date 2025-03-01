import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Plus } from "lucide-react"; // Import the Plus icon

const NextReg = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state || {};
  const [formData, setFormData] = useState({
    ...initialData, // Preserve previous data
    designation: "",
    password: "",
    confirmPassword: "",
    skills: [], // Add skills array
  });
  const [newSkill, setNewSkill] = useState(""); // State for new skill input

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value); // Update new skill input
  };

  const handleAddSkill = () => {
    if (newSkill.trim() === "") return; // Prevent adding empty skills
    if (formData.skills.length >= 5) {
      alert("You can only add up to 5 skills!");
      return;
    }
    setFormData({
      ...formData,
      skills: [...formData.skills, newSkill.trim()], // Add new skill
    });
    setNewSkill(""); // Clear the input
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const finalData = { ...formData };
    delete finalData.confirmPassword; // Ensure confirmPassword is not sent

    try {
      const response = await axios.post(
        "http://localhost:8000/student/register",
        finalData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(`Registration failed: ${error.response?.data?.message || "Try again!"}`);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black p-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-green-950"></div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex w-full max-w-5xl">
          <div className="w-1/2 bg-white flex items-center justify-center p-8">
            <img src="sign.png" alt="WebRoom" className="max-w-full rounded-md" />
          </div>

          <div className="w-1/2 p-10">
            <h2 className="text-2xl font-bold mb-6">Register to WebRoom!</h2>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block font-medium">Enter Your Designation:</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Ex. Frontend Developer"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              {/* Skills Section */}
              <div>
                <label className="block font-medium">Select Top 5 Skills:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={handleSkillChange}
                    placeholder="Add a skill"
                    className="w-full border rounded-lg p-2"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="p-2 bg-black text-white rounded-lg hover:bg-green-950"
                  >
                    <Plus size={16} /> {/* Add icon */}
                  </button>
                </div>
                <div className="mt-2">
                  {formData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium">Create Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-black text-white rounded-lg p-2 mt-4">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextReg;