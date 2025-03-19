import React from "react";
import {
  FaCss3,
  FaGoogle,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { FaBriefcase } from 'react-icons/fa';


function Experience() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34f26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#7952B3" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#38BDF8" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJqueryLogo color="#0769AD" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAF8" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoFirebase color="#FFCA28" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
        <FaGithub color="#fff" size={50} />
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-5 items-center">
          {/* <FaBriefcase color="#4285F4" size={50} /> */}
          <span className="text-white">
            <h2 className="text-lg">Junior React Developer, Dhanwis Techinfo Solutions, Kannur, Kerala</h2>
            <p className="text-sm leading-tight font-thin mt-2">
              January 2025 - Present
            </p>
            <ul className="text-sm p-4">
              <li className="mb-3 text-justify">- Built responsive and interactive UI components using React.js and Tailwind CSS, ensuring a seamless user experience.</li>
              <li className="mb-3 text-justify">- Developed clean, maintainable, and optimized React applications, utilizing React Hooks, React Router, and CSS animations.</li>
              <li className="text-justify">- Collaborated with designers and backend developers to integrate REST APIs, while managing version control with Git & GitHub.</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
