

import React from 'react'
import { Button } from './Button/Button'

export const AboutUs = () => {
  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 py-16 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/background2.jpg')]"
      
    >

      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />

     
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />


      <h2 className="font-bold text-2xl sm:text-3xl font-nasalizationg uppercase z-20 text-center">About Us</h2>
      <h1 className="font-nasalizationg text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight md:leading-snug font-extrabold tracking-[3px] sm:tracking-[5px] uppercase z-20 px-4">
        WE ARE MORE THAN JUST CODE
      </h1>
      <div className="z-20 mt-4">
        <Button btnText="About Us" />
      </div>
    </div>
  )
}
