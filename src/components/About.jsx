import React from "react";
import { Button } from "./Button/Button";
import iceCube from "./../assets/images/iceCube.png";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20 lg:mt-40 bg-black relative">
      <div className="max-w-[1440px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">

          <div className="lg:col-span-2 flex items-center">
            <div className="w-full px-4 sm:px-6 md:px-0">
              <h1 className="font-nasalizationg text-white text-left space-y-2 md:space-y-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight md:leading-snug font-extrabold tracking-wide uppercase">
                <span className="block">We are forging</span>
                <span className="block tracking-[4px] sm:tracking-[8px]">
                  the future of
                </span>
                <span className="block tracking-[6px] sm:tracking-[12px]">
                  technology
                </span>
              </h1>
            </div>
          </div>

          {/* Paragraph Section */}
          <div className="flex flex-col justify-center text-white text-left sm:text-center lg:text-right space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-0">
            <p className="font-semibold text-sm sm:text-base lg:text-lg">
              As a newly established IT company, we bring a fresh perspective to
              the world of software design and{" "}
              <strong>Software as a Service (SaaS)</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Our mission is clear: to push the boundaries of what's possible in
              the digital realm. We are passionate about harnessing cutting-edge
              technology to create software solutions that empower businesses
              and individuals alike.
            </p>
            <div className="flex justify-center lg:justify-end mt-6 sm:mt-0">
              <Button btnText="About Us" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="flex flex-col justify-center text-white text-left sm:text-center lg:text-left space-y-4 sm:space-y-6 max-w-xl px-4 sm:px-6 md:px-0">
              <p className="font-semibold text-sm sm:text-base lg:text-lg">
                We are committed to continuous learning and growth, ensuring our
                solutions remain at the forefront of technology.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Collaboration and innovation drive us forward as we help clients
                navigate the evolving digital landscape with confidence and
                creativity.a
              </p>
              <div className="flex justify-center lg:justify-start mt-6 sm:mt-0">
                <Button btnText="About Us" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <img
              src={iceCube}
              alt="glass cube"
              className="w-48 sm:w-64 md:w-80 lg:w-[300px] xl:w-[400px] opacity-60 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
