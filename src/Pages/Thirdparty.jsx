import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Thirdparty() {
  const API_PORT = import.meta.env.VITE_API_PORT || 8000;
  const PROFILE_URL = `http://localhost:${API_PORT}/student/user/${userId}`;
  const { userId } = useParams(); // Get the userId from the URL

  const [profile, setProfile] = useState({
    _id: "",
    name: "",
    email: "",
    prn_no: "",
    phone_no: "",
    course: "",
    year: "",
    designation: "",
    skills: [],
    image: "",
    bio: "",
  });
  const [loading, setLoading] = useState(true);

  // Fetch the profile data of the third-party user
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const response = await axios.get(`${PROFILE_URL}${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Parse skills if it's a string
      const profileData = response.data;
      if (typeof profileData.skills === "string") {
        try {
          profileData.skills = JSON.parse(profileData.skills);
        } catch (error) {
          console.error("Failed to parse skills:", error);
          profileData.skills = []; // Fallback to an empty array if parsing fails
        }
      }

      // Clean skills (remove double quotes and extra spaces)
      if (Array.isArray(profileData.skills)) {
        profileData.skills = profileData.skills.map((skill) =>
          skill.replace(/"/g, "").trim()
        );
      }

      console.log("Fetched Profile Data:", profileData); // Log the fetched data
      setProfile(profileData); // Update the profile state
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (error.response?.status === 401) {
        alert("Unauthorized! Please log in again.");
        window.location.href = "/login";
      } else {
        alert("Failed to fetch profile!");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch profile data when the component mounts
  useEffect(() => {
    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="text-[#fff] bg-[#000] px-12 py-10">
        <div className="min-h-screen bg-[#111111] text-white p-4 rounded-xl flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-[#fff] bg-[#000] px-12 py-10">
      <div className="min-h-screen bg-[#111111] text-white p-4 rounded-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={profile.image || "profilepic.jpg"}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="text-center md:text-left mb-6">
              <div className="text-2xl font-medium mb-1">{profile.prn_no}</div>
              <h1 className="text-3xl font-semibold mb-1">{profile.name}</h1>
              <div className="text-xl mb-1">{profile.designation}</div>
              <div className="text-gray-400 mb-1">{profile.course}</div>
              <div className="text-gray-400">{profile.year}</div>
            </div>

            <div className="flex gap-2 mb-6">
              <button className="bg-green-500 text-black rounded-full px-4 py-2 flex items-center gap-1 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                </svg>
                Add Partner
              </button>
              <button className="bg-white font-semibold text-black rounded-full px-4 py-2">
                In Partnership
              </button>
            </div>

            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>{profile.name}/</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>{profile.name}/</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2">
            {/* Bio Section */}
            <div className="mb-12">
              <h2 className="text-5xl font-medium text-green-500 mb-4">{profile.name}</h2>
              <p className="text-lg">
                {profile.bio ||
                  `is a ${profile.designation} with a passion for innovation. He has won multiple
                    national-level UI/UX competitions and actively participates in hackathons. He runs Sipperzzs on YouTube
                    and owns Siterebuks Coffee and Friendship Chinese. With expertise in full-stack development and a focus on
                    user-centric design, he is known for delivering fast and efficient solutions.`}
              </p>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="text-5xl font-medium text-green-500 mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.isArray(profile.skills) ? (
                  profile.skills.map((skill, index) => (
                    <div key={index} className="bg-black rounded-lg p-6 flex flex-col items-center">
                      <div className="text-xl font-medium">{skill}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-red-500">Invalid skills data</div>
                )}
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-5xl font-medium text-green-500 mb-6">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white rounded-lg overflow-hidden">
                    <img src="/campus-autumn.jpg" alt="Project" className="w-full h-48 object-cover" />
                    <div className="p-4 text-black">
                      <h3 className="text-xl font-semibold mb-2">Winner Of PIXEL Hackathon</h3>
                      <p>
                        Abhishek Khatale is a UI/UX designer, web developer, and entrepreneur with a passion for
                        innovation.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdparty;