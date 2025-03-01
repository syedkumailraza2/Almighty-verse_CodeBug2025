"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom" // Import useLocation

function Homenavbar() {
  const location = useLocation(); // Get the current location
  const [active, setActive] = useState("Home"); // Default active state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollContainerRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Collab & Work", path: "/collab" },
    { name: "Ai Mentor", path: "/ai-mentor" },
    { name: "Student Desk", path: "/student-desk" },
    { name: "Search Partner", path: "/search-partner" },
    { name: "Request Box", path: "/request-box" },
    { name: "Event Calendar", path: "/event-calendar" },
  ];

  // Update active state based on the current path
  useEffect(() => {
    const currentPath = location.pathname; // Get the current path
    const activeItem = menuItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActive(activeItem.name); // Set active state to the current route's name
    }
  }, [location.pathname]); // Re-run when the path changes

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setShowLeftArrow(container.scrollLeft > 20);
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 20);
  };

  // Scroll menu left or right
  const scrollMenu = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const newScrollLeft =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  // Initialize and update scroll indicators
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);

    // Check on resize too
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop version */}
      <div className="hidden lg:block bg-black pt-6 pb-4">
        <div className="flex justify-between items-center px-12">
          <h1 className="text-2xl font-medium text-white">WebRoom</h1>

          <div className="relative flex items-center">
            {showLeftArrow && (
              <button
                onClick={() => scrollMenu("left")}
                className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 rounded-full text-white -ml-4"
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="h-[42px] px-2 py-1.5 bg-white rounded-[33px] flex items-center gap-4 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {menuItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`py-1 px-4 text-lg font-medium font-['Poppins'] rounded-full whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                    active === item.name ? "text-[#88EB63] bg-black" : "text-black hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scrollMenu("right")}
                className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 rounded-full text-white -mr-4"
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tablet version */}
      <div className="hidden md:block lg:hidden bg-black pt-6 pb-4">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-2xl font-medium text-white">WebRoom</h1>

          <div className="relative flex items-center">
            {showLeftArrow && (
              <button
                onClick={() => scrollMenu("left")}
                className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 rounded-full text-white -ml-4"
                aria-label="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="h-[40px] px-2 py-1.5 bg-white rounded-[33px] flex items-center gap-3 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {menuItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`py-1 px-3 text-base font-medium font-['Poppins'] rounded-full whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                    active === item.name ? "text-[#88EB63] bg-black" : "text-black hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scrollMenu("right")}
                className="absolute right-0 z-10 flex items-center justify-center w-8 h-8 bg-black bg-opacity-50 rounded-full text-white -mr-4"
                aria-label="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden bg-black">
        <div className="flex justify-between items-center px-4 pt-6 pb-4">
          <h1 className="text-xl font-medium text-white">WebRoom</h1>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-1 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="bg-black px-4 pb-4 absolute z-50 w-full">
            <div className="bg-white rounded-[15px] overflow-hidden shadow-lg">
              {menuItems.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-3 px-4 text-base font-medium font-['Poppins'] border-b border-gray-100 last:border-b-0 ${
                    active === item.name ? "text-[#88EB63] bg-black" : "text-black hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

export default Homenavbar;