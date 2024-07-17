import React from 'react';
import CostEffective from '../components/costEffective';



function InstallmentComponent({ amount, installments }: {
  amount: string,
  installments: number,}) {
  



  return (
    <div>
    <div className="relative flex flex-col space-y-4 p-4 border rounded-t-lg">
      {installments === 1 ? (
        <div className="flex items-center space-x-2 justify-between">
          <div className="relative flex items-center ">
            <input
              type="radio"
              name="payment"
              readOnly
              checked
            />
            <label htmlFor="pix" className="ml-2">À vista no Pix</label>
          </div>
          <div className="ml-auto text-right text-gray-700 font-semibold">
            R$ {amount}
          </div>
        </div>
      ) : (
        <>
        
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
              R$ {amount}
            </div>
          </div>
          {[...Array(installments - 1)].map((_, index) => (
            <div key={index} className="flex items-center space-x-2 justify-between">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="payment"
                />
                <label htmlFor={`card-${index + 1}`} className="ml-2">{index + 2}ª no cartão</label>
              </div>
              <div className="ml-auto text-right text-gray-700 font-semibold">
                R$ {amount}
              </div>
            </div>
          ))}
        </>
      )}
      
    </div>
    <CostEffective/>
    
    </div>
  );
};

export default InstallmentComponent;
