import React from 'react'

function formatCardNumber(value: string) {
    const onlyDigits = value.replace(/\D/g, "");
    const truncatedDigits = onlyDigits.substring(0, 16);
    const formattedNumber = truncatedDigits.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedNumber.trim();
  }
  


function FormCardNumber({
    formCardNumber,
    handleChange,
  }: {
    formCardNumber: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  }) {
    
  
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
       Numero do Cartão
      </label>
      <input
        id="cardNumber"
        type="text"
        placeholder="5176 8492 3728 3061"
        value={formatCardNumber(formCardNumber)}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  )
}

export default FormCardNumber