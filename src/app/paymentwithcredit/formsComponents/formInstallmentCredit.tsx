import React from "react";

function FormInstallmentCredit({ pixData }: { pixData: any }) {
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
        {pixData.map((item: any, index: number) => (
          <option key={index} value={item.installment}>
            {`${item.title} - ${item.installment}x de R$${item.amount}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormInstallmentCredit;
