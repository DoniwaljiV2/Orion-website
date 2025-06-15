// import React from "react";

// import { BiLogoGitlab } from "react-icons/bi";
// import { Button } from "./Button/Button";
// export default function Navbar() {
//   return (
//     <nav className="flex justify-between text-center items-center p-6 bg-black z-10 ">
//       <h1 className="text-xl font-bold mr-25">
//         <BiLogoGitlab size={50}/>
//       </h1>
//        <ul className="hidden md:flex gap-24 font-bold cursor-pointer">
//         {["Home", "About", "Services", "Contact"].map((item) => (
//     <li
//       key={item}
//       className="relative group transition transform hover:scale-105 hover:text-green-500"
//     >
//       <span>{item}</span>
//       <span
//         className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"
//       />
//     </li>}

//      <Button btnText='Start A Project'/>
//     </nav>
//   );
// }


// import React from "react";
// import { BiLogoGitlab } from "react-icons/bi";
// import { Button } from "./Button/Button";

// export default function Navbar() {
//   return (
   
//   ))}
// </ul>

//   );
// }




// import React from "react";
// import { BiLogoGitlab } from "react-icons/bi";
// import { Button } from "./Button/Button";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-6 bg-black z-10 text-white">
//       <h1 className="text-xl font-bold">
//         <BiLogoGitlab size={50} />
//       </h1>

//       <ul className="hidden md:flex gap-24 font-bold cursor-pointer">
//         {["Home", "About", "Services", "Contact"].map((item) => (
//           <li
//             key={item}
//             className="relative group transition transform hover:scale-105 hover:text-green-500"
//           >
//             <span>{item}</span>
//             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
//           </li>
//         ))}
//       </ul>

//       <Button btnText="Start A Project" />
//     </nav>
//   );
// }



// import React from "react";
// import { BiLogoGitlab } from "react-icons/bi";
// import { Button } from "./Button/Button";

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center p-6 z-20 text-white relative">
//       <h1 className="text-xl font-bold">
//         <BiLogoGitlab size={50} />
//       </h1>

//       <ul className="hidden md:flex gap-24 font-bold cursor-pointer">
//         {["Home", "About", "Services", "Contact"].map((item) => (
//           <li
//             key={item}
//             className="relative group transition transform hover:scale-105 hover:text-green-500"
//           >
//             <span>{item}</span>
//             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
//           </li>
//         ))}
//       </ul>

//       <Button btnText="Start A Project" />
//     </nav>
//   );
// }



// import React, { useState } from "react";
// import { BiLogoGitlab } from "react-icons/bi";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Button } from "./Button/Button";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex justify-between items-center p-4 sm:p-6 z-20 text-white relative">
//       <h1 className="text-xl font-bold">
//         <BiLogoGitlab size={40} className="sm:w-[50px] sm:h-[50px]" />
//       </h1>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-8 lg:gap-24 font-bold cursor-pointer">
//         {["Home", "About", "Services", "Contact"].map((item) => (
//           <li
//             key={item}
//             className="relative group transition transform hover:scale-105 hover:text-green-500"
//           >
//             <span>{item}</span>
//             <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden text-white z-30"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-95 z-20 md:hidden">
//           <div className="flex flex-col items-center justify-center h-full space-y-8">
//             {["Home", "About", "Services", "Contact"].map((item) => (
//               <li
//                 key={item}
//                 className="list-none text-2xl font-bold text-white hover:text-green-500 transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </li>
//             ))}
//             <div className="mt-8">
//               <Button btnText="Start A Project" />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Desktop Button */}
//       <div className="hidden md:block">
//         <Button btnText="Start A Project" />
//       </div>
//     </nav>
//   );
// }


import React, { useState } from "react";
import { BiLogoGitlab } from "react-icons/bi";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { Button } from "./Button/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-6 pt-4 z-50 text-white">
        <h1 className="text-xl font-bold">
          <BiLogoGitlab size={40} className="sm:w-[50px] sm:h-[50px]" />
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 lg:gap-24 font-bold cursor-pointer">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="relative group transition transform hover:scale-105 hover:text-green-500"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button btnText="Start A Project" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black z-50 rounded-full border-white bg-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li
              key={item}
              className="list-none text-2xl font-bold text-white hover:text-green-500 transition-colors"
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
