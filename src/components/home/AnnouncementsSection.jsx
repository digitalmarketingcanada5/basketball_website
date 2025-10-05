'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, Download } from 'lucide-react';

const AnnouncementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Flier data - update paths when you have actual flier images
  const fliers = [
    {
      id: 1,
      title: "Spring Training Camp 2025",
      image: "/images/flier1.jpeg",
      link: "#",
      description: "Join our intensive spring training program"
    },
    {
      id: 2,
      title: "Summer Basketball League",
      image: "/images/flier2.jpeg",
      link: "#",
      description: "Register for our competitive summer league"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === fliers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fliers.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = (flier) => {
    setLightboxImage(flier);
    setIsLightboxOpen(true);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  if (fliers.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-red-500">IMPORTANT</span>{' '}
            <span className="text-white">ANNOUNCEMENTS</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Stay updated with our latest programs and events
          </p>
        </div>

        {/* Flier Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {/* Main Flier Display - No overlay on image */}
            <div className="relative group">
              <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-lg shadow-2xl bg-gray-900">
                <Image
                  src={fliers[currentIndex].image}
                  alt={fliers[currentIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation Arrows - Always visible for clarity */}
              {fliers.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 text-white p-3 rounded-full transition-all shadow-lg"
                    aria-label="Previous announcement"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-red-600 text-white p-3 rounded-full transition-all shadow-lg"
                    aria-label="Next announcement"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Navigation hint */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                    {currentIndex + 1} / {fliers.length}
                  </div>
                </>
              )}
            </div>

            {/* Title and Description - Below the image */}
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">
                {fliers[currentIndex].title}
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {fliers[currentIndex].description}
              </p>
              <button
                onClick={() => openLightbox(fliers[currentIndex])}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition-colors text-lg font-semibold"
              >
                View Full Image
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          {fliers.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {fliers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-red-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Quick Links for All Announcements */}
          {fliers.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {fliers.map((flier, index) => (
                <button
                  key={flier.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    index === currentIndex
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <p className="text-sm text-gray-300 truncate">
                    {flier.title}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-60"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Download button */}
          <a
            href={lightboxImage.image}
            download={`${lightboxImage.title}.jpg`}
            className="absolute top-4 right-20 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-60"
            aria-label="Download image"
          >
            <Download className="w-6 h-6 text-white" />
          </a>

          {/* Image container */}
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            {/* Title */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">{lightboxImage.title}</h3>
              <p className="text-gray-400">{lightboxImage.description}</p>
            </div>

            {/* Image */}
            <div className="relative w-full h-full max-h-[80vh]">
              <Image
                src={lightboxImage.image}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Click outside to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox background"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AnnouncementsSection;