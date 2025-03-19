import React from "react";
import aboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <div id="About" className="p-5 md:p-24 text-white">
      <div>
        <h1 className="text-2xl md:text-4xl text-white font-bold">About</h1>
        <div className="flex flex-col xl:flex-row items-center justify-around">
          <img src={aboutImg} alt="about image" />
          <ul>
            <div className="flex gap-3 justify-center py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full md:w-full">
                <h1 className="text-xl md:text-3xl font-semibold leading-normal mb-5">
                  React Developer
                </h1>
                <p className="text-lg md:text-md text-justify">
                  I’m a passionate React Developer dedicated to building
                  responsive, interactive, and user-friendly web applications.
                  With expertise in React.js, Tailwind CSS, and modern front-end
                  technologies, I create seamless and visually appealing user
                  experiences. I specialize in developing reusable UI
                  components, optimizing performance, and implementing smooth
                  navigation using React Router. My focus is on writing clean,
                  maintainable code while integrating animations and transitions
                  to enhance usability. As a detail-oriented developer, I stay
                  updated with the latest trends to deliver high-quality
                  solutions. Let’s collaborate to bring innovative ideas to life
                  with scalable and efficient front-end development!
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
