import React from 'react'
import Image from "../image/project.png"

const projects = [

    {
        id : 1,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: {Image},
    },
    {
        id : 2,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: {Image},
    },
    {
        id : 3,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: {Image},
    },
    {
        id : 4,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: {Image},
    },
    {
        id : 5,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: {Image},
    },
    {
        id : 6,
        title : "Amazon Clone",
        technology : "HTML&CSS",
        image: {Image},
    },
    
        
]

function Project() {
  return (
    <>
     <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-16 md:px-16 lg:px-24">
          <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
          <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
          {projects.map(project =>(

            <div>
            </div>
          ))}
          </div>
          </div>
          </div>
    </>
  )
}

export default Project
