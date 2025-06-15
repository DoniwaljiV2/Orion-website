import React, { useEffect, useState } from "react";
import { BiLogoGitlab } from "react-icons/bi";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { Button } from "./Button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center  px-4 sm:px-6 pt-4 z-50 text-white">
        <h1 className="text-xl font-bold ">
          <BiLogoGitlab size={40} className="sm:w-[50px] sm:h-[50px]" />
        </h1>
        <ul className="hidden md:flex gap-8 lg:gap-24 font-bold cursor-pointer">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="relative group transition transform hover:scale-105 hover:text-green-600"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button btnText="Start A Project" />
        </div>
        <button
          className="md:hidden text-black z-50 rounded-full border-white bg-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden ">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              
              className="list-none text-2xl font-bold text-white hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
          <Button btnText="Start A Project" />
        </div>
      )}
    </>
  );
}
