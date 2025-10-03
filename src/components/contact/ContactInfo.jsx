import React from 'react';

const ContactInfo = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Contact Methods */}
        <div className="mt-16 bg-black p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">General Inquiries</h4>
              <div className="space-y-1">
                <p className="text-gray-300 text-sm">780-938-8935</p>
                <p className="text-gray-300 text-sm">437-286-1388</p>
                <p className="text-gray-300 text-sm">514-592-8837</p>
              </div>
            </div>

            <div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Email Support</h4>
              <p className="text-gray-300 text-sm">info.exceedacademy@gmail.com</p>
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