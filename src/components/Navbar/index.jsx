"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-8 py-2 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        <Image src="/Food site task.png" alt="Foodieland" width={160} height={40} />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-[15px] font-medium">
        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
        <li><Link href="/" className="hover:text-orange-500">Recipes</Link></li>
        <li><Link href="/" className="hover:text-orange-500">Blog</Link></li>
        <li><Link href="/" className="hover:text-orange-500">Contact</Link></li>
        <li><Link href="/aboutUs" className="hover:text-orange-500">About us</Link></li>
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex space-x-4 text-gray-700 text-lg">
        <Link href="https://facebook.com">
          <FaFacebookF className="hover:text-orange-500 transition" />
        </Link>
        <Link href="https://twitter.com">
          <FaTwitter className="hover:text-orange-500 transition" />
        </Link>
        <Link href="https://instagram.com">
          <FaInstagram className="hover:text-orange-500 transition" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
            <X />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 my-6 px-4">
          <Link href="/" className="text-lg hover:text-orange-500" onClick={() => setIsSidebarOpen(false)}>Home</Link>
          <Link href="/" className="text-lg hover:text-orange-500" onClick={() => setIsSidebarOpen(false)}>Recipes</Link>
          <Link href="/" className="text-lg hover:text-orange-500" onClick={() => setIsSidebarOpen(false)}>Blog</Link>
          <Link href="/" className="text-lg hover:text-orange-500" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
          <Link href="/aboutUs" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition text-center" onClick={() => setIsSidebarOpen(false)}>About us</Link>

          {/* Sidebar Social Icons */}
          <div className="flex space-x-4 mt-4 text-gray-700 text-xl">
            <Link href="https://facebook.com">
              <FaFacebookF className="hover:text-orange-500 transition" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="hover:text-orange-500 transition" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="hover:text-orange-500 transition" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
