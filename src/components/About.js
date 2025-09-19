import React from "react";
import Image from "../image/white.jpg";

function About() {
  return (
    <>
      <div
      className="bg-black text-white py-20" id="about"
      >
        <div
        className="container mx-auto px-16 md:px-16 lg:px-24"
        >
        <h1
        className="text-4xl font-bold mb-12 text-center"
        >About Me</h1>
        <div
        className="flex flex-col items-center md:flex-row md:space-x-12"
        >
          <img src={Image} alt="About "
          className="w-72 h-80 rounded object-cover mb-8 md:mb-0 transform  transition-transform duration-300 hover:scale-105"
          
          />
          <p>
            Hi, I’m Muhammad Younus, a passionate BS Software Engineering
            student with hands-on experience in modern web technologies. I
            recently completed a two-month internship at HBL Microfinance Bank
            (Head Office, Islamabad), where I gained practical exposure to
            professional development environments. I have strong skills in
            React, Tailwind CSS, PrimeReact, MySQL, and Spring Boot, allowing me
            to build dynamic, responsive, and scalable applications. In 2024, I
            also completed a two-month NAVTTC training at Corvit Academy, which
            further strengthened my technical foundation and teamwork abilities.
            I am eager to contribute my skills to real-world projects,
            continuously learn new technologies, and grow as a full-stack
            developer.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default About;
