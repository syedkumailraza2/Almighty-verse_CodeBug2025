import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/events/');
        setEvents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch events. Please try again later.');
        setLoading(false);
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);


  if (loading) {
    return (
      <div className="bg-black min-h-screen p-6 text-white">
        <h1 className="text-2xl font-bold mb-8">WebRoom</h1>
        <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen p-6 text-white">
        <h1 className="text-2xl font-bold mb-8">WebRoom</h1>
        <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      </div>
    );
  }


  

  return (
    <div className="bg-black min-h-screen p-6 text-white">
      
      <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events && events.length > 0 ? (
          events.map((event) => {
            
            return (
              <div key={event._id} className="bg-white text-black rounded-lg p-4 relative">
                <div className="flex items-start">
                  <div className="mr-4">
                    <img 
                      src={event.poster || "/api/placeholder/80/80"} 
                      alt={event.name}
                      className="w-16 h-16 rounded-md"
                    />
                  </div>
                  
                  <div>
                    <h1>{event.date}</h1>
                    <h3 className="text-xl font-bold mb-1">{event.name}</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      {event.description || "CodeBug is a thrilling hackathon hosted by Sahyog College of IT and Management, where participants compete to innovate, develop, and enhance service-based websites."}
                    </p>
                    
                    <div className="flex gap-2">
                      <a 
                        href={event.register} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-full"
                      >
                        Register Now
                      </a>
                      
                      <a 
                        href={event.brochure} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
                      >
                        Download Brochure
                      </a>
                    </div>
                  </div>
                
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-lg">No upcoming events found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;