import React from "react";
import { Link } from "react-router-dom";

const Land = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full"
      style={{
        backgroundImage: "url('/Home (1).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex text-white justify-between px-12 pt-6 items-center">
        <h1 className="text-2xl ">WebRoom</h1>
        <div className="flex text-[#b1b1b1] space-x-6">
          <button>About Us</button>
          <button>Contact Us</button>
          <button>FAQ</button>
        </div>
        <div className="flex text-white space-x-2">
          <Link to="/register">
            <button className="px-4 py-auto text-s font-medium text-black bg-[#88EB63] h-7 rounded-full">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-auto text-s font-medium text-[#ffffff] border-2 border-[#88EB63] h-7 rounded-full">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-40 px-12 flex justify-between">
        <div className="space-y-40">
          <div>
            <h1 className="text-white text-5xl font-medium">25k+</h1>
            <h1 className="text-[#c5c5c5]">Daily Visits</h1>
          </div>
          <div>
            <h1 className="text-white text-5xl font-medium">2k+</h1>
            <h1 className="text-[#c5c5c5]">Registered College</h1>
          </div>
        </div>

        <div className="text-[#fff] flex flex-col justify-center items-center justify-between">
          <div className="w-[613px] text-center text-white text-base font-medium font-['Poppins']">
            WebRoom is a platform that allows you to build connections, share
            resources, and connect with your college mates.
          </div>
          <div className="w-[953px] text-center">
            <span className="text-[#88eb63] text-5xl font-medium font-['Poppins']">
              WebRoom{" "}
            </span>
            <span className="text-white text-5xl font-medium font-['Poppins']">
              Build Connection{" "}
            </span>
            <span className="text-[#88eb63] text-5xl font-medium font-['Poppins']">
              Effortlessly
            </span>
            <span className="text-white text-5xl font-medium font-['Poppins']">
              {" "}
              & Access Resources
            </span>
          </div>

          <div className="flex space-x-10">
            <Link to="/login">
              <div className="h-9 px-[3px] py-0.5 bg-[#88eb63] rounded-[39px] justify-start items-center gap-0.5 inline-flex overflow-hidden">
                <div className="w-[69px] text-center text-black text-base font-medium font-['Poppins']">
                  Login
                </div>
              </div>
            </Link>

            <Link to="/register">
              <div className="w-[118px] h-9 px-[3px] py-0.5 bg-white rounded-[39px] justify-start items-center inline-flex overflow-hidden">
                <div className="w-[81px] text-center text-black text-base font-medium font-['Poppins']">
                  Signup
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-40">
          <div>
            <h1 className="text-white text-5xl font-medium">20k+</h1>
            <h1 className="text-[#c5c5c5]">Registered Users</h1>
          </div>
          <div>
            <h1 className="text-white text-5xl font-medium">5k+</h1>
            <h1 className="text-[#c5c5c5]">Registered College</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
