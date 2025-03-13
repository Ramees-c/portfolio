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
        <FaGithub color="#171d32" size={50} />
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <FaGoogle color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight">Software Engineer, Google</h2>
            <p className="text-sm leading-tight font-thin">
              Sept 2023 - Present
            </p>
            <ul className="text-sm p-2">
              <li>- Work as software developer</li>
              <li>- Sinior SDE developer</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
