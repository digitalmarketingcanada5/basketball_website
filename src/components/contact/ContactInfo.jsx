import React from 'react';

const ContactInfo = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visit Our Locations</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* BCR School */}
          <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">BCR School</h3>
            <div className="space-y-2 text-gray-300">
              <p>6227 119 Ave</p>
              <p>Edmonton, AB</p>
              <p className="text-red-400 font-semibold">Grades 8-12</p>
              <p className="text-sm">Full Academic Program</p>
            </div>
          </div>

          {/* Amiskwaciy Academy */}
          <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Amiskwaciy Academy</h3>
            <div className="space-y-2 text-gray-300">
              <p>101 Airport Rd</p>
              <p>Edmonton, AB</p>
              <p className="text-red-400 font-semibold">Grades 8-12</p>
              <p className="text-sm">Full Academic Program</p>
            </div>
          </div>

          {/* Great Lyn Academy */}
          <div className="bg-black p-8 rounded-lg text-center hover:bg-gray-800 transition-colors duration-300">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Great Lyn Academy</h3>
            <div className="space-y-2 text-gray-300">
              <p>Ontario Location</p>
              <p>Ontario, Canada</p>
              <p className="text-red-400 font-semibold">Grades 8-12</p>
              <p className="text-sm">Full Academic Program</p>
            </div>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16 bg-black p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">General Inquiries</h4>
              <p className="text-gray-300 text-sm">780-938-8935</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Email Support</h4>
              <p className="text-gray-300 text-sm">infocadaexceed@yahoo.com</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Coach Richards</h4>
              <p className="text-gray-300 text-sm">+1 (416) 779‑8878</p>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Office Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-red-400 font-bold mb-2">Monday - Friday</h4>
              <p className="text-gray-300">9:00 AM - 5:00 PM</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-red-400 font-bold mb-2">Saturday</h4>
              <p className="text-gray-300">10:00 AM - 2:00 PM</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-red-400 font-bold mb-2">Sunday</h4>
              <p className="text-gray-300">Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;