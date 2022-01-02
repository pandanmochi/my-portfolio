import React from 'react'
import { AiOutlineLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

export default function Intro() {
  return (
    <section id="intro" className="lg:py-32 bg-dark-blue">
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between md:px-10 lg:px-52">
        <div className="pb-16 w-7/12">
          <div className="text-white">
            <h1 className="text-3xl lg:text-5xl font-bold my-10">
              Hello friend!
            </h1>
            <p className="text-2xl lg:text-3xl mb-6">
              I&apos;m <b>Uyen</b> (she/her), a <b>computer science student </b>
              based in <b>Berlin, Germany</b>. You can learn more about me on
              this page, thanks for stopping by!
            </p>
            <span className="flex text-5xl gap-4">
              <a target="_blank" href="mailto:to.un.thi@gmail.com">
                <AiOutlineMail />
              </a>
              <a target="_blank" href="https://github.com/pandanmochi">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/to-uyen-nguyen-0b6b30195/">
                <AiOutlineLinkedin />
              </a>
            </span>
          </div>
        </div>
        <div className="pb-16 lg:pb-0">
          <img className="w-3/4 mx-auto lg:w-auto" src="./me_cat.png" />
        </div>
      </div>
    </section>
  )
}
