import React from 'react';
import Header from "../../components/header";
import { PaymentModalProps } from './typesPaymentModal';

function formatValue(value: string) {
  const cleanedValue = value.replace(/\D/g, '');
  const formattedValue = cleanedValue
    .replace(/(\d)(\d{2})$/, '$1,$2') 
    .replace(/(?=(\d{3})+(\D))\B/g, '.'); 

  return `R$ ${formattedValue}`;
}



export default function PaymentModal({
  isOpen,
  onClose,
  setPaymentAmount,
  paymentAmount
}: PaymentModalProps) {

  function handleSubmit() {

    const amount = parseFloat(paymentAmount.replace(/\D/g, ''));


    if (amount <= 199) {
      alert('O valor minimo de pagamento é de R$ 2,00');
      return;
    }

    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-60"></div>
      <div className="flex flex-col items-center justify-center bg-white rounded border border-gray-600 p-5 z-50">
        <Header />
        <h2 className="text-xl mb-4">Qual o valor do pagamento?</h2>
        <input
          type="text"
          value={formatValue(paymentAmount)}
          onChange={(e) => setPaymentAmount(e.target.value)}
          className="border p-2 w-full mb-4 rounded-xl border-gray-300"
        />
        <div className="flex mt-4 justify-between">
          <button
            className="hover:text-black border-customGreen left-4 p-2 w-24 h-10 bg-customGreen text-white rounded-full font-bold shadow-lg shadow-gren-500/50 mb-1 mt-1"
            onClick={handleSubmit}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
