import React from 'react'
export default function Navbar() {
  return (
    <header className="bg-dark-blue md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col lg:flex-row">
        <div className="text-center text-4xl lg:text-5xl font-gravitas text-golden-yellow mb-4 lg:mb-0">
          TO UYEN NG.
        </div>
        <nav className="font-raleway text-xl lg:text-2xl text-white font-bold lg:mr-auto lg:ml-6 lg:py-1 lg:pl-20 flex flex-wrap justify-around">
          <a
            href="#about"
            className="lg:mr-8 hover:text-golden-yellow transition duration-700"
          >
            About
          </a>
          <a
            href="#skills"
            className="lg:mr-8 hover:text-golden-yellow transition duration-700"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="lg:mr-8 hover:text-golden-yellow transition duration-700"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="lg:mr-8 hover:text-golden-yellow transition duration-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
