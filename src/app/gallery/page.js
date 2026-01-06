'use client';
import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import { Play, X, Grid, Film, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // WhatsApp images folder path
  const whatsappFolder = '/images/gallery/WhatsApp Unknown 2026-01-06 at 11.42.50 AM';

  // Gallery data with actual media files
  const mediaItems = [
    // Original Images
    { id: 1, type: 'image', src: '/images/gallery/Training.jpeg', title: 'Training Session', category: 'training' },
    { id: 2, type: 'image', src: '/images/gallery/photo1.jpeg', title: 'Team Photo', category: 'events' },
    { id: 3, type: 'image', src: '/images/gallery/Events.png', title: 'Special Events', category: 'events' },

    // WhatsApp Gallery Images
    { id: 5, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.45 PM.jpeg`, title: 'Team Moment 1', category: 'training' },
    { id: 6, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.46 PM.jpeg`, title: 'Team Moment 2', category: 'training' },
    { id: 7, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.46 PM (1).jpeg`, title: 'Team Moment 3', category: 'training' },
    { id: 8, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.46 PM (2).jpeg`, title: 'Team Moment 4', category: 'training' },
    { id: 9, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.46 PM (3).jpeg`, title: 'Team Moment 5', category: 'training' },
    { id: 10, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.47 PM.jpeg`, title: 'Team Moment 6', category: 'events' },
    { id: 11, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.47 PM (1).jpeg`, title: 'Team Moment 7', category: 'events' },
    { id: 12, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.47 PM (2).jpeg`, title: 'Team Moment 8', category: 'events' },
    { id: 13, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.47 PM (3).jpeg`, title: 'Team Moment 9', category: 'events' },
    { id: 14, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.48 PM.jpeg`, title: 'Team Moment 10', category: 'games' },
    { id: 15, type: 'image', src: `${whatsappFolder}/WhatsApp Image 2026-01-05 at 5.34.48 PM (1).jpeg`, title: 'Team Moment 11', category: 'games' },

    // Video - local video file
    {
      id: 4,
      type: 'video',
      src: '/images/gallery/video1.mp4',
      thumbnail: '/images/gallery/Training.jpeg',
      title: 'Program Highlights',
      category: 'training'
    },
  ];

  // Filter media based on active tab
  const filteredMedia = activeTab === 'all'
    ? mediaItems
    : activeTab === 'photos'
      ? mediaItems.filter(item => item.type === 'image')
      : activeTab === 'videos'
        ? mediaItems.filter(item => item.type === 'video')
        : mediaItems.filter(item => item.category === activeTab);

  const categories = [
    { id: 'all', label: 'All', icon: <Grid className="w-4 h-4" /> },
    { id: 'photos', label: 'Photos', icon: <Camera className="w-4 h-4" /> },
    { id: 'videos', label: 'Videos', icon: <Film className="w-4 h-4" /> },
    { id: 'training', label: 'Training' },
    { id: 'games', label: 'Games' },
    { id: 'events', label: 'Events' },
    { id: 'facilities', label: 'Facilities' },
  ];

  const openLightbox = (item, index) => {
    setSelectedMedia(item);
    if (item.type === 'image') {
      const imageIndex = filteredMedia.filter(m => m.type === 'image').findIndex(m => m.id === item.id);
      setCurrentImageIndex(imageIndex);
    }
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction) => {
    const images = filteredMedia.filter(m => m.type === 'image');
    if (direction === 'next') {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedMedia(images[nextIndex]);
    } else {
      const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedMedia(images[prevIndex]);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-red-500">GALLERY</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the journey of our athletes through photos and videos
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="sticky top-0 z-20 bg-black/95 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 md:gap-4 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category.icon}
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredMedia.map((item, index) => (
                <div
                  key={item.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-900 aspect-square"
                  onClick={() => openLightbox(item, index)}
                >
                  {item.type === 'image' ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={item.thumbnail || '/images/video-placeholder.jpg'}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 p-4 rounded-full group-hover:bg-red-600/70 transition-colors">
                          <Play className="w-8 h-8 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredMedia.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl">No media found in this category</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-60"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {selectedMedia.type === 'image' ? (
              <>
                {/* Image display */}
                <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    width={1920}
                    height={1080}
                    className="object-contain max-w-full max-h-full"
                  />

                  {/* Navigation arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Image title */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-lg font-semibold">{selectedMedia.title}</p>
                </div>
              </>
            ) : (
              /* Video display */
              <div className="relative w-full max-w-4xl aspect-video">
                {selectedMedia.src.includes('youtube') || selectedMedia.src.includes('vimeo') ? (
                  <iframe
                    src={selectedMedia.src}
                    title={selectedMedia.title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    className="w-full h-full rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}