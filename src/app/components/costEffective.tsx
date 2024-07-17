import React, { useState } from 'react';

function costEffective({installment, cet, idTransaction}: {amount:string, installment:number, cet: string, idTransaction: string}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const cetValue = (installment === 1) ? 0 : 0.257 * (installment - 1)
  const formattedCET = cetValue.toFixed(2).replace('.', ',');
  

  return (
    <div>
    <div className="border p-4 rounded-b-lg">
      <div className="flex justify-between text-sm text-gray-700">
        <span>CET: {formattedCET}%</span>
        <span>{cet}</span>
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
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
       ></iframe>
        )}
      </div>
      
    </div>
    <div className="mt-2 text-sm text-gray-500 flex flex-col items-center justify-center">
    Identificador:
    <div className="mt-1 text-xs text-gray-400">
     {idTransaction}
    </div>
    </div>
    </div>
  );
};

export default costEffective;
