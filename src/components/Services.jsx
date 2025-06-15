// import React from 'react'

// const services = [
//   {
//     title: 'Software Design and Customization',
//     desc: 'We build innovative digital experiences.',
//   },
//   {
//     title: 'Disaster Recovery/Infrastructure',
//     desc: 'Ensure continuous service availability.',
//   },
//   {
//     title: 'Software Copyright Consulting',
//     desc: 'Protect your innovation with IP services.',
//   },
//   {
//     title: 'Business Solutions & Education',
//     desc: 'Train and enable businesses via tech.',
//   }
// ]

// export default function Services() {
//   return (
//     <section className="py-16 px-6 bg-glass text-center">
//       <h3 className="text-4xl font-bold mb-10">OUR SERVICES</h3>
//       <div className="grid md:grid-cols-4 gap-6">
//         {services.map((s, idx) => (
//           <div key={idx} className="bg-white/10 p-6 rounded-lg border border-white/20">
//             <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
//             <p className="text-sm text-gray-300">{s.desc}</p>
//             <button className="mt-4 text-sm border border-white px-4 py-1 rounded-full">See More</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// import React from 'react';
// import { LiaTerminalSolid } from "react-icons/lia";
// import { SiGooglecloudstorage } from "react-icons/si";
// import { BsFileEarmarkLock } from "react-icons/bs";
// import { MdOutlineDisplaySettings } from "react-icons/md";
// const ServicesSection = () => {
//   const services = [
//     {
//       icon: LiaTerminalSolid,
//       title: "Software Design and Software Customization",
//       description: "Unlock the full potential of your business with Apexon's expert software design and customization offerings.",
//       buttonText: "See More"
//     },
//     {
//       icon: SiGooglecloudstorage,
//       title: "Software/Disaster Recovery/Infrastructure",
//       description: "Experience the power of the cloud with Apexon's comprehensive suite of Cloud Services.",
//       buttonText: "See More"
//     },
//     {
//       icon: BsFileEarmarkLock,
//       title: "Software Copyright Counseling",
//       description: "Protect your intellectual property with Apexon's expert software copyright counseling services.",
//       buttonText: "See More"
//     },
//     {
//       icon: MdOutlineDisplaySettings,
//       title: "AI Business Solutions & AI Integration Education",
//       description: "Harness the transformative power of Artificial Intelligence (AI) with Apexon's AI business solutions and education.",
//       buttonText: "See More"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white py-16 px-6 lg:px-12">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-emerald-900/20 pointer-events-none"></div>

//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-5 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px'
//         }}
//       ></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
//             OUR SERVICES
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
//                 style={{
//                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
//                 }}
//               >
//                 {/* Hover glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 {/* Card content */}
//                 <div className="relative z-10 h-full flex flex-col">
//                   {/* Icon */}
//                   <div className="mb-6">
//                     <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-400/50 transition-colors duration-300">
//                       <IconComponent
//                         size={24}
//                         className="text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-lg font-bold text-white mb-4 leading-tight min-h-[3.5rem]">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
//                     {service.description}
//                   </p>

//                   {/* Button */}
//                   <button className="group/btn inline-flex items-center justify-between w-full bg-transparent border border-gray-600/50 hover:border-emerald-500/50 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-emerald-500/5">
//                     <span className="text-sm">{service.buttonText}</span>

//                   </button>
//                 </div>

//                 {/* Corner accent */}
//                 <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

