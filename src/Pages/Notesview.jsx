import React, { useState } from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
      <div className="flex items-start gap-4 mb-3">
        <div className="w-16 h-16 flex-shrink-0 bg-gray-900 rounded-md flex items-center justify-center">
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14.82C13.5188 14.82 14.75 13.5888 14.75 12.07C14.75 10.5512 13.5188 9.32 12 9.32C10.4812 9.32 9.25 10.5512 9.25 12.07C9.25 13.5888 10.4812 14.82 12 14.82Z" fill="#61DAFB" />
            <path d="M19.359 10.1469C19.0814 10.0369 18.7987 9.9344 18.5111 9.8394C18.5451 9.6869 18.5764 9.5344 18.6051 9.3819C19.0383 7.1044 18.5873 5.32812 17.3203 4.58687C16.0991 3.87062 14.3211 4.35062 12.5 5.71937C12.3317 5.84062 12.1645 5.96937 11.9998 6.10437C11.8867 6.00062 11.7725 5.89812 11.657 5.79812C9.73827 4.33312 7.85702 3.81687 6.59452 4.56437C5.38077 5.28312 4.94427 6.95812 5.33427 9.11812C5.37077 9.33937 5.41377 9.55687 5.46302 9.77062C5.12252 9.88062 4.79327 9.99937 4.47902 10.1269C2.5498 10.9031 1.25 12.0344 1.25 13.2081C1.25 14.4219 2.63405 15.6356 4.6498 16.4281C4.87855 16.5194 5.11355 16.6056 5.35305 16.6869C5.2998 16.9169 5.25155 17.1431 5.20855 17.3656C4.8373 19.4831 5.29505 21.1231 6.5033 21.8356C7.74705 22.5719 9.6158 22.0769 11.468 20.6794C11.6093 20.5756 11.7495 20.4669 11.888 20.3544C12.073 20.5081 12.2615 20.6556 12.453 20.7944C14.2443 22.1206 15.9898 22.5794 17.202 21.8619C18.4558 21.1231 18.9408 19.3569 18.5378 17.1356C18.5058 16.9644 18.4688 16.7969 18.4268 16.6306C18.5958 16.5719 18.7618 16.5119 18.9233 16.4494C20.9983 15.6506 22.42 14.4506 22.42 13.2256C22.42 12.0494 21.0858 10.9131 19.359 10.1469ZM12.8125 6.63313C14.3238 5.48188 15.6628 5.12687 16.3888 5.54937C17.1708 6.00187 17.5095 7.38938 17.1358 9.28937C17.1095 9.42437 17.0818 9.55687 17.0503 9.68937C16.2566 9.48937 15.4351 9.33938 14.5906 9.24188C14.0876 8.51063 13.5456 7.81688 12.9698 7.16938C12.9173 7.11063 12.8633 7.05188 12.8093 6.99438C12.8103 6.87438 12.8125 6.75438 12.8125 6.63313ZM8.04428 17.5844C7.63978 17.7894 7.12453 17.8844 6.51253 17.7594C5.86228 17.6269 5.33803 17.0869 5.02328 16.2981C4.71728 15.5306 4.66303 14.5506 4.91428 13.4744C4.96028 13.2706 5.01178 13.0706 5.06878 12.8744C5.86228 13.0619 6.67553 13.1994 7.50803 13.2856C8.01803 14.0194 8.56978 14.7256 9.15428 15.3919C9.26628 15.5069 9.37953 15.6194 9.49403 15.7294C9.01553 16.3869 8.52378 17.0031 8.04428 17.5844ZM11.5983 18.7144C11.0413 19.2894 10.4395 19.8156 9.7963 20.2894C9.12905 20.7844 8.46055 21.0044 7.91105 21.0044C7.7368 21.0044 7.5743 20.9744 7.4263 20.9144C6.6443 20.4619 6.2863 19.0831 6.6323 17.2256C6.6868 16.9606 6.7518 16.7019 6.8248 16.4481C7.6413 16.6356 8.4975 16.7719 9.3835 16.8569C9.8918 17.5931 10.439 18.2906 11.0173 18.9344C11.075 18.9956 11.1338 19.0569 11.193 19.1156C11.328 18.9819 11.463 18.8494 11.5983 18.7144ZM16.6565 17.1744C16.3328 18.0444 15.8355 18.6019 15.2528 18.7269C14.6355 18.8594 13.766 18.5519 12.8705 17.8594C12.7223 17.7444 12.574 17.6269 12.4258 17.5044C13.0095 16.8519 13.5635 16.1444 14.088 15.3894C14.9763 15.2994 15.8233 15.1569 16.6223 14.9569C16.6628 15.1056 16.6993 15.2519 16.7325 15.3956C16.9555 16.0744 16.9078 16.6744 16.6565 17.1744ZM17.464 13.4744C17.2668 13.5194 17.0653 13.5619 16.8615 13.6019C16.6745 13.0556 16.4605 12.5025 16.2205 11.9456C16.4718 11.3944 16.6943 10.8431 16.8883 10.2944C17.116 10.3381 17.338 10.3869 17.5528 10.4394C18.4578 10.7319 19.8623 11.2444 20.7165 11.8219C20.7773 11.8656 20.8343 11.9106 20.8868 11.9544C21.1553 12.1719 21.42 12.4544 21.42 13.2256C21.42 14.0269 20.35 14.9219 18.6575 15.5831C18.5085 15.6406 18.3558 15.6956 18.1995 15.7481C17.9628 14.9956 17.6888 14.2344 17.3775 13.4744H17.464ZM10.7578 13.2256C10.7578 12.3494 11.1218 11.5306 11.6955 10.9569C12.2693 10.3831 13.088 10.0191 13.9643 10.0191C14.8405 10.0191 15.6593 10.3831 16.233 10.9569C16.8068 11.5306 17.1708 12.3494 17.1708 13.2256C17.1708 14.1019 16.8068 14.9206 16.233 15.4944C15.6593 16.0681 14.8405 16.4322 13.9643 16.4322C13.088 16.4322 12.2693 16.0681 11.6955 15.4944C11.1218 14.9206 10.7578 14.1019 10.7578 13.2256Z" fill="#61DAFB" />
          </svg>
        </div>
        <div className="flex-grow">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Author:</span> {course.author}
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Course:</span> {course.course}
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Year:</span> {course.year}
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Type:</span> {course.type}
          </div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm transition-colors">
          Delete
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p className="text-gray-700 mb-4 flex-grow">{course.description}</p>

      <button className="bg-black text-green-400 px-4 py-2 rounded hover:bg-gray-800 transition-colors w-full sm:w-auto self-start">
        Download Zip
      </button>
    </div>
  );
};

