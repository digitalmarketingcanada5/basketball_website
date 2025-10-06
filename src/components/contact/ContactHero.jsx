'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ContactHero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info.exceedacademy@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                You Can Stay in Touch With Us This Way
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Got a question or need assistance? Our team is just a call or message away! Use the contact form to send us a message, or reach out directly using the numbers listed beside it. We're here to support you and look forward to connecting!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Phone:</h3>
                <div className="space-y-1">
                  <p className="text-gray-300">780-938-8935</p>
                  <p className="text-gray-300">437-286-1388</p>
                  <p className="text-gray-300">514-592-8837</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">Email:</h3>
                <a 
                  href="mailto:info.exceedacademy@gmail.com"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  info.exceedacademy@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">Coach Direct:</h3>
                <div className="text-gray-300">
                  <div>Coach Richards</div>
                  <div className="text-white">+1 (416) 779‑8878</div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">Follow Us:</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.tiktok.com/@exceed.basketball?_t=ZM-90KQgfVzTbv&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src="/images/tik-tok.png"
                      alt="TikTok"
                      width={24}
                      height={24}
                      className="object-contain filter invert brightness-0"
                      style={{ filter: 'invert(1) brightness(2)' }}
                    />
                  </a>
                  <a href="https://instagram.com/excee_d8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@excee_d8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src="/images/youtube.png"
                      alt="YouTube"
                      width={24}
                      height={24}
                      className="object-contain filter invert brightness-0"
                      style={{ filter: 'invert(1) brightness(2)' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none transition-colors resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;