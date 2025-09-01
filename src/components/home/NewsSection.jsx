import React from 'react';
import NewsCard from '../ui/NewsCard';
import { news } from '../../lib/siteData';

const NewsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">RECENT NEWS</h2>
          <button className="hidden sm:block border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
            Show More
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((article, index) => {
            const newsImages = [
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3", // Classroom/academics
              "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Basketball training
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3", // Basketball court
              "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", // Basketball skills
              "https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3", // Team basketball
              "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"  // Basketball defense
            ];
            
            return (
              <NewsCard
                key={article.id}
                imgSrc={newsImages[index] || newsImages[0]}
                category={article.category}
                author={article.author}
                title={article.title}
                date={article.date}
              />
            );
          })}
        </div>
        
        <button className="sm:hidden mt-8 w-full border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
          Show More
        </button>
      </div>
    </section>
  );
};

export default NewsSection;