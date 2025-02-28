import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Edit, Pencil, Trash } from 'lucide-react';

function Home() {
    const API_PORT = import.meta.env.VITE_API_PORT || 8000;
    const BASE_URL = `http://localhost:${API_PORT}/projects`;
    
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingProjectId, setEditingProjectId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null,
        projectUrl: ''
    });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const response = await axios.get(BASE_URL);
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
            alert("Failed to fetch projects!");
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        
        if (!formData.title || !formData.description || !formData.projectUrl) {
            alert("Please fill all required fields!");
            return;
        }

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("projectUrl", formData.projectUrl);
        if (formData.image) data.append("image", formData.image);

        try {
            setLoading(true);

            if (editingProjectId) {
                await axios.put(`${BASE_URL}/${editingProjectId}`, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Project updated successfully!");
            } else {
                await axios.post(BASE_URL, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Project added successfully!");
            }

            resetForm();
            fetchProjects();
        } catch (error) {
            console.error("Upload failed:", error.response?.data || error.message);
            alert(`Failed to ${editingProjectId ? "update" : "upload"} project!`);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setShowForm(false);
        setFormData({ title: "", description: "", image: null, projectUrl: "" });
        setEditingProjectId(null);
    };

    const handleEdit = (project, e) => {
        e.stopPropagation(); // Prevent opening the project URL
        
        setShowForm(true);
        setFormData({
            title: project.title,
            description: project.description,
            image: null, // Can't pre-fill file input
            projectUrl: project.projectUrl,
        });
        setEditingProjectId(project._id);
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation(); // Prevent opening the project URL
        
        if (!window.confirm("Are you sure you want to delete this project?")) return;

        try {
            setLoading(true);
            await axios.delete(`${BASE_URL}/${id}`);
            alert("Project deleted successfully!");
            fetchProjects();
        } catch (error) {
            console.error("Delete failed:", error.response?.data || error.message);
            alert("Failed to delete project!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='text-[#fff] bg-[#000] px-12 py-10'>
          <div className="min-h-screen bg-[#111111] text-white p-4 rounded-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Profile */}
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-lg">
                  <img src="profilepic.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
                </div>
    
                <div className="text-center md:text-left mb-6">
                  <div className="text-2xl font-medium mb-1">12345678</div>
                  <h1 className="text-3xl font-semibold mb-1">Abhishek Khatale</h1>
                  <div className="text-xl mb-1">Front End Developer</div>
                  <div className="text-gray-400 mb-1">BCA Student</div>
                  <div className="text-gray-400">3rd Year Student</div>
                </div>
    
                <div className="flex gap-2 mb-6">
                  <button className="bg-white font-semibold text-black rounded-full px-4 py-2 flex items-center gap-2">
                    <Edit size={16} /> Edit Profile
                  </button>
                  <button className="bg-red-500 text-white rounded-full px-4 py-2 font-semibold">
                    Logout
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
                    <span>abhishek@gmail.com</span>
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
                    <span>Abhishekkhatale/</span>
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
                    <span>Abhishekkhatale/</span>
                  </div>
                </div>
              </div>
    
              {/* Right Column - Content */}
              <div className="md:col-span-2">
                {/* Bio Section */}
                <div className="mb-12">
                  <h2 className="text-5xl font-medium text-green-500 mb-4">Abhishek Khatale</h2>
                  <p className="text-lg">
                    is a UI/UX designer, web developer, and entrepreneur with a passion for innovation. He has won multiple
                    national-level UI/UX competitions and actively participates in hackathons. He runs Sipperzzs on YouTube
                    and owns Siterebuks Coffee and Friendship Chinese. With expertise in full-stack development and a focus on
                    user-centric design, he is known for delivering fast and efficient solutions.
                  </p>
                </div>
    
                {/* Skills Section */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-5xl font-medium text-green-500">Skills</h2>
                    <button className="text-green-500 text-3xl">+</button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-black rounded-lg p-6 flex flex-col items-center">
                      <div className="text-xl font-medium">Html</div>
                    </div>
                    <div className="bg-black rounded-lg p-6 flex flex-col items-center">
                      <div className="text-xl font-medium">Css</div>
                    </div>
                    <div className="bg-black rounded-lg p-6 flex flex-col items-center">
                      <div className="text-xl font-medium">JavaScript</div>
                    </div>
                    <div className="bg-black rounded-lg p-6 flex flex-col items-center">
                      <div className="text-xl font-medium">React.JS</div>
                    </div>
                  </div>
                </div>
    
                {/* Projects Section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-5xl font-medium text-green-500">Projects</h2>
                    <button 
                      onClick={() => {
                        resetForm();
                        setShowForm(true);
                      }}
                      className="text-green-500 text-3xl flex items-center justify-center"
                      aria-label="Add new project"
                    >
                      <PlusCircle size={28} />
                    </button>
                  </div>

                  {/* Projects Grid */}
                  {loading && !showForm ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {projects.length === 0 ? (
                        <div className="col-span-3 text-center py-8 text-gray-400">
                          No projects yet. Click the + button to add your first project!
                        </div>
                      ) : (
                        projects.map((project) => (
                          <div 
                            key={project._id} 
                            className="bg-black rounded-lg overflow-hidden relative group cursor-pointer"
                            onClick={() => window.open(project.projectUrl, "_blank")}
                          >
                            <img 
                              src={project.imageUrl || "profilepic.jpg"} 
                              alt={project.title} 
                              className="w-full h-48 object-cover" 
                            />
                            <div className="p-4">
                              <h3 className="text-xl font-semibold mb-2 truncate">{project.title}</h3>
                              <p className="text-gray-400 line-clamp-2">{project.description}</p>
                            </div>
                            
                            {/* Edit & Delete Buttons */}
                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={(e) => handleEdit(project, e)} 
                                className="bg-blue-500 hover:bg-blue-400 text-white p-1 rounded-full"
                                aria-label="Edit project"
                              >
                                <Pencil size={16} />
                              </button>
                              <button 
                                onClick={(e) => handleDelete(project._id, e)} 
                                className="bg-red-500 hover:bg-red-400 text-white p-1 rounded-full"
                                aria-label="Delete project"
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Form Modal */}
          {showForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
              <div className="bg-[#111] p-6 rounded-xl w-full max-w-md">
                <h2 className="text-xl font-bold text-green-500 mb-4">
                  {editingProjectId ? "Edit Project" : "Add Project"}
                </h2>
                <form onSubmit={handleUpload}>
                  <div className="space-y-3">
                    <input 
                      type="text" 
                      name="title" 
                      placeholder="Project Title *" 
                      value={formData.title} 
                      onChange={handleInputChange} 
                      className="w-full p-2 bg-black rounded-lg text-white" 
                      required
                    />
                    <textarea 
                      name="description" 
                      placeholder="Project Description *" 
                      value={formData.description} 
                      onChange={handleInputChange} 
                      className="w-full p-2 bg-black rounded-lg text-white min-h-24" 
                      required
                    ></textarea>
                    <input 
                      type="url" 
                      name="projectUrl" 
                      placeholder="Project URL * (https://...)" 
                      value={formData.projectUrl} 
                      onChange={handleInputChange} 
                      className="w-full p-2 bg-black rounded-lg text-white" 
                      required
                    />
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Project Image</label>
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleFileChange} 
                        className="w-full p-2 bg-black text-white rounded-lg" 
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-6">
                    <button 
                      type="button" 
                      onClick={resetForm} 
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black rounded-lg"
                      disabled={loading}
                    >
                      {loading ? 
                        "Processing..." : 
                        editingProjectId ? "Update Project" : "Add Project"
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
    );
}

export default Home;