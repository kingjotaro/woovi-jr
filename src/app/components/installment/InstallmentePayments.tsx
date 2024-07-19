import React from 'react';

function InstallmentPayments({ installments, amount, process }: any) {


  return (
    <div>
      {[...Array(installments - 1)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between space-y-2"
        >
          <div className="relative flex items-center">
            <input type="checkbox" name="payment" checked={process !== 'pix'} className='accent-customGreen' />
            <label htmlFor={`card-${index + 1}`} className="ml-2">
              {index + 2}ª no cartão
            </label>
          </div>
          <div className="ml-auto text-right text-gray-700 font-semibold">
            R$ {amount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InstallmentPayments;
