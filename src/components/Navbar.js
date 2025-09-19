import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-black text-white py-4 px-9 md:px-16 lg:px-20 shadow-lg">
        <div className=" container flex justify-center md:justify-between items-center">
          <div className="text-2xl font-bold hidden md:inline">
            Muhammad Younus
          </div>
          <div>
            <ul className="flex justify-center items-center space-x-6 ">
              <li>
                <a
                  className="hover:text-gray-400  relative cursor-pointer  hover:text-blue-400
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-400 
             after:transition-all after:duration-300 
             hover:after:w-full"
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                 className="hover:text-gray-400  relative cursor-pointer  hover:text-blue-400
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-400 
             after:transition-all after:duration-300 
             hover:after:w-full"
                  href="#about"
                  >
                  About Me
                </a>
              </li>
              <li>
                <a
                 className="hover:text-gray-400 hover:text-gray-400  relative cursor-pointer  hover:text-blue-400
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-400 
             after:transition-all after:duration-300 
             hover:after:w-full"
                  href="#service"
                  >
                  Service
                </a>
              </li>

              <li>
                <a
                 className="hover:text-gray-400 hover:text-gray-400  relative cursor-pointer  hover:text-blue-400
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-400 
             after:transition-all after:duration-300 
             hover:after:w-full"
                  href="#projects">
                  Projects
                </a>
              </li>

              <li>
                <a
                 className="hover:text-gray-400 hover:text-gray-400  relative cursor-pointer  hover:text-blue-400
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-blue-400 
             after:transition-all after:duration-300 
             hover:after:w-full"
                  href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <button
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-3 py-2 transform transition-transform duration-300
             hover:scale-105"
            >
                Connect Me
                </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
