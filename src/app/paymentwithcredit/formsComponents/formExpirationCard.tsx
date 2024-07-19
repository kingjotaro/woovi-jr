import React from 'react';

function formatExpirationDate (value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{2})\d+$/, '$1');
  };
  

function FormExpirationCard({
  formDataExpirationCard,
  handleChange,
}: {
  formDataExpirationCard: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="w-1/2 mr-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="expiry"
      >
        Vencimento
      </label>
      <input
        id="expiry"
        type="text"
        placeholder="10/11"
        value={formatExpirationDate(formDataExpirationCard)}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default FormExpirationCard;
