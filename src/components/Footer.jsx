import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 text-center">
      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-6 text-xl">
        <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 transition"><FaLinkedinIn /></a>
        <a href="#" aria-label="Yelp" className="hover:text-gray-300 transition"><FaYelp /></a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 font-medium tracking-wide">
        COPYRIGHT © {new Date().getFullYear()} MARCI METZGER HOMES — ALL RIGHTS RESERVED
      </p>

      {/* Decorative line */}
      <div className="w-8 h-[1px] bg-gray-600 mx-auto mt-3" />
    </footer>
  );
};

export default Footer;
