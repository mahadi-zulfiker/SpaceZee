import React from 'react';
import Image from 'next/image';
import lotus from "../../../public/image 20.png";
import meat from "../../../public/image 21.png";
import cake from "../../../public/image 22.png";
import bread from "../../../public/image 23.png";
import chocolate from "../../../public/image 24.png";
import rice from "../../../public/image 25.png";

function Categories() {
  const categories = [
    { name: "Breakfast", image: rice, gradient: "from-yellow-50 to-yellow-100" },
    { name: "Vegan", image: lotus, gradient: "from-green-50 to-green-100" },
    { name: "Meat", image: meat, gradient: "from-red-50 to-red-100" },
    { name: "Dessert", image: cake, gradient: "from-pink-50 to-pink-100" },
    { name: "Lunch", image: bread, gradient: "from-orange-50 to-orange-100" },
    { name: "Chocolate", image: chocolate, gradient: "from-brown-50 to-brown-100" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Categories</h2>
        <button className="bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-100">
          View All Categories
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-gradient-to-b ${category.gradient} p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300`}
          >
            <div className="w-20 h-20 md:w-24 md:h-24">
              <Image src={category.image} alt={category.name} layout="responsive" className="object-contain" />
            </div>
            <p className="mt-6 text-base md:text-lg font-semibold text-gray-900">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;