'use client';

import Image from 'next/image';
import img1 from '../../../public/Post.png';
import img2 from '../../../public/Post (1).png';
import img3 from '../../../public/Post (2).png';
import img4 from '../../../public/Post (3).png';
import { FaInstagram } from 'react-icons/fa';

function InstagramPosts() {
  return (
    <section className="text-center lg:py-16 mb-4 bg-gradient-to-b from-gray-100 to-[#E7F9FD] max-w-7xl mx-auto px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Check out <span className="text-black">@foodieland</span> on Instagram
      </h2>
      <p className="text-gray-600 max-w-lg mx-auto mt-2">
      Get To know about us from the very beginning. We are here to help you with our best recipes and we are here to help you with our best recipes.
      </p>
      
      {/* Instagram Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-16">
        {[img1, img2, img3, img4].map((img, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <Image src={img} alt={`Instagram post ${index + 1}`} width={350} height={350} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      
      {/* Button */}
      <div className="my-12 justify-items-center text-center mx-auto">
        <button className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition flex items-center gap-2">
          Visit Our Instagram
          <FaInstagram size={20} />
        </button>
      </div>
    </section>
  );
}

export default InstagramPosts;
