import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-3xl font-bold tracking-wide">Ramees</span>
      <ul
        className={`${
          openMenu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none 
        text-center md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Footer">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
        <a href="#Projects">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setOpenMenu(!openMenu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            setOpenMenu(false)
            setShowMenu(true);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;
