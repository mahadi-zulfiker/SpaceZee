"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import salad from "../../../public/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png";
import plate from "../../../public/Photo-plate.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please enter a valid email!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "You have successfully subscribed to our newsletter.",
    });

    setEmail("");
  };

  return (
    <div className="relative bg-[#E7F9FD] rounded-2xl  space-y-8 p-20 text-center max-w-7xl mx-auto overflow-hidden m-4">
      <h2 className="text-4xl font-bold text-gray-900">Deliciousness to your inbox</h2>
      <p className="text-gray-600 mt-2">
        Stay updated with the latest recipes, healthy meal plans, and exclusive deals. Join our community today!
      </p>

      {/* Email Input */}
      <div className="mt-5 flex justify-center">
        <input
          type="email"
          placeholder="Your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 w-80 rounded-l-full border border-gray-300 focus:outline-none"
        />
        <button
          className="p-3 bg-black text-white rounded-r-full px-6 hover:bg-gray-800"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>

      {/* Floating Food Images */}
      <Image
        src={salad}
        alt="Floating Salad"
        className="absolute left-0 bottom-0 w-40"
      />
      <Image
        src={plate}
        alt="Floating Plate"
        className="absolute right-0 bottom-0 w-40"
      />
    </div>
  );
};

export default Subscribe;
