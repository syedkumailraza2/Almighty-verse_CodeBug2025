import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { Search, Download, FileText, Image, File } from "lucide-react";

const API_PORT = import.meta.env.VITE_API_PORT || 8000;
const BASE_URL = `http://localhost:${API_PORT}/notes`;

const Notesview = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    sort: "newest"
  });

  useEffect(() => {
    fetchNotes(searchQuery);
  }, [filters]); // Re-fetch when filters change

  // Function to fetch notes
  const fetchNotes = async (query = "") => {
    try {
      setLoading(true);
      let url = query ? `${BASE_URL}/search?query=${query}` : BASE_URL;
      
      // Add filters to URL if not "all"
      if (filters.type !== "all") {
        url += `${url.includes("?") ? "&" : "?"}type=${filters.type}`;
      }
      
      // Add sort parameter
      url += `${url.includes("?") ? "&" : "?"}sort=${filters.sort}`;
      
      const response = await axios.get(url);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce the fetch function to avoid excessive API calls
  const debouncedFetchNotes = useCallback(
    debounce((query) => fetchNotes(query), 500),
    [filters] // Re-create when filters change
  );

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetchNotes(query);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  // Function to determine which icon to show based on file type
  const getFileIcon = (note) => {
    if (note.type === "pdf") {
      return <FileText size={24} className="text-red-400" />;
    } else if (note.type.startsWith("image")) {
      return <Image size={24} className="text-blue-400" />;
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
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 p-3 w-full rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label="Search notes"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin h-10 w-10 border-4 border-green-400 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <p className="text-gray-400 mb-4">
              {notes.length} {notes.length === 1 ? "result" : "results"} found
            </p>
            
            {/* Notes Grid */}
            {notes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {notes.map((note, index) => (
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
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          {getFileIcon(note)}
                          <p className="text-gray-500 text-sm mt-2">No preview available</p>
                        </div>
                      )}
                      
                      {/* Type Badge */}
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
      </div>
    </div>
  );
};

export default Notesview;