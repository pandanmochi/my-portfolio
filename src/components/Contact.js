import React from 'react'

export default function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&')
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Thank you for your message!'))
      .catch((error) => alert(error))
  }

  return (
    <section
      id="contact"
      className="py-20 bg-pastel-rose text-dark-blue font-bold px-10 md:px-20 xl:px-96"
    >
      <h1 className="text-5xl text-center">Contact me!</h1>
      <form
        netlify
        name="contact"
        onSubmit={handleSubmit}
        className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <div className="relative mb-4">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-pastel-rose rounded border-4 border-dark-blue py-1 px-3"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-pastel-rose rounded border-4 border-dark-blue py-1 px-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-pastel-rose rounded border-4 h-32 py-1 px-3 resize-none"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="border-4 w-auto md:w-1/5 py-2 px-6 rounded text-lg font-bold border-dark-blue hover:bg-dark-blue hover:text-white transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
