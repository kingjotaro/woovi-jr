import React from "react";

function formatCVV (value: string) {
  return value.replace(/\D/g, "").replace(/^(\d{3})\d+$/, "$1");
};


function FormVerifyDigit({
    formDataCVV,
    handleChange,
  }: {
    formDataCVV: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
  }) {
    return (
  <div className="w-1/2 ml-2">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
      CVV
    </label>
    <input
      id="cvv"
      type="text"
      placeholder="405"
      value={formatCVV(formDataCVV)}
      onChange={handleChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  )
}

export default FormVerifyDigit;
