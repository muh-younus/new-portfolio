import React from 'react'
import HeroImage from "../image/profile3.png"


function HeroSection() {
  return (
    <>
    <div className="bg-black text-white text-center py-16">

        <img
        src={HeroImage} alt="profile"
         className="mx-auto mb-8 w-80 h-80 rounded-full object-cover transform
          transition-transform duration-300 hover:scale-110"
        />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span>Muhammad Younus</span> 
             Frontend Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300 px-4">
            I create responsive and engaging web applications.
        </p>
        <div>
            <button>Contact With Me</button>
            <button>Download CV</button>
        </div>


    </div>
    </>
  )
}

export default HeroSection
