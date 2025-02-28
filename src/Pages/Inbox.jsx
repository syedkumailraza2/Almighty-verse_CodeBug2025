import React from 'react'

function Inbox() {
    return (
        <div className='text-[#fff] bg-[#000000] px-12 py-10'>
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
                    className="w-full pl-10 pr-4 py-3 bg-black rounded-full focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
    
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900">
                    Course
                  </button>
                  <button className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900">
                    Year
                  </button>
                  <button className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900">
                    Skill
                  </button>
                  <button className="px-6 py-3 bg-black font-semibold rounded-full text-[#88EB63] hover:bg-gray-900">
                    Designation
                  </button>
                </div>
              </div>
    
              {/* User List */}
              <div className="space-y-4">
                {/* User 1 */}
                <div className="flex items-center justify-between rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <img src="profilepic.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-medium">Abhishek Khatale</h3>
                      <p className="text-gray-400 text-sm">1234567</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-black rounded-full text-[#88EB63] hover:bg-[#141414] font-semibold">
                      Visit Profile
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 font-semibold">
                      Delete
                    </button>
                    <button className="px-4 py-2 bg-[#88EB63] text-white rounded-full hover:bg-green-600 font-semibold">
                      Approve
                    </button>
                  </div>
                </div>
    
                {/* User 2 */}
                <div className="flex items-center justify-between rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <img src="profilepic.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h3 className="font-medium">Abhishek Khatale</h3>
                      <p className="text-gray-400 text-sm">1234567</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-black rounded-full text-[#88EB63] hover:bg-[#141414] font-semibold">
                      Visit Profile
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 font-semibold">
                      Delete
                    </button>
                    <button className="px-4 py-2 bg-[#88EB63] text-white rounded-full hover:bg-green-600 font-semibold">
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Inbox