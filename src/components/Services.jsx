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
