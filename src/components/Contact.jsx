
import React from 'react'

export default function Contact() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-16 bg-black text-white font-sans overflow-hidden">
      {/* Top Black Gradient Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      {/* Bottom Black Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      {/* Background Effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200 via-green-300 to-transparent opacity-60 blur-2xl rounded-full z-0" />
      <div className="pointer-events-none absolute bottom-0 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-tl from-green-300 via-blue-200 to-transparent opacity-50 blur-3xl rounded-full z-0" />

      <h1 className="font-nasalizationg text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight md:leading-snug font-extrabold tracking-[3px] sm:tracking-[5px] uppercase z-20">
        CONNECT WITH US
      </h1>

      <section className="w-full max-w-2xl mx-auto space-y-6 sm:space-y-8 z-20">
        <p className="text-center text-gray-400 text-sm px-4">
          You can also send us a message directly through the form below.
          <br />
          Our team will respond to your inquiry as soon as possible.
        </p>

        <form className="flex flex-col space-y-4 sm:space-y-5">
          <input
            type="text"
            placeholder="*Name"
            required
            className="bg-transparent border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-400 placeholder-gray-500 text-base"
          />
          <input
            type="email"
            placeholder="*Email"
            required
            className="bg-transparent border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-400 placeholder-gray-500 text-base"
          />
          <input
            type="tel"
            placeholder="*Phone no"
            required
            className="bg-transparent border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-400 placeholder-gray-500 text-base"
          />
          <input
            type="text"
            placeholder="*Company"
            required
            className="bg-transparent border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-400 placeholder-gray-500 text-base"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-transparent border border-gray-600 rounded-md py-3 px-4 focus:outline-none focus:border-teal-400 placeholder-gray-500 resize-none text-base"
          />

          <button
            type="submit"
            className="self-center border border-white hover:bg-white/30 rounded-tr-3xl rounded-bl-3xl py-3 px-12 sm:px-16 text-base font-medium transition-colors"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  )
}
