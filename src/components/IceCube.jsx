import React from "react";


export default function GlassCubeHero() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center overflow-hidden text-white px-4">
      
      {/* Floating Transparent Cube - ABOVE text */}
     

      {/* Text BELOW the cube */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-center leading-tight z-20">
        WE ARE FORGING <br />
        THE FUTURE OF <br />
        TECHNOLOGY
      </h1>
    </div>
  );
}
