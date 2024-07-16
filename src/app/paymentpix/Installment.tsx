// src/InstallmentComponent.js
import React from 'react';

const InstallmentComponent = () => {
  return (
    <div className="relative flex flex-col space-y-4 p-4 border rounded-lg">
      <div className="absolute left-[21px] top-10 bottom-6 w-0.5 bg-gray-300"></div>
      <div className="flex items-center space-x-2 justify-between">
        <div className="relative flex items-center ">
          <input
            type="radio"
            name="payment"
            readOnly
            checked
          />
          <label htmlFor="pix" className="ml-2">1ª entrada no Pix</label>
        </div>
        <div className="ml-auto text-right text-gray-700 font-semibold">
          R$ 15.300,00
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <div className="relative flex items-center">
          <input
            type="radio"
            name="payment"
           
        
          />
          <label htmlFor="card" className="ml-2">2ª no cartão</label>
        </div>
        <div className="ml-auto text-right text-gray-700 font-semibold">
          R$ 15.300,00
        </div>
      </div>
    </div>
  );
};

export default InstallmentComponent;
