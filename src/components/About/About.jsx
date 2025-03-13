import React from "react";
import aboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <div id="About"
      className='p-10 md:p-24 text-white'
    >
      <div>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>About</h1>
        <div className="flex flex-col xl:flex-row items-center justify-around">
          <img src={aboutImg} alt="about image" />
          <ul>
            <div className="flex gap-3 justify-center py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-[80%] md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                <p className="text-sm md:text-md leading-tight text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, assumenda hic consectetur necessitatibus excepturi
                  ad aliquid, ipsa at ipsam sed qui vitae dolore nulla rem vero!
                  Doloribus cupiditate magni perferendis!
                </p>
              </span>
            </div>
            <div className="flex gap-3 justify-center py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-[80%] md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                <p className="text-sm md:text-md leading-tight text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, assumenda hic consectetur necessitatibus excepturi
                  ad aliquid, ipsa at ipsam sed qui vitae dolore nulla rem vero!
                  Doloribus cupiditate magni perferendis!
                </p>
              </span>
            </div>
            <div className="flex gap-3 justify-center py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-[80%] md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Developer</h1>
                <p className="text-sm md:text-md leading-tigh text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, assumenda hic consectetur necessitatibus excepturi
                  ad aliquid, ipsa at ipsam sed qui vitae dolore nulla rem vero!
                  Doloribus cupiditate magni perferendis!
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
