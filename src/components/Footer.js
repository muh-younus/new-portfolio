import React from 'react'

function Footer() {
  return (
   <footer className="bg-black text-white py-6">
   <div className="container mx-auto px-8 md:px-16 lg:px-24 ">

    <div className="flex justify-center align-center flex-row md:flex-row md:space-x-12">
        <div className="flex-1">    
             <h3 className="text-2xl font-bold mb-2">Muhammad Younus</h3>
     <p>Frontend Developer based in Pakistan,Specialized in React, Tailwind CSS, PrimeReact, MySQL, and Python</p>
    </div>
    <div className="flex-1">
        <form className="flex items-center justify-center">
            <input type="email" placeholder="Enter Email" className="w-full p-2 rounded-l-lg border border-gray-600
            focus:outline-none focus:border-green-400"/>
            <button type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-r-full px-3 py-2 transform transition-transform duration-300 hover:scale-105"
            >Subscribe</button>
        </form>
    </div>
    </div>

   </div>

   </footer>
  )
}

export default Footer
