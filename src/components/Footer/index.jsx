import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/Food site task.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-2 mb-6 md:mb-0">
          <Image src={Logo} alt="Foodieland Logo" width={150} height={50} />
          <p className="text-gray-600 text-sm text-center md:text-left">
            get To know about us from the very beginning. We are here to help you with our best recipes.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end space-y-6 md:space-y-4">
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm">
              Recipes
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm">
              Blog
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 font-medium text-sm">
              Contact
            </a>
            <a href="/aboutUs" className="text-gray-800 hover:text-orange-500 font-medium text-sm">
              About us
            </a>
          </nav>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 <span className="text-orange-500 font-medium">SpaceZee</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;