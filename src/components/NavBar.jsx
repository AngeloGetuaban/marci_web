import React, { useState } from "react";
import logo from "../images/logo.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex items-center justify-between bg-white/10 backdrop-blur-md">
        {/* Left: Hamburger */}
        <div className="flex items-center gap-6">
          <button onClick={() => setIsOpen(true)} className="group p-2">
            <div className="flex flex-col justify-between w-7 h-5 cursor-pointer">
              <span className="block h-[2px] w-full bg-black"></span>
              <span className="block h-[2px] w-2/3 bg-black group-hover:w-full transition-all duration-300"></span>
              <span className="block h-[2px] w-full bg-black"></span>
            </div>
          </button>
        </div>

        {/* Center: Logo (hidden on small screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 hidden md:block">
          <img
            src={logo}
            alt="Marci Logo"
            className="h-24 w-auto max-w-[240px] object-contain"
          />
        </div>
        <div>
          <Link to="#">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-100 transition text-sm font-semibold shadow-md">
              CALL NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13h18M9 17h6M4 9h16V7a4 4 0 00-4-4H8a4 4 0 00-4 4v2z" />
              </svg>
            </button>
          </Link>
        </div>
      </nav>

      {/* Overlay Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 text-gray-800">
          {/* Logo inside Drawer for small screens */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Marci Metzger Homes Logo"
              className="h-20 w-auto max-w-[200px] object-contain"
            />
          </div>

          <button
            className="self-end text-2xl text-gray-500 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <nav className="flex flex-col gap-4 text-lg mt-4">
            <a href="/" className="hover:text-green-600">HOMEPAGE</a>
            <a href="#" className="hover:text-green-600">LISTING</a>
            <a href="#" className="hover:text-green-600">LET'S MOVE</a>
            <a href="#" className="hover:text-green-600">ABOUT US</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
