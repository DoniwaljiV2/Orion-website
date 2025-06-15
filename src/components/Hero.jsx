import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";
import { Button } from "./Button/Button";
import { BiLogoGitlab } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center sm:items-start items-center text-white px-4 sm:pl-20 pt-20 sm:pt-40">
      <div className="max-w-xl w-full">
        <h1 className="text-5xl sm:text-9xl font-bold tracking-[0.3em] font-nasalizationg text-center sm:text-left">
          ORION
        </h1>

        <p className="text-base sm:text-2xl font-medium text-center sm:text-left mt-2">
          Where Innovation Knows No Bounds
        </p>

        <div className="hidden sm:flex mt-6 items-center gap-8">
          <Button btnText="Discover" />
          <span className="h-9 w-px bg-white mx-2"></span>
          <button className="flex items-center gap-2 text-white font-semibold text-lg">
            <h1 className="text-xl font-bold rounded-full border-4 border-gray-500 p-1 bg-white">
              <BiLogoGitlab size={28} className="text-green-600" />
            </h1>
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile: Start A Project */}
        <div className=" sm:hidden mt-6 flex justify-center">
          <Button btnText="Start A Project" />
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 flex gap-6 text-xl sm:left-20 left-1/2 sm:translate-x-0 -translate-x-1/2"
      >
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

      <div className="hidden sm:block absolute left-1/2 bottom-6 -translate-x-1/2 z-20">
        <span className="inline-flex items-center justify-center w-10 h-14 border-2 border-white rounded-full">
          <LuMouse className="text-white text-2xl" />
        </span>
      </div>
    </div>
  );
}
