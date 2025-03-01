import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Search, Download, FileText, Image, File, Video } from "lucide-react";

const API_PORT = import.meta.env.VITE_API_PORT || 8000;
const BASE_URL = `http://localhost:${API_PORT}/notes`;

const Notesview = () => {
  const [allNotes, setAllNotes] = useState([]); // Store all fetched notes
  const [filteredNotes, setFilteredNotes] = useState([]); // Store filtered notes
  const [loading, setLoading] = useState(false); // Loading state for initial fetch
  const [isFiltering, setIsFiltering] = useState(false); // Loading state for filtering/searching
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "all", // Filter by type: all, pdf, image, video, doc
    year: "all", // Filter by year: all, 1st, 2nd, 3rd
    sort: "newest" // Sort by: newest, oldest
  });

  // Fetch all notes from the API
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setAllNotes(response.data); // Store all fetched notes
      setFilteredNotes(response.data); // Initially, set filtered notes to all notes
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Apply filters and search locally
  useEffect(() => {
    const applyFilters = async () => {
      setIsFiltering(true); // Start filtering animation
      let filtered = allNotes;

      // Apply type filter
      if (filters.type !== "all") {
        filtered = filtered.filter(note => note.type === filters.type);
      }

      // Apply year filter
      if (filters.year !== "all") {
        filtered = filtered.filter(note => note.year === filters.year);
      }

      // Apply search query
      if (searchQuery) {
        filtered = filtered.filter(note =>
          note.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (note.tech && note.tech.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }

      // Apply sorting
      if (filters.sort === "newest") {
        filtered = [...filtered].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (filters.sort === "oldest") {
        filtered = [...filtered].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }

      // Simulate a small delay to show the loading animation
      await new Promise(resolve => setTimeout(resolve, 300));

      setFilteredNotes(filtered); // Update filtered notes
      setIsFiltering(false); // Stop filtering animation
    };

    applyFilters();
  }, [allNotes, searchQuery, filters]);

  // Debounce the search input
  const debouncedSearch = useCallback(
    debounce((query) => setSearchQuery(query), 500),
    []
  );

  const handleSearch = (e) => {
    const query = e.target.value;
    debouncedSearch(query);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const getFileIcon = (note) => {
    if (note.type === "pdf") {
      return <FileText size={24} className="text-red-400" />;
    } else if (note.type.startsWith("image")) {
      return <Image size={24} className="text-blue-400" />;
    } else if (note.type === "video") {
      return <Video size={24} className="text-purple-400" />;
    } else {
      return <File size={24} className="text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Available Notes</h1>

        {/* Search and Filter Bar */}
        <div className="mb-6 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, author, subject..."
              onChange={handleSearch}
              className="pl-10 p-3 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label="Search notes"
            />
          </div>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="all">All Types</option>
            <option value="pdf">PDF</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
            <option value="doc">Document</option>
          </select>
          <select
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="all">All Years</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
          </select>
          <select
            name="sort"
            value={filters.sort}
            onChange={handleFilterChange}
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Loading State for Initial Fetch */}
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin h-10 w-10 border-4 border-green-400 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Loading State for Filtering/Searching */}
            {isFiltering ? (
              <div className="flex items-center justify-center h-40">
                <div className="animate-spin h-10 w-10 border-4 border-green-400 rounded-full border-t-transparent"></div>
              </div>
            ) : (
              <>
                {/* Results Count */}
                <p className="text-gray-400 mb-4">
                  {filteredNotes.length} {filteredNotes.length === 1 ? "result" : "results"} found
                </p>

                {/* Notes Grid */}
                {filteredNotes.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {filteredNotes.map((note, index) => (
                      <div
                        key={index}
                        className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-green-900/30 transition-all duration-300 flex flex-col"
                      >
                        {/* Preview Section */}
                        <div className="h-40 sm:h-44 flex items-center justify-center bg-gray-800 relative">
                          {note.type === "pdf" ? (
                            <iframe
                              src={`${note.url}#toolbar=0&navpanes=0&scrollbar=0`}
                              className="w-full h-full"
                              title={note.name}
                            ></iframe>
                          ) : note.type.startsWith("image") ? (
                            <img
                              src={note.url}
                              alt={note.name}
                              className="w-full h-full object-cover"
                            />
                          ) : note.type === "video" ? (
                            <video
                              src={note.url}
                              className="w-full h-full object-cover"
                              controls
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center">
                              {getFileIcon(note)}
                              <p className="text-gray-500 text-sm mt-2">No preview available</p>
                            </div>
                          )}
                          <span className="absolute top-2 right-2 bg-black/60 text-xs px-2 py-1 rounded-full">
                            {note.type || "Document"}
                          </span>
                        </div>

                        {/* Content Section */}
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex-1">
                            <h2 className="text-green-400 text-lg font-semibold line-clamp-1">{note.name}</h2>
                            <p className="text-sm text-gray-400 mb-1">By {note.author}</p>
                            {note.tech && (
                              <p className="text-xs text-gray-500 mb-1">Subject: {note.tech}</p>
                            )}
                            {note.course && note.year && (
                              <p className="text-xs text-gray-500">
                                {note.course} | {note.year}
                              </p>
                            )}
                          </div>

                          {/* Download Button */}
                          <a
                            href={note.url}
                            download
                            className="mt-3 text-center py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-medium flex items-center justify-center gap-2 transition-colors"
                            aria-label={`Download ${note.name}`}
                          >
                            <Download size={16} />
                            <span>Download</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600 mb-4"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <p className="text-gray-500 text-lg font-medium">No notes found</p>
                    <p className="text-gray-600 mt-2 max-w-md">
                      Try adjusting your search or filter criteria, or upload new notes to get started.
                    </p>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Notesview;