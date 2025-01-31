"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import img1 from "../../../public/Mask Group (1).png";
import img2 from "../../../public/Mask Group (2).png";
import img3 from "../../../public/Mask Group (3).png";
import img4 from "../../../public/Mask Group (4).png";
import img5 from "../../../public/Mask Group (5).png";
import img6 from "../../../public/Mask Group (6).png";
import img7 from "../../../public/Mask Group (7).png";
import img8 from "../../../public/Mask Group (8).png";

const recipesData = [
  { img: img1, title: "Big and Juicy Wagyu Beef Cheeseburger", time: "30 Minutes", category: "Snack" },
  { img: img2, title: "Fresh Lime Roasted Salmon with Ginger Sauce", time: "30 Minutes", category: "Fish" },
  { img: img3, title: "Strawberry Oatmeal Pancake with Honey Syrup", time: "30 Minutes", category: "Breakfast" },
  { img: img4, title: "Fresh and Healthy Mixed Mayonnaise Salad", time: "30 Minutes", category: "Healthy" },
  { img: img5, title: "Chicken Meatballs with Cream Cheese", time: "30 Minutes", category: "Meat" },
  { img: img6, title: "Fruity Pancake with Orange & Blueberry", time: "30 Minutes", category: "Sweet" },
  { img: img7, title: "The Best Easy One Pot Chicken and Rice", time: "30 Minutes", category: "Snack" },
  { img: img8, title: "The Creamiest Creamy Chicken and Bacon Pasta", time: "30 Minutes", category: "Noodles" },
];

const Recipes = () => {
  const [liked, setLiked] = useState(new Array(recipesData.length).fill(false));

  const toggleLike = (index) => {
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-8 lg:py-20 text-center">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-gray-800">Simple and tasty recipes</h2>
      <p className="text-gray-600 mt-2 max-w-lg mx-auto">
        Get to know about us from the very beginning. We are here to help you with our best recipes.
      </p>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 p-8 py-8">
        {recipesData.map((recipe, index) => (
          <div key={index} className="rounded-2xl p-4 relative shadow-lg bg-[#E7F9FD]">
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image src={recipe.img} alt={recipe.title} layout="fill" objectFit="cover" />
              <button
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
                onClick={() => toggleLike(index)}
              >
                <Heart className={liked[index] ? "text-red-500" : "text-gray-700"} size={18} fill={liked[index] ? "red" : "none"} />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-3">{recipe.title}</h3>
            <div className="flex items-center text-gray-600 text-sm mt-2">
              <span className="mr-2">⏳ {recipe.time}</span>
              <span className="ml-2">🍽️ {recipe.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
