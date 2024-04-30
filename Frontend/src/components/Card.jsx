import React from "react";

const Card = ({ title, imageUrl, pdfUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between">
          <a href={pdfUrl} className="text-blue-500 hover:underline">PDF</a>
          <a href={imageUrl} className="text-blue-500 hover:underline">Image</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
