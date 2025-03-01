import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SearchPartner() {
  const API_PORT = import.meta.env.VITE_API_PORT || 8000;
  const SEARCH_URL = `http://localhost:${API_PORT}/student/search`;
  const navigate = useNavigate();

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    course: "",
    year: "",
    skill: "",
    designation: "",
  });
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch students based on search and filters
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(SEARCH_URL, {
        params: {
          name: searchQuery,
          course: filters.course,
          year: filters.year,
          skill: filters.skill,
          designation: filters.designation,
        },
      });
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("Failed to fetch students!");
    } finally {
      setLoading(false);
    }
  };

  // Fetch students when search or filters change
  useEffect(() => {
    // Check if searchQuery or any filter has a value
    if (searchQuery || filters.course || filters.year || filters.skill || filters.designation) {
      fetchStudents();
    } else {
      // If searchQuery and all filters are empty, clear the students list
      setStudents([]);
    }
  }, [searchQuery, filters]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter button click
  const handleFilterClick = (filterType) => {
    const value = prompt(`Enter ${filterType}:`);
    if (value !== null) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: value,
      }));
    }
  };

  const viewUser = (id) => {
    navigate(`/thirdparty/${id}`);
  }

  return (
    <div className="text-[#fff] bg-[#000000] px-12 py-10">
      <div className="min-h-screen bg-[#0a0a0a] text-white p-6 rounded-xl">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 bg-black rounded-full focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterClick("course")}
                className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900"
              >
                Course
              </button>
              <button
                onClick={() => handleFilterClick("year")}
                className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900"
              >
                Year
              </button>
              <button
                onClick={() => handleFilterClick("skill")}
                className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900"
              >
                Skill
              </button>
              <button
                onClick={() => handleFilterClick("designation")}
                className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900"
              >
                Designation
              </button>
            </div>
          </div>

          {/* User List */}
          <div className="space-y-4">
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
              </div>
            ) : students.length === 0 ? (
              <div className="text-center py-8 text-gray-400">No students found.</div>
            ) : (
              students.map((student) => (
                <div
                  key={student._id}
                  className="flex items-center justify-between rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="profilepic.jpg"
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{student.name}</h3>
                      <p className="text-gray-400 text-sm">{student.prn_no}</p>
                      <p className="text-gray-400 text-sm">
                        {student.course} - {student.year}
                      </p>
                      <p className="text-gray-400 text-sm">{student.designation}</p>
                      <p className="text-gray-400 text-sm">
                        Skills: {student.skills.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-black rounded-full text-[#88EB63] hover:bg-[#141414] font-semibold" 
                    onClick={ () => viewUser(student._id)}>
                      Visit Profile
                    </button>
                    <button className="px-4 py-2 bg-[#88EB63] text-black rounded-full hover:bg-[#87eb63bb] font-semibold">
                      Open For Partnership
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}