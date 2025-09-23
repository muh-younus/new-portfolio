import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import {FaPhone} from "react-icons/fa"
import {FaMapMarkedAlt} from "react-icons/fa"

function Contact() {
  return (
     <>
          <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-16 md:px-16 lg:px-24">
              <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
              <div className="flex flex-col items-center md:flex-row md:space-x-12">
              
                <div className="flex-1">
                    <h3>Let's Talk</h3>
                    <p>I am available for work. Connect with me via phone: <strong>+92 313 1234567</strong> or email: <strong>G2d1p@example.com</strong></p>
                    <div className="mb-4 mt-8">

                        <FaEnvelope
                        className="inline-block text-green-400 mr-2"
                        > </FaEnvelope>
                        <a
                            href="mailto:G2d1p@example.com" className="hover:underline">
                                youremail@example.com

                            </a>

                    </div>
                 
                    <div className="mb-4 mt-8">

                        <FaPhone
                        className="inline-block text-green-400 mr-2"
                        > </FaPhone>
                       
                              <span>+92123456</span> 

                          

                    </div>
                 
                    <div className="mb-4 mt-8">

                        <FaMapMarkedAlt
                        className="inline-block text-green-400 mr-2"
                        > </FaMapMarkedAlt>
                        <a
                            href="mailto:G2d1p@example.com" className="hover:underline">
                                youremail@example.com

                            </a>

                    </div>
                 
    
                  
                 
                </div>

                <div className="w-full flex-1">

                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default Contact
