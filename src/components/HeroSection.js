import React from 'react'
import HeroImage from "../image/white.jpg"


function HeroSection() {
  return (
    <>
    <div className="bg-black text-white text-center py-8">

        <img
        src={HeroImage} alt="profile"
         className="mx-auto mb-8 w-60 h-60 rounded-full object-cover transform
          transition-transform duration-300 hover:scale-110"
        />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Muhammad Younus, </span> 
             Frontend Developer 
        </h1>
        <p className="mt-4 text-lg text-gray-300 px-4">
            I create responsive and engaging web applications.
        </p>
        <div className="mt-4 space-x-4">
            <button
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-3 py-2 transform transition-transform duration-300
             hover:scale-105"
            >
              Contact With Me
              </button>
            <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full px-3 py-2 transform transition-transform duration-300
             hover:scale-105"
            >
              Download CV</button>
        </div>


    </div>
    </>
  )
}

export default HeroSection