// import React from "react";
// import { LiaTerminalSolid } from "react-icons/lia";
// import { SiGooglecloudstorage } from "react-icons/si";
// import { BsFileEarmarkLock } from "react-icons/bs";
// import { MdOutlineDisplaySettings } from "react-icons/md";
// import { Button } from "./Button/Button";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: LiaTerminalSolid,
//       title: "Software Design and Software Customization",
//       description:
//         "Unlock the full potential of your business with Apexon's expert software design and customization offerings.",
//       buttonText: "See More",
//     },
//     {
//       icon: SiGooglecloudstorage,
//       title: "Software/Disaster Recovery/Infrastructure",
//       description:
//         "Experience the power of the cloud with Apexon's comprehensive suite of Cloud Services.",
//       buttonText: "See More",
//     },
//     {
//       icon: BsFileEarmarkLock,
//       title: "Software Copyright Counseling",
//       description:
//         "Protect your intellectual property with Apexon's expert software copyright counseling services.",
//       buttonText: "See More",
//     },
//     {
//       icon: MdOutlineDisplaySettings,
//       title: "AI Business Solutions & AI Integration Education",
//       description:
//         "Harness the transformative power of Artificial Intelligence (AI) with Apexon's AI business solutions and education.",
//       buttonText: "See More",
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white py-16 px-6 lg:px-12 overflow-hidden">
//       {/* Subtle grid pattern */}
//       <div
//         className="absolute inset-0 opacity-5 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: "50px 50px",
//         }}
//       ></div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
//             OUR SERVICES
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => {
//             const IconComponent = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
//                 style={{
//                   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//                 }}
//               >
//                 {/* Card content */}
//                 <div className="relative z-10 h-full flex flex-col">
//                   {/* Icon */}
//                   <div className="mb-6 flex items-center justify-center">
//                     <div className="w-14 h-14 bg-emerald-400/20 rounded-full flex items-center justify-center border border-emerald-400/40 group-hover:border-emerald-300 transition-colors duration-300">
//                       <IconComponent
//                         size={28}
//                         className="text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-lg font-bold text-white mb-4 leading-tight min-h-[3.5rem]">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-grow">
//                     {service.description}
//                   </p>

//                   {/* Button */}
//                   <Button btnText={service.buttonText}/>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;




// import React from "react";
// import { LiaTerminalSolid } from "react-icons/lia";
// import { SiGooglecloudstorage } from "react-icons/si";
// import { BsFileEarmarkLock } from "react-icons/bs";
// import { MdOutlineDisplaySettings } from "react-icons/md";
// import { Button } from "./Button/Button";

// const services = [
//   {
//     icon: LiaTerminalSolid,
//     title: "Software Design and Software Customization",
//     description:
//       "Unlock the full potential of your business with Apexon's expert software design and customization offerings.",
//     buttonText: "See More",
//   },
//   {
//     icon: SiGooglecloudstorage,
//     title: "Software/Disaster Recovery/Infrastructure",
//     description:
//       "Experience the power of the cloud with Apexon's comprehensive suite of Cloud Services.",
//     buttonText: "See More",
//   },
//   {
//     icon: BsFileEarmarkLock,
//     title: "Software Copyright Counseling",
//     description:
//       "Protect your intellectual property with Apexon's expert software copyright counseling services.",
//     buttonText: "See More",
//   },
//   {
//     icon: MdOutlineDisplaySettings,
//     title: "AI Business Solutions & AI Integration Education",
//     description:
//       "Harness the transformative power of Artificial Intelligence (AI) with Apexon's AI business solutions and education.",
//     buttonText: "See More",
//   },
// ];

// const ServicesSection = () => (
//   <div className="w-full min-h-screen bg-black text-white py-16 px-8">
//     <div className="relative max-w-7xl  mx-30 md:mx-8 lg:mx-16">
     
//       <div className="mb-16">
//         <h2 className="font-nasalizationg  text-3xl md:text-4xl lg:text-5xl font-bold ">
//           OUR SERVICES
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {services.map((service, index) => {
//           const IconComponent = service.icon;
//           return (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 
//                     backdrop-blur-lg border border-white/20 rounded-2xl p-6
//                     transition-all duration-300 ease-in-out 
//                     hover:scale-105 hover:-translate-y-2 
//                     hover:border-green-400 
//                     hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
//             >
//               <div className="flex flex-col h-full">
               
//                 <div className="mb-6 flex items-start">
//                   <div className="w-14 h-14 rounded-full flex items-center justify-center border-gray-500 border-4 bg-white">
//                     <IconComponent size={28} className="text-green-950" />
//                   </div>
//                 </div>

                
//                 <h3 className="text-lg font-bold mb-4 leading-tight min-h-[3.5rem]">
//                   {service.title}
//                 </h3>

             
//                 <p className="text-gray-200/70 text-sm leading-relaxed mb-6 flex-grow">
//                   {service.description}
//                 </p>

//                 <div className="flex justify-center">
//                   <Button btnText={service.buttonText} />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// );

// export default ServicesSection;


import React from "react";
import { LiaTerminalSolid } from "react-icons/lia";
import { SiGooglecloudstorage } from "react-icons/si";
import { BsFileEarmarkLock } from "react-icons/bs";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { Button } from "./Button/Button";

const services = [
  {
    icon: LiaTerminalSolid,
    title: "Software Design and Software Customization",
    description:
      "Unlock the full potential of your business with expert software design and customization offerings.",
    buttonText: "See More",
  },
  {
    icon: SiGooglecloudstorage,
    title: "Software /Disaster Recovery/Infrastructure",
    description:
      "Experience the power of the cloud with comprehensive suite of Cloud Services.",
    buttonText: "See More",
  },
  {
    icon: BsFileEarmarkLock,
    title: "Software Copyright Counseling",
    description:
      "Protect your intellectual property with expert software copyright counseling services.",
    buttonText: "See More",
  },
  {
    icon: MdOutlineDisplaySettings,
    title: "AI Business Solutions & AI Integration Education",
    description:
      "Harness the transformative power of Artificial Intelligence (AI) with business solutions and education.",
    buttonText: "See More",
  },
];

const ServicesSection = () => (
  <div className="w-full min-h-screen relative bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    {/* Top Black Gradient Overlay */}
    <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
    {/* Bottom Black Gradient Overlay */}
    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
    {/* Background Gradient Effects */}
    <div className="pointer-events-none absolute top-10 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-blue-200 via-green-300 to-transparent opacity-60 blur-2xl rounded-full z-0" />
    <div className="pointer-events-none absolute bottom-4 left-4 sm:left-16 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-tl from-green-300 via-blue-200 to-transparent opacity-50 blur-3xl rounded-full z-0" />

    <div className="relative max-w-7xl mx-auto z-20">
      <div className="mb-12 sm:mb-16 text-center sm:text-left">
        <h2 className="font-nasalizationg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          OUR SERVICES
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 m-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 via-white/10 to-white/5 
                backdrop-blur-lg border border-white/20 rounded-2xl p-8 sm:p-6 
                flex flex-col justify-between h-full min-h-[360px] 
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:-translate-y-2 
                hover:border-green-400 
                hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border-gray-500 border-4 bg-white">
                  <IconComponent size={24} className="sm:w-[28px] sm:h-[28px] text-green-950" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 leading-tight min-h-[3rem] sm:min-h-[3.5rem]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-200/70 text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                {service.description}
              </p>

              {/* Button */}
              <div className="mt-2 flex justify-center sm:justify-center">
                <Button btnText={service.buttonText} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default ServicesSection;
