"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { FaUsers, FaBullseye, FaHandshake } from 'react-icons/fa';
import globe from '../../../public/globe.svg';
import aboutUsBreadCrumb from '../../../public/about_service.jpg';
import Swal from 'sweetalert2';
import { useState } from 'react';
import user from "../../../public/user.png"

function AboutUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Message Sent!',
            text: 'We will get back to you shortly.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            {/* Banner Section */}
            <div className="relative w-full h-80">
                <Image src={aboutUsBreadCrumb} alt="About Us Banner" layout="fill" objectFit="cover" className="opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50 p-6">
                    <h1 className="text-5xl font-bold">About SpaceZee</h1>
                    <p className="text-xl mt-2 max-w-2xl">Discover our passion for food and creativity.</p>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
                <p className="text-gray-600 max-w-4xl mx-auto mb-8 text-lg leading-relaxed">
                    Welcome to SpaceZee, where food meets creativity! We are dedicated to bringing you the most delicious and innovative recipes from around the world.
                    Our mission is to make cooking fun, easy, and accessible for everyone.
                </p>
                <div className="flex justify-center">
                    <Image src={globe} alt="Globe Icon" width={140} height={140} />
                </div>

                {/* Why Choose Us Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    <div className="bg-white p-8 rounded-lg shadow-lg transition hover:shadow-xl flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                            <FaBullseye className="text-blue-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                        <p className="text-gray-600 mt-4">To inspire food lovers by sharing mouth-watering recipes from every corner of the globe.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transition hover:shadow-xl flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <FaHandshake className="text-green-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
                        <p className="text-gray-600 mt-4">We curate high-quality recipes that are simple, tasty, and nutritious, making your cooking experience enjoyable.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg transition hover:shadow-xl flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                            <FaUsers className="text-purple-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Stay Connected</h3>
                        <p className="text-gray-600 mt-4">Follow us on social media and subscribe for the latest recipes, tips, and updates.</p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {['Alex', 'Sarah', 'John'].map((name, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <Image src={user} alt={name} width={100} height={100} className="rounded-full mx-auto" />
                                <h4 className="text-xl font-semibold mt-4">{name}</h4>
                                <p className="text-gray-500">{name === 'Alex' ? 'Head Chef' : name === 'Sarah' ? 'Recipe Developer' : 'Content Manager'}</p>
                                <p className="text-gray-600 mt-2 italic">“Cooking is an art, and every recipe tells a story.”</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-12 bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold mb-4 text-center text-gray-900">Get In Touch</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800" required />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800" required />
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800" required></textarea>
                        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">Send Message</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;
