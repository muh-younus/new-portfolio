import React from 'react'
import Image from "../image/project.png"

const projects = [

    {
        id : 1,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: Image,
    },
    {
        id : 2,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: Image,
    },
    {
        id : 3,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: Image,
    },
    {
        id : 4,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: Image,
    },
    {
        id : 5,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: Image,
    },
    {
        id : 6,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: Image,
    },
    
        
]

function Project() {
  return (
    <>
     <div className="bg-black text-white py-20" id="project">
        <div className="container mx-auto px-16 md:px-16 lg:px-24">
          <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
          <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
          {projects.map(project =>(

            <div
            className="bg-gray-800 p-6 roundded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
                <img
                className="w-full h-48 object-cover"
                src ={project.image} />
                <h3
                className="text-2xl font-bold mb-2"
                >
                    {project.title}
                </h3>
                <p
                className="text-gray-400 mb-4"
                >{project.technology} </p>
                <a
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
                href="#">Github</a>
            </div>
          ))}
          </div>
          </div>
          </div>
    </>
  )
}

export default Project
