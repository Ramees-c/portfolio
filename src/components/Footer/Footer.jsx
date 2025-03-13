import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    // <div id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
    //     <div>
    //         <h1 className='text-2xl md:text-6xl font-bold mb-2'>Contact</h1>
    //         <h2 className='text-sm md:text-2xl font-normal'>Feel Free To reach out</h2>
    //     </div>

    //     <ul className='text-sm md:text-xl'>
    //         <li className='flex gap-2 items-center mb-3'>
    //             <MdOutlineEmail size={20} />
    //             myeamil@gmail.com
    //         </li>
    //         <li className='flex gap-2 items-center mb-3'>
    //             <CiLinkedin size={20}  />
    //             linkedin.com
    //         </li>
    //         <li className='flex gap-2 items-center mb-3'>
    //             <FaGithub size={20} />
    //             github.com
    //         </li>
    //     </ul>
    // </div>

    <footer className="text-white py-8" id="Footer">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:md-0">
            <h2 className="text-2xl font-bold mb-2">Ramees</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quaerat dignissimos aperiam.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between
            items-center"
        >
          <p className="text-gray-400 text-xl">
            &copy; {new Date().getFullYear()}
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="" className="text-gray-400 hover:text-white text-2xl">
              <FaLinkedin />
            </a>
            <a href="" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="" className="text-gray-400 hover:text-white text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
