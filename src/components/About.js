import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-pastel-rose text-dark-blue font-bold lg:px-52"
    >
      <h1 className="text-5xl mb-10 text-center">About me</h1>
      <div className="lg:flex text-justify justify-between">
        <article className="lg:w-5/12 px-10 lg:px-0 pb-10 lg:pb-0">
          <h2 className="text-4xl my-9 text-center lg:text-justify">Student</h2>
          <div className="mb-8 xl:h-60">
            <p className="mb-5">
              I am studying International Media and Computer Science (M) at the
              University of Applied Sciences - HTW Berlin. I graduated from the
              same Bachelor's course in 2023.
            </p>
            <p>
              The study program offers a balanced combination of theoretical and
              practical knowledge, giving me insights into areas of Digital
              Computing, Web-, App- and Game Development as well as Machine
              Learning and Data Engineering.
            </p>
          </div>
          <div>
            <img className="w-2/5 mb-8 mx-auto" src="working.png" />
            <p className="text-center">I don't really like online lesson</p>
          </div>
        </article>
        <article className="lg:w-5/12 px-10 lg:px-0">
          <h2 className="text-4xl my-9 text-center lg:text-justify">Work</h2>
          <div className="mb-8 xl:h-60">
            <p className="mb-5">
              Since September 2020, I have gained new insights into technologies
              such as HTML/CSS and Javascript in combination with React and
              headless Content Management Systems (Sanity, Directus) during my
              time as an IT working student.
            </p>
            <p>
              During my internship at a Mobile Fintech company, I worked with
              React Native to help maintain the Design System of their mobile
              application. This included rewriting existing components or adding
              new ones, bugfixing as well as deployment and testing with the
              help of CI/CD.
            </p>
          </div>
          <div>
            <img className="w-2/5 mb-8 mx-auto" src="working_2.png" />
            <p className="text-center">Remote work is fine though</p>
          </div>
        </article>
      </div>
    </section>
  )
}
