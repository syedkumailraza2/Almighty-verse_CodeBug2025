import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Upload, NotebookText, X } from "lucide-react";

const API_PORT = import.meta.env.VITE_API_PORT || 8000;
const BASE_URL = `http://localhost:${API_PORT}/notes`;

const StudentDesk = () => {
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    format: "pdf",
    tech: "",
    author: "",
    course: "",
    year: "",
    type: "Lecture Notes",
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!file || !formData.name || !formData.tech || !formData.author) {
      alert("Please fill all required fields!");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      setLoading(true);
      await axios.post(`${BASE_URL}/create`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully!");
      resetForm();
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setShowUploadForm(false);
    setFile(null);
    setFormData({
      name: "",
      format: "pdf",
      tech: "",
      author: "",
      course: "",
      year: "",
      type: "Lecture Notes"
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Student Desk</h1>

      {/* Main Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-2xl">
        {/* Access Notes */}
        <div className="bg-white text-black p-4 sm:p-6 rounded-xl shadow-lg w-full sm:w-1/2 flex flex-col items-center justify-center">
          <NotebookText size={40} className="sm:mb-2" />
          <h3 className="text-lg font-medium mt-2 mb-2">Your Study Material</h3>
          <p className="text-gray-600 text-sm text-center mb-4">Access all your saved notes and study materials</p>
          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-black text-green-400 rounded-full shadow-md hover:bg-green-400 hover:text-black transition"
            onClick={() => navigate("/notes")}
          >
            Access Notes
          </button>
        </div>

        {/* Upload Notes */}
        <div className="bg-white text-black p-4 sm:p-6 rounded-xl shadow-lg w-full sm:w-1/2 flex flex-col items-center justify-center">
          <Upload size={40} className="sm:mb-2" />
          <h3 className="text-lg font-medium mt-2 mb-2">Share Knowledge</h3>
          <p className="text-gray-600 text-sm text-center mb-4">Contribute by uploading your notes and resources</p>
          <button
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-black text-green-400 rounded-full shadow-md hover:bg-green-400 hover:text-black transition"
            onClick={() => setShowUploadForm(true)}
          >
            Upload Notes
          </button>
        </div>
      </div>

      {/* Upload Form (Modal) */}
      {showUploadForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 backdrop-blur-sm p-4 z-50 overflow-y-auto">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md text-white">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-green-400">Upload Notes</h2>
              <button 
                type="button"
                className="text-gray-400 hover:text-white transition-colors focus:outline-none"
                onClick={resetForm}
                aria-label="Close form"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleUpload} className="space-y-3">
              {/* Required Fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Title *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter note title"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="tech" className="block text-sm font-medium text-gray-300 mb-1">Subject/Technology *</label>
                <input
                  id="tech"
                  type="text"
                  placeholder="e.g. JavaScript, Physics, Biology"
                  name="tech"
                  value={formData.tech}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">Author *</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Your name"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  required
                />
              </div>
              
              {/* Optional Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">Course</label>
                  <input
                    id="course"
                    type="text"
                    placeholder="e.g. BCA, MCA"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-1">Year</label>
                  <input
                    id="year"
                    type="text"
                    placeholder="e.g. 2023"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Format Dropdown */}
                <div>
                  <label htmlFor="format" className="block text-sm font-medium text-gray-300 mb-1">File Format</label>
                  <select
                    id="format"
                    name="format"
                    value={formData.format}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  >
                    <option value="zip">ZIP</option>
                    <option value="doc">DOC</option>
                    <option value="image">Image</option>
                  </select>
                </div>

                {/* Type Dropdown */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-300 mb-1">Content Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                  >
                    <option value="Lecture Notes">Lecture Notes</option>
                    <option value="Assignment">Assignment</option>
                    <option value="Research Paper">Research Paper</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-300 mb-1">Upload File *</label>
                <input 
                  id="file-upload"
                  type="file" 
                  onChange={handleFileChange} 
                  className="w-full p-2 text-white bg-gray-800 border border-gray-600 rounded-lg file:mr-4 file:py-1 file:px-3
                  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-black
                  hover:file:bg-green-600" 
                  required 
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  className="w-1/2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDesk;