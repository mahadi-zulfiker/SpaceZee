'use client';

import Image from 'next/image';
import img1 from '../../../public/Post.png';
import img2 from '../../../public/Post (1).png';
import img3 from '../../../public/Post (2).png';
import img4 from '../../../public/Post (3).png';

function InstagramPosts() {
  return (
    <section className="text-center lg:py-20 bg-gradient-to-b to-blue-50 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
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
      <div className="my-12 justify-items-center">
        <button className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition flex items-center gap-2">
          Visit Our Instagram
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C5.014 2 3 4.014 3 6.5v11C3 19.986 5.014 22 7.5 22h9c2.486 0 4.5-2.014 4.5-4.5v-11C21 4.014 18.986 2 16.5 2h-9zM7.5 4h9c1.379 0 2.5 1.121 2.5 2.5v11c0 1.379-1.121 2.5-2.5 2.5h-9c-1.379 0-2.5-1.121-2.5-2.5v-11C5 5.121 6.121 4 7.5 4zM12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 2c1.378 0 2.5 1.121 2.5 2.5s-1.122 2.5-2.5 2.5-2.5-1.121-2.5-2.5 1.122-2.5 2.5-2.5z" /></svg>
        </button>
      </div>
    </section>
  );
}

export default InstagramPosts;
