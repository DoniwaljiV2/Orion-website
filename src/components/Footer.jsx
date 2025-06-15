// import React from "react";
// import { MdClose, MdShare } from "react-icons/md";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { RxArrowBottomRight } from "react-icons/rx";
// import { BiLogoGitlab } from "react-icons/bi";
// import { FaAngleUp } from "react-icons/fa6";
// import { FaShareAlt } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <footer className="w-full text-white px-6 py-8 sm:py-12 bg-transparent">
//       <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0 ">
//         {/* Left Section - About Aperion */}
//         <button className=" md:w-1/3 flex flex-col items-start gap-4 p-6">
//           <RxArrowBottomRight className="text-white text-3xl mb-2 " />
//           <span className="text-white text-lg font-semibold leading-tight ">
//             About
//             <br />
//             Aperion
//           </span>
//         </button>

//         {/* Center Section - Logo */}
//         <div className="flex flex-col text-center items-center justify-center md:w-1/3">
//           <h1 className="text-xl font-bold mb-4">
//             <BiLogoGitlab size={50} />
//           </h1>
//           <h2 className="text-2xl font-semibold tracking-wide">APERION</h2>
//         </div>

//         {/* Right Section - Social & Close */}
//         <div className="flex justify-end items-center space-x-6 md:w-1/3">
//           {/* Social Icons */}
//           <div className="flex space-x-6">
//             <a
//               href="https://www.facebook.com"
//               aria-label="Facebook"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
//             >
//               <FaFacebookF className="text-2xl select-none cursor-pointer" />
//             </a>
//             <a
//               href="https://www.instagram.com"
//               aria-label="Instagram"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
//             >
//               <FaInstagram className="text-2xl select-none cursor-pointer" />
//             </a>
//           </div>
//           {/* Close Icon */}
//           <button
//             aria-label="Close footer"
//             className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <MdClose className="text-3xl select-none cursor-pointer" />
//           </button>
//         </div>
//       </div>

//       {/* Large message text below - "We are architects..." */}
//       <div className="mt-12 text-center text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight md:leading-snug">
//         <span className="font-nasalizationg text-center text-white space-y-2 md:space-y-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-snug font-extrabold tracking-wide  ">
//           We are architects of
//         </span>
//       </div>

//       {/* Back to Top & Copyright */}
//       <div className="mt-14 flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-white  space-y-3 md:space-y-0 md:space-x-4">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="flex items-center space-x-5 cursor-pointer"
//           aria-label="Back to Top"
//         >
//           <FaAngleUp className="text-base" />

//           <span>Back To Top</span>
//         </button>

//         <p className="select-none">Apeiron 2025. All rights reserved.</p>

//         {/* Follow share on right side */}
//         <div className="flex items-center space-x-3 cursor-pointer  select-none">
//           <span className="">Follow</span>
//           <FaShareAlt className="text-base" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxArrowBottomRight } from "react-icons/rx";
import { BiLogoGitlab } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full relative text-white px-4 sm:px-6 py-8 sm:py-12 bg-black overflow-hidden">
      {/* Top Black Gradient Overlay */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
      {/* Bottom Black Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      {/* Background Gradient Effects */}
      <div className="pointer-events-none absolute top-10 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-200 via-green-300 to-transparent opacity-60 blur-2xl rounded-full z-0" />
      <div className="pointer-events-none absolute bottom-4 left-4 sm:left-16 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-green-300 via-blue-200 to-transparent opacity-50 blur-3xl rounded-full z-0" />

      <div className="relative max-w-screen-2xl mx-auto z-20">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Section - About Aperion */}
          <button className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 p-4 sm:p-6 sm:w-1/3">
            <RxArrowBottomRight className="text-white text-3xl sm:text-4xl md:text-5xl" />
            <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight text-center sm:text-left">
              About
              <br />
              Aperion
            </span>
          </button>

          {/* Center Section - Logo */}
          <div className="flex flex-col text-center items-center justify-center sm:w-1/3">
            <h1 className="text-xl font-bold mb-3 sm:mb-4">
              <BiLogoGitlab
                size={40}
                className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
              />
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide">
              APERION
            </h2>
          </div>

          {/* Right Section - Social & Close */}
          <div className="flex justify-center sm:justify-end items-center space-x-4 sm:space-x-6 sm:w-1/3">
            {/* Social Icons */}
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaFacebookF className="text-2xl sm:text-3xl cursor-pointer select-none" />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FaInstagram className="text-2xl sm:text-3xl cursor-pointer select-none" />
              </a>
            </div>
            {/* Close Icon */}
            <button
              aria-label="Close footer"
              className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MdClose className="text-3xl sm:text-4xl cursor-pointer select-none" />
            </button>
          </div>
        </div>

        {/* Large message text */}
        <div className="mb-10 sm:mb-14 text-center px-4 sm:px-0">
          <span className="block mx-auto font-nasalizationg text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight md:leading-snug font-extrabold tracking-wide whitespace-nowrap">
            We are architects of
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base font-semibold text-white space-y-4 sm:space-y-0 sm:space-x-6 px-4 sm:px-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 sm:space-x-5 cursor-pointer"
            aria-label="Back to Top"
          >
            <FaAngleUp className="text-base sm:text-lg" />
            <span>Back To Top</span>
          </button>

          <p className="select-none text-center sm:text-left">
            Apeiron 2025. All rights reserved.
          </p>

          <div className="flex items-center space-x-3 cursor-pointer select-none">
            <span>Follow</span>
            <FaShareAlt className="text-base sm:text-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
