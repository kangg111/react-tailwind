import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#5e3b3f]">
      <h1 className="w-full text-3xl font-bold text-[#95c4b8]">LOGO.</h1>
      <ul className="hidden md:flex text-[#95c4b8] font-bold">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="p-4">
          <Link to="/company">Company</Link>
        </li>
        <li className="p-4">
          <Link to="/resources">Resources</Link>
        </li> */}
        <li className="p-4">
          <Link to="/about">About</Link>
        </li>
        <li className="p-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#5e3b3f] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#95c4b8] m-4">WEB.</h1>
        <li className="p-4 border-b border-gray-600">
          <Link>Home</Link>
        </li>
        {/* <li className="p-4 border-b border-gray-600">
          <Link>Company</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link>Resources</Link>
        </li> */}
        <li className="p-4 border-b border-gray-600">
          <Link>About</Link>
        </li>
        <li className="p-4">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
