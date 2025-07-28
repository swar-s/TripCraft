import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center text-center">
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/swar-s" target="_blank" className="text-white hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/swar-s" target="_blank" className="text-white hover:text-gray-300">
                <FaGithub size={24} />
              </a>
              <a href="https://swarup.live" target="_blank" className="text-white hover:text-gray-300">
                <FaCode size={24} />
              </a>
              <a href="https://www.instagram.com/swarup.exe" target="_blank" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-2 pt-2 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} TripCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
