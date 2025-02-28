import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Homenavbar() {
    const [active, setActive] = useState('Home');

    const menuItems = [
        { name: 'Home', path: '/home' },
        { name: 'Collab & Work', path: '/collab' },
        { name: 'Ai Mentor', path: '/ai-mentor' },
        { name: 'Student Desk', path: '/student-desk' },
        { name: 'Search Partner', path: '/search-partner' },
        { name: 'Request Box', path: '/request-box' },
        { name: 'Event Calendar', path: '/event-calendar' }
      ];
      

  return (
    <div className='flex justify-between px-12 bg-[#000]  pt-10'>
      <h1 className='text-2xl font-medium text-[#fff]'>WebRoom</h1>
      
      <div className="h-[42.12px] px-[8px] py-1.5 bg-white rounded-[33px] justify-start items-center gap-[21px] inline-flex overflow-hidden">
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`py-1 px-3 text-xl font-medium font-['Poppins'] rounded-full cursor-pointer ${active === item.name ? 'text-[#88EB63] bg-black' : 'text-black'}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Homenavbar