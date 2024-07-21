import React from "react";

function InstallmentCredit(pixData: any) {
  const installmentValue = pixData.installmentValue;
  console.log(pixData);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="installments"
      >
        Parcelas
      </label>
      <select
        id="installments"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Selecione...</option>
        {installmentValue}
      </select>
    </div>
  );
}

export default InstallmentCredit;
