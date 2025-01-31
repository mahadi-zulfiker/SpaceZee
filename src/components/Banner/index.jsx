"use client";

import React from "react";
import Image from "next/image";
import { FaClock, FaDrumstickBite } from "react-icons/fa";
import user from "../../../public/Ellipse 2.png";
import Badge from "../../../public/Badge.png";
import BannerSide from "../../../public/Mask Group.png";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto rounded-2xl my-4">
      {/* Badge */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <Image src={Badge} alt="Handpicked Badge" width={120} height={100} />
      </div>

      <div className="flex flex-col bg-[#E7FAFE] md:flex-row items-center md:items-start justify-between">
        {/* Left Side */}
        <div className="flex flex-col space-y-10 md:w-1/2 p-8">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-100 px-3 py-1 rounded-full font-semibold text-sm text-orange-600">
              Hot Recipes
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Spicy delicious chicken wings
          </h1>

          <p className="text-gray-600 text-sm md:text-base">
            Get To know about us from the very beginning. We are here to help you with our best recipes and we are here to help you with our best recipes.
          </p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaClock className="text-gray-500" />
              <span className="text-gray-700 text-sm">30 Minutes</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaDrumstickBite className="text-gray-500" />
              <span className="text-gray-700 text-sm">Chicken</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image src={user} alt="User" width={40} height={40} className="rounded-full" />
            <div className="text-sm">
              <p className="text-gray-800 font-medium">John Smith</p>
              <p className="text-gray-500">15 March 2022</p>
            </div>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-lg mt-4 w-max hover:bg-gray-800">
            View Recipes
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image src={BannerSide} alt="Chicken Wings" width={560} height={500} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;