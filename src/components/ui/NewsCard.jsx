import React from 'react';

const NewsCard = ({ imgSrc, category, author, title, date }) => (
  <div>
    <img src={imgSrc} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
    <div className="text-xs text-gray-400 mb-2">
      <span>BY {author}</span> / <span>{category}</span>
      {date && <span> / {date}</span>}
    </div>
    <h4 className="text-lg font-bold text-white hover:text-red-600 transition-colors cursor-pointer">{title}</h4>
  </div>
);

export default NewsCard;