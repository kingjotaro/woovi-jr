// src/TotalComponent.js
import React, { useState } from 'react';

const TotalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className="border p-4 rounded-lg">
      <div className="flex justify-between text-sm text-gray-700">
        <span>CET: 0,5%</span>
        <span>Total: R$ 30.600,00</span>
      </div>
      <div className="border-t my-2"></div>
      <div>
        <button
          onClick={toggleDetails}
          className="flex justify-between w-full text-left text-gray-900 font-semibold"
        >
          Como funciona?
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}> ⭣</span>
        </button>
        {isOpen && (
         
          
         <iframe
         className="w-full h-full"
         src="https://www.youtube.com/embed/86yn-7_hhfY?start=2"
         title="YouTube video"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
       ></iframe>
        )}
      </div>
      
    </div>
    <div className="mt-2 text-sm text-gray-500 flex flex-col items-center justify-center">
    Identificador:
    <div className="mt-1 text-xs text-gray-400">
      2c1b951f356c4680b13ba1c9fc889c47
    </div>
    </div>
    </div>
  );
};

export default TotalComponent;
