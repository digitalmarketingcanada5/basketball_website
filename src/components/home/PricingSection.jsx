import React from 'react';
import { contact } from '../../lib/siteData';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 'local-with-accommodation',
      type: 'A – Local ($12,500)',
      subtitle: 'with accommodations',
      price: '$12,500',
      features: [
        {
          label: 'Initial deposit',
          value: '$5,300 due on or before October 18, 2025'
        },
        {
          label: 'Monthly payments',
          value: '8 monthly non-refundable payments of $900 (remaining balance)'
        }
      ],
      highlighted: true
    },
    {
      id: 'local-without-accommodation',
      type: 'B – Local ($9,500)',
      subtitle: 'without accommodations',
      price: '$9,500',
      features: [
        {
          label: 'Initial deposit',
          value: '$3,500 due on or before October 18, 2025'
        },
        {
          label: 'Monthly payments',
          value: '8 monthly non-refundable payments of $750 (remaining balance)'
        }
      ],
      highlighted: false
    },
    {
      id: 'international',
      type: 'International',
      subtitle: '($17,500)',
      price: '$17,500',
      features: [
        {
          label: 'Initial deposit',
          value: '$5,000 due on or before October 18, 2025'
        },
        {
          label: 'Monthly payments',
          value: '8 monthly non-refundable payments of $1,562.50 (remaining balance)'
        }
      ],
      highlighted: false
    },
    {
      id: 'low-income',
      type: 'Low Income Families',
      subtitle: 'Competing In The Program',
      price: '$1,500',
      features: [
        {
          label: 'Initial deposit',
          value: '$2,500 for the season'
        },
        {
          label: 'Requirements',
          value: 'Must show proof of financial statements'
        },
        {
          label: 'Note',
          value: 'Does not include travel'
        }
      ],
      highlighted: false,
      special: true
    }
  ];

  const juniorPricing = {
    title: 'For Juniors Grades 7–10',
    subtitle: 'Local, Without Accommodation',
    totalFee: '$7,000',
    scholarship: '$3,500',
    netPayable: '$3,500',
    details: [
      'Includes travel/transportation',
      'Initial deposit: $1,500, due on or before October 18, 2025',
      'Balance: payable via a monthly payment plan'
    ],
    note: 'Athletes/Students competing in this program (Grades 7–10) will not be permitted to leave their home schools.'
  };

  return (
    <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
            Prices
          </h2>
          <p className="text-2xl text-white font-semibold">
            For Local and International Senior Students
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-navy-900 rounded-lg p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-4 ring-red-600 transform scale-105'
                  : 'hover:ring-2 hover:ring-red-400'
              }`}
            >
              {/* Timeline Connector Visual */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <div className="w-1 h-8 bg-red-600 mx-auto"></div>
              </div>

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  {plan.type}
                </h3>
                <p className="text-lg text-gray-300">{plan.subtitle}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="border-l-4 border-red-600 pl-4">
                    <p className="text-white font-semibold mb-1">
                      {feature.label}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {feature.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Timeline */}
        <div className="hidden md:block absolute left-0 right-0 h-1 bg-red-600 opacity-20" style={{ top: '180px' }}></div>

        {/* Junior Pricing Section */}
        <div className="bg-navy-900 rounded-lg p-10 mt-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
              Price
            </h3>
            <p className="text-xl text-white font-semibold">
              For Local Students
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Regular Junior Pricing */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border-l-4 border-red-600 pl-6">
                <h4 className="text-2xl font-bold text-red-600 mb-2">
                  {juniorPricing.title}
                </h4>
                <p className="text-lg text-gray-300 mb-4">
                  {juniorPricing.subtitle}
                </p>

                <div className="space-y-3 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total fee:</span>
                    <span className="text-red-400 text-xl font-bold">{juniorPricing.totalFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Scholarship bursary:</span>
                    <span className="text-red-400 text-xl font-bold">{juniorPricing.scholarship}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-700">
                    <span className="text-white font-bold">Net payable:</span>
                    <span className="text-red-600 text-2xl font-bold">{juniorPricing.netPayable}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {juniorPricing.details.map((detail, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Low Income Junior Card */}
            <div className="bg-black rounded-lg p-6 border-2 border-red-600">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-red-600 mb-2">
                  Low Income Families
                </h4>
                <p className="text-sm text-gray-300">
                  Competing In The Program
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-white font-semibold mb-1">
                    Initial deposit
                  </p>
                  <p className="text-gray-300 text-sm">
                    $1,500 for the season
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-white font-semibold mb-1">
                    Requirements
                  </p>
                  <p className="text-gray-300 text-sm">
                    Must show proof of financial statements
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-white font-semibold mb-1">
                    Note
                  </p>
                  <p className="text-gray-300 text-sm">
                    Does not include travel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section Below */}
          <div className="mt-12">
            <div className="bg-black rounded-lg p-6">
                <h5 className="text-lg font-bold text-red-600 mb-4">Contact:</h5>
                <div className="space-y-3">
                  {/* Email */}
                  <a
                    href={`mailto:${contact.general.email}`}
                    className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{contact.general.email}</span>
                  </a>

                  {/* Phone Numbers */}
                  <div className="space-y-2">
                    <p className="text-white font-semibold text-sm">Phone:</p>
                    <a
                      href={`tel:${contact.general.phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{contact.general.phone}</span>
                    </a>
                    {contact.general.additionalPhones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                        className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{phone}</span>
                      </a>
                    ))}
                  </div>

                  {/* Coach Direct */}
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-white font-semibold text-sm mb-2">Coach Direct:</p>
                    <a
                      href={`tel:${contact.primary[0].phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <p className="text-sm">{contact.primary[0].name}</p>
                        <p className="text-red-400 font-semibold">{contact.primary[0].phone}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * All prices are in Canadian Dollars (CAD). Payment plans are subject to availability and approval.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            * Scholarship bursary eligibility based on academic and athletic achievements.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
