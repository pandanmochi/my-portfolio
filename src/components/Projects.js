import React from 'react'
import { projects } from '../data'

export default function Projects() {
  return (
    <div>
      <section id="projects" className="bg-dark-blue font-bold">
        <div className="container px-10 py-20 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-10">
            <h1 className="text-5xl mb-6 text-center text-white">Projects</h1>
            <p className="mx-auto text-2xl text-golden-yellow">
              Some of my free time projects
            </p>
            <p className="lg:hidden mt-5 mx-auto text-white">
              Hold to get information; Tap to visit the link
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded"
                    src={project.image}
                  />
                  <div className="rounded p-10 relative z-10 w-full bg-pastel-rose opacity-0 hover:opacity-100 transition duration-700">
                    <p className="text-white text-2xl mb-3">{project.title}</p>
                    <p className="text-dark-blue">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
