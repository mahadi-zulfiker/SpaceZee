"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import img1 from "../../../public/Mask Group (9).png";
import img2 from "../../../public/Mask Group (10).png";
import img3 from "../../../public/Mask Group (11).png";
import img4 from "../../../public/Mask Group (12).png";
import img5 from "../../../public/Mask Group (13).png";
import img6 from "../../../public/Mask Group (14).png";
import img7 from "../../../public/Mask Group (15).png";
import img8 from "../../../public/Mask Group (16).png";

const menuItems = [
  { img: img1, title: "Mixed Tropical Fruit Salad with Superfood Boosts", time: "30 Minutes", category: "Healthy" },
  { img: img2, title: "Big and Juicy Wagyu Beef Cheeseburger", time: "30 Minutes", category: "Western" },
  { img: img3, title: "Healthy Japanese Fried Rice with Asparagus", time: "30 Minutes", category: "Healthy" },
  { img: img4, title: "Cauliflower Walnut Vegetarian Taco Meat", time: "30 Minutes", category: "Eastern" },
  { img: img5, title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing", time: "30 Minutes", category: "Healthy" },
  { img: img6, title: "Barbeque Spicy Sandwiches with Chips", time: "30 Minutes", category: "Snack" },
  { img: img7, title: "Firecracker Vegan Lettuce Wraps - Spicy!", time: "30 Minutes", category: "Seafood" },
  { img: img8, title: "Chicken Ramen Soup with Mushroom", time: "30 Minutes", category: "Japanese" },
];

export default function Menus() {
  const [favorites, setFavorites] = useState(new Array(menuItems.length).fill(false));

  const toggleFavorite = (index) => {
    setFavorites((prev) => {
      const newFavorites = [...prev];
      newFavorites[index] = !newFavorites[index];
      return newFavorites;
    });
  };

  return (
    <section className="px-6 max-w-7xl mx-auto  md:px-12 lg:px-20 pb-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Try this delicious recipe to make your day</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore a variety of delightful dishes, carefully crafted to satisfy your cravings and nourish your body.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {menuItems.map((item, index) => (
          <div key={index} className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image src={item.img} alt={item.title} width={300} height={200} className="w-full h-48 object-cover" />
            <button
              onClick={() => toggleFavorite(index)}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
            >
              <Heart className={`w-5 h-5 ${favorites[index] ? 'text-red-500' : 'text-gray-400'}`} fill={favorites[index] ? 'red' : 'none'} />
            </button>
            <div className="p-4">
              <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <span className="mr-2">⏱ {item.time}</span>
                <span>🍽 {item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}