import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxArrowBottomRight } from "react-icons/rx";
import { BiLogoGitlab } from "react-icons/bi";
import { FaAngleUp, FaXTwitter } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full relative text-white px-4 sm:px-6 py-8 sm:py-12 bg-black overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <div className="pointer-events-none absolute top-10 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-200 via-green-600 to-transparent opacity-60 blur-2xl rounded-full z-0" />
      <div className="pointer-events-none absolute bottom-4 left-4 sm:left-16 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-green-600 via-blue-200 to-transparent opacity-50 blur-3xl rounded-full z-0" />

      <div className="relative max-w-screen-2xl mx-auto z-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          <button className="group flex flex-col items-center sm:items-start gap-3 sm:gap-4 p-4 sm:p-6 sm:w-1/3">
            <RxArrowBottomRight className="text-white text-3xl sm:text-4xl md:text-5xl transition-all duration-300 group-hover:text-green-600 group-hover:rotate-12" />
            <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-center sm:text-left transition-colors duration-300 group-hover:text-green-600">
              About
              <br />
              Aperion
            </span>
          </button>

          <div className="flex flex-col text-center items-center justify-center sm:w-1/3">
            <h1 className="text-xl font-bold mb-3 sm:mb-4">
              <BiLogoGitlab
                size={40}
                className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
              />
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extralight tracking-wide font-nasalizationg">
              APERION
            </h3>
          </div>

          <div className="flex justify-center sm:justify-end items-center space-x-4 sm:space-x-6 sm:w-1/3">
          
            <div className="flex space-x-4 sm:space-x-10">
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaFacebookF className="text-2xl sm:text-3xl cursor-pointer select-none" />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaInstagram className="text-2xl sm:text-3xl cursor-pointer select-none" />
              </a>
              <a
                href="https://www.x.com"
                aria-label="X-twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaXTwitter className="text-2xl sm:text-3xl cursor-pointer select-none" />
              </a>
            </div>
           
           
          </div>
        </div>

    
        <div className="mb-10 sm:mb-14 text-center px-4 sm:px-0">
          <span className="block mx-auto font-nasalizationg text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight md:leading-snug font-extrabold tracking-wide whitespace-nowrap">
            We are architects of
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base font-semibold text-white space-y-4 sm:space-y-0 sm:space-x-6 px-4 sm:px-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 sm:space-x-5 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:text-green-600"
            aria-label="Back to Top"
          >
            <FaAngleUp className="text-base sm:text-lg transition-transform duration-300 group-hover:rotate-180" />
            <span>Back To Top</span>
          </button>

          <p className="select-none text-center sm:text-left">
            Apeiron 2025. All rights reserved.
          </p>

          <div className="group flex items-center space-x-3 cursor-pointer select-none transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-white/5 px-4 py-2 rounded-xl">
            <span className="text-white group-hover:text-green-600 text-base sm:text-lg font-medium transition-colors duration-300">
              Follow
            </span>
            <FaShareAlt className="text-white group-hover:text-green-600 text-base sm:text-lg transition-all duration-300 group-hover:rotate-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
