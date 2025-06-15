
import React from 'react'
import { Button } from './Button/Button'

export const AboutUs = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-16 bg-black overflow-hidden">
      {/* Top Black Gradient Overlay - Lowered and softer */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-20 sm:h-24 bg-gradient-to-b from-black via-black/60 to-transparent z-10" />

      {/* Bottom Black Gradient Overlay - Raised and softer */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 sm:h-24 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      {/* Background Effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-200 via-green-300 to-transparent opacity-50 blur-2xl rounded-full z-0" />
      <div className="pointer-events-none absolute bottom-0 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-tl from-green-300 via-blue-200 to-transparent opacity-40 blur-3xl rounded-full z-0" />

      <h2 className="font-bold text-2xl sm:text-3xl font-nasalizationg uppercase z-20 text-center">About Us</h2>
      <h1 className="font-nasalizationg text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight md:leading-snug font-extrabold tracking-[3px] sm:tracking-[5px] uppercase z-20 px-4">
        WE ARE MORE THAN JUST CODE
      </h1>
      <div className="z-20">
        <Button btnText="About Us" />
      </div>
    </div>
  )
}
