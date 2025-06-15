// import React from "react";
// import { MdArrowRightAlt } from "react-icons/md";
// export const Button = ({ btnText }) => {
//   return (
//     <button className="flex items-center justify-between  w-50 px-6 py-1 pr-1 cursor-pointer border-2 border-white bg-transparent text-white rounded-full rounded-tl-none  ">
//       <span>{btnText}</span>
//       <span className="flex items-center justify-center w-12 h-12 bg-white text-green-900 rounded-full ">
//         <MdArrowRightAlt size={36} />
//       </span>
//     </button>
//   );
// };

// import React from "react";
// import { MdArrowRightAlt } from "react-icons/md";

// export const Button = ({ btnText }) => {
//   return (
//     <button
//       className="flex items-center  justify-between w-50 px-8 py-1 pr-1 cursor-pointer border-2 border-white bg-transparent text-white rounded-full rounded-tl-none
//       transition-all duration-200 f hover:  group"
//     >
//       <span >{btnText}</span>
//       <span className="flex items-center justify-center w-10 h-10 bg-white text-green-900 rounded-full transition-transform duration-200 group-hover:scale-110">
//         <MdArrowRightAlt size={32} />
//       </span>
//     </button>
//   );
// };


// import React from "react";
// import { MdArrowRightAlt } from "react-icons/md";
// import './Button.css'; 

// export const Button = ({ btnText }) => {
//   return (
//     <button className="animated-btn group">
//       <span className="relative z-10">{btnText}</span>
//       <span className="flex items-center justify-center w-10 h-10 bg-white text-green-900 rounded-full transition-transform duration-200 group-hover:scale-110 z-10">
//         <MdArrowRightAlt size={32} />
//       </span>
//     </button>
//   );
// };


import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

export const Button = ({ btnText }) => {
  return (
    <button
      className="flex items-center justify-between w-52 px-8 py-1 pr-1 cursor-pointer border-2 border-white bg-transparent text-white rounded-full rounded-tl-none
      transition-all duration-300 ease-in-out transform hover:bg-white hover:text-green-900 hover:shadow-lg hover:scale-105 group"
    >
      <span>{btnText}</span>
      <span className="flex items-center justify-center w-10 h-10 bg-white text-green-900  hover:scale-105 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110">
        <MdArrowRightAlt size={32} />
      </span>
    </button>
  );
};
