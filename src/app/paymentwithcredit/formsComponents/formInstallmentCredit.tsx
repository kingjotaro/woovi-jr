import React from "react";

function FormInstallmentCredit({ pixData, setAmountItem, setInstallmentItem, numberInstallment }: { numberInstallment: number, pixData: any, setAmountItem: (amount: number) => void, setInstallmentItem: (installment: number) => void }) {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    if (selectedIndex >= 0) {
      const selectedOption = pixData[selectedIndex];
      setInstallmentItem(selectedOption.installment);
      setAmountItem(selectedOption.amount);
    } 
  };

 

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
        onChange={handleChange}
        defaultValue={pixData[numberInstallment] ? pixData[numberInstallment].installment : ""}
      >
        {pixData.map((item: any, index: number) => (
          <option key={index} value={item.installment}>
            {`${item.installment}x de R$${item.amount}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormInstallmentCredit;
