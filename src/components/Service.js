import React from 'react'

const data = [
{

    id : 1,
    title : "Web Design",
    description : "I create responsive and visually appealing web designs that enhance user experience and drive engagement."
},
{

    id : 2, 
    title : "Frontend Development",
    description : "I specialize in crafting dynamic and feature-rich web applications that deliver exceptional user experiences."
},
{

    id : 3,
    title : "Backend Development",
    description : "I develop efficient and scalable Python applications tailored to meet your specific needs."
},

{
    id : 4,
    title : "API Development",
    description : "I design and implement robust RESTful APIs that facilitate seamless communication between different software systems."
},
{

    id : 5,
    title : "Database Management",
    description : "I offer comprehensive database management services, including design, optimization, and maintenance to ensure data integrity and performance."
},
{
    id : 6,
    title : "Software Testing",
    description : "I provide comprehensive software testing services, ensuring the quality and reliability of your applications."
},  




]
function Service() {
  return (
    <>
    <div className="bg-black text-white py-20" id="service">
        <div className="container mx-auto px-16 md:px-16 lg:px-24">
          <h1 className="text-4xl font-bold mb-12 text-center">Service</h1>
          <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {data.map(services => (

                <div key={services.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
                >

                    <div
                    className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"
                    >
                        {services.id}

                    </div>
                    <h3
                    className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-600 to-blue-400"
                    >
                        {services.title}
                    </h3>
                    <p
                    className="mt-2 text-gray-300"
                    >
                        {services.description}
                    </p>
                    <a
                    className="mt-4 inline-block text-green-400 hover:text-blue-500" href="#"
                    >Read More</a>

                </div>
            ))}

          </div>
          </div>
          </div>
    </>
  )
}

export default Service
