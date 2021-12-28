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
              I&apos;m currently studying my fourth term of International Media
              and Computer Science at the University of Applied Sciences - HTW
              in Berlin.
            </p>
            <p>
              The study program offers a balanced combination of theoretical and
              practical knowledge; So far I had many insights into areas of
              Digital Computing, Web-, App- and Game Development.
            </p>
          </div>
          <div>
            <img className="w-2/5 mb-8 mx-auto" src="working.png" />
            <p className="text-center">Please free me from online lesson</p>
          </div>
        </article>
        <article className="lg:w-5/12 px-10 lg:px-0">
          <h2 className="text-4xl my-9 text-center lg:text-justify">Work</h2>
          <div className="mb-8 xl:h-60">
            <p className="mb-5">
              After learning the basics of Web Development in my first term, I
              decided to get a student job to gather more experience in my
              working field.
            </p>
            <p>
              Since September 2020, I have gained new insights into many new
              technologies such as Git, Docker and content management systems
              like Wordpress and Shopware. I also learned about the deployment
              process in development and additionally had the opportunity to
              practise my webtech knowledge.
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
