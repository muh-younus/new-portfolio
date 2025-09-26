import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import {FaPhone} from "react-icons/fa"
import {FaMapMarkedAlt} from "react-icons/fa"

function Contact() {
  return (
     <>
          <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-16 md:px-16 lg:px-24">
              <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
              <div className="flex flex-col items-center md:flex-row md:space-x-12">
              
                <div className="flex-1">
                    <h3>Let's Talk</h3>
                    <p>I am available for work. Connect with me via phone: <strong>+92 313 1234567</strong> or email: <strong>G2d1p@example.com</strong></p>
                    <div className="mb-4 mt-6">

                        <FaEnvelope
                        className="inline-block text-green-400 mr-2"
                        > </FaEnvelope>
                        <a
                            href="mailto:G2d1p@example.com" className="hover:underline">
                                youremail@example.com

                            </a>

                    </div>
                 
                    <div className="mb-4">

                        <FaPhone
                        className="inline-block text-green-400 mr-2"
                        > </FaPhone>
                       
                              <span>+92123456</span> 

                          

                    </div>
                 
                    <div className="mb-4">

                        <FaMapMarkedAlt
                        className="inline-block text-green-400 mr-2"
                        > </FaMapMarkedAlt>
                        <span>Pakistan</span>

                    </div>
                 
    
                  
                 
                </div>

                <div className="w-full flex-1">
                  <form
                  className="space-y-4"
                  >
                    <div>
                      <label htmlfor="name" className="mb-2">Your Name</label>
                      <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" 
                      placehoder="Your Name"/>
                    </div>
                    <div>
                      <label htmlfor="name" className="mb-2">Email</label>
                      <input type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" 
                      placehoder="Enter Your Email"/>
                    </div>
                    <div>
                      <label htmlfor="message" className="mb-2">Message</label>
                      <textarea type="email" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" 
                      placehoder="" row="5"/>
                    </div>
                     <button
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-6 py-2 transform transition-transform duration-300
             hover:scale-105"
            >
              Send
              </button>


                  </form>

                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default Contact
