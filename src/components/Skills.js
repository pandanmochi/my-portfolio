import React from 'react'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="bg-pastel-yellow">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-dark-rose">
            Skills &amp; Tools
          </h1>
        </div>
        <div className="flex flex-wrap md:mx-auto md:mb-2 mx-2">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill} className="p-4 md:w-1/4 w-full">
                <div className=" border-4 border-dark-blue rounded flex p-5 h-full items-center">
                  <span className="text-auto font-bold text-dark-rose mr-3">
                    <Icon />
                  </span>
                  <span className="text-auto font-bold text-dark-blue">
                    {skill.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
