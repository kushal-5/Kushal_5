import React from 'react';
import logo from "../assets/kushlogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-14 " />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/kushal-shrestha-7a87b2317/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-transform duration-300 transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://github.com/kushal-5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-transform duration-300 transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_kuss_5/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-110">
          <FaInstagram />
        </a>
        <a href="https://x.com/codebykus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

