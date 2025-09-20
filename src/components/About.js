import React from "react";
import Image from "../image/white.jpg";

function About() {
  return (
    <>
      <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-16 md:px-16 lg:px-24">
          <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
          <div className="flex flex-col items-center md:flex-row md:space-x-12">
            <img
              src={Image}
              alt="About "
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0 transform  transition-transform duration-300 hover:scale-105"
            />
            <div className="flex-1">
              <p>
               Hi, I’m Muhammad Younus, a BS Software Engineering student with hands-on experience in React, Tailwind CSS, PrimeReact, MySQL, and Python. I have completed internships and professional training that strengthened my technical foundation, and I’m eager to contribute to real-world projects as a full-stack developer.
              </p>

              <div className="space-y-4 mt-6">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    HTML & CSS
                  </label>
                  <div
                  className="grow bg-gray-800 rounded-full h-2.5 "
                  >

                    <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"
                    >

                    </div>

                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    React.js
                  </label>
                  <div
                  className="grow bg-gray-800 rounded-full h-2.5 "
                  >

                    <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform
                     transition-transform duration-300 hover:scale-105 w-6/12"
                    >

                    </div>

                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Tailwind CSS
                  </label>
                  <div
                  className="grow bg-gray-800 rounded-full h-2.5 "
                  >

                    <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform
                     transition-transform duration-300 hover:scale-105 w-8/12"
                    >

                    </div>

                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Python
                  </label>
                  <div
                  className="grow bg-gray-800 rounded-full h-2.5 "
                  >

                    <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform
                     transition-transform duration-300 hover:scale-105 w-4/12"
                    >

                    </div>

                  </div>
                </div>
              </div>
              <div
              className="flex flex-row justify-between"
              >

              <div
              
              >

                <h3
                className="text-2xl font-bold text-transparent mt-6 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 "
                >
                  4+
                </h3>
                <p>HTML&CSS Project</p>
              </div>
              <div>

                <h3
                className="text-2xl font-bold text-transparent mt-6 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 "
                >
                  3+
                </h3>
                <p>React.js</p>
              </div>
              <div>

                <h3
                className="text-2xl font-bold text-transparent mt-6 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 "
                >
                  1+
                </h3>
                <p>Python</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
