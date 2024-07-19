import React, { useEffect, useState } from 'react';

function InstallmentPaymentCredit({ installments, amount, process }: any) {
  const [isChecked, setIsChecked] = useState(process !== 'pix');

  useEffect(() => {
    setIsChecked(process !== 'pix');
  }, [process]);

console.log(amount)
  return (
    <div>
      {[...Array(installments - 1)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between space-y-2"
        >
          <div className="relative flex items-center">
            <input type="checkbox" name="payment" readOnly checked={isChecked}  className='accent-customGreen' />
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

export default InstallmentPaymentCredit;