const NotesView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  // Sample course data
  const courses = [
    {
      id: 1,
      author: 'Abhishek khatale',
      course: 'Bca',
      year: '3rd year',
      type: 'Video',
      title: 'React.js Notes',
      description: 'React.js is a JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It is used to create fast, interactive, and scalable web applications by efficiently updating and rendering components when data changes.'
    },
    {
      id: 2,
      author: 'Abhishek khatale',
      course: 'Bca',
      year: '3rd year',
      type: 'Video',
      title: 'React.js Notes',
      description: 'React.js is a JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It is used to create fast, interactive, and scalable web applications by efficiently updating and rendering components when data changes.'
    },
    {
      id: 3,
      author: 'Abhishek khatale',
      course: 'Bca',
      year: '3rd year',
      type: 'Video',
      title: 'React.js Notes',
      description: 'React.js is a JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It is used to create fast, interactive, and scalable web applications by efficiently updating and rendering components when data changes.'
    },
    {
      id: 4,
      author: 'Abhishek khatale',
      course: 'Bca',
      year: '3rd year',
      type: 'Video',
      title: 'React.js Notes',
      description: 'React.js is a JavaScript library for building user interfaces, developed and maintained by Meta (formerly Facebook). It is used to create fast, interactive, and scalable web applications by efficiently updating and rendering components when data changes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#000] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:flex-grow">
            <input
              type="text"
              placeholder="Search..."
              className="w-150 px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2  justify-center sm:justify-start">
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'Videos' ? 'bg-[#1e1e1e] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
              onClick={() => setSelectedFilter(selectedFilter === 'Videos' ? '' : 'Videos')}
            >
              Videos
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'Course' ? 'bg-[#1e1e1e] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
              onClick={() => setSelectedFilter(selectedFilter === 'Course' ? '' : 'Course')}
            >
              Course
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors ${selectedFilter === 'Year' ? 'bg-[#1e1e1e] text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
              onClick={() => setSelectedFilter(selectedFilter === 'Year' ? '' : 'Year')}
            >
              Year
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesView;