import React, { useState, useEffect } from 'react';
import HeaderWoovi from './header';

function ModalPayment({ isOpen, onClose }: any) {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsProcessing(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-green-100 border-black p-6 rounded-lg shadow-lg">
        {isProcessing ? (
          <div className="flex flex-col items-center">
            <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 mb-4"></div>
            <p className="text-lg font-semibold">Processando pagamento...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center ">
            <HeaderWoovi/>
            <p className="text-lg font-semibold">Pagamento processado com sucesso.</p>
            <p className="text-lg font-semibold">Agradecemos a preferencia!</p>
            <button
              className="mt-4 px-4 py-2 bg-customGreen text-white rounded-full"
              onClick={onClose}
            >
              Voltar ao inicio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalPayment;
