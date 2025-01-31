'use client';

import Image from 'next/image';
import BannerRight from '../../../public/Group 880.png';

function Kitchen() {
    return (
        <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto justify-between px-6 md:px-16 lg:px-24 pb-12">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Everyone can be a <br /> chef in their own kitchen
                </h1>
                <p className="text-gray-600 max-w-md">
                    Get To know about us from the very beginning. We are here to help you with our best recipes and we are here to help you with our best recipes.
                </p>
                <button className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition">
                    Learn More
                </button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                <Image
                    src={BannerRight}
                    alt="Chef with food"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>
        </section>
    );
}

export default Kitchen;