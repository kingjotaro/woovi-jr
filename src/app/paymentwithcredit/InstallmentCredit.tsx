import React from 'react';



function InstallmentCredit(pixData: any) {
  


  const formattedAmount = 100;


  const installmentValue = formattedAmount / pixData.installments;

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const installmentOptions = [...Array(pixData.installments)].map((_, index) => {
    const installmentNumber = index + 1;
    const installmentLabel = `${installmentNumber}x de ${formatCurrency(1000)}`;
    return <option key={installmentNumber} value={installmentNumber}>{installmentLabel}</option>;
  });

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="installments">
        Parcelas
      </label>
      <select
        id="installments"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Selecione...</option>
        {installmentOptions}
      </select>
    </div>
  );
}

export default InstallmentCredit;
