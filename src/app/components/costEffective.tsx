import React, { useState } from "react";

function formatNumber(number: number) {
  return number.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function costEffective({
  installment,
  cet,
  idTransaction,
  amount,
  process,
  installmentAmount,
}: {
  amount: string;
  installment: number;
  cet: string;
  idTransaction: string;
  process: string;
  installmentAmount: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const amountFloat = parseFloat(amount.replace(".", "").replace(",", "."));
  const installmentFloat = parseFloat(
    installmentAmount.replace(".", "").replace(",", ".")
  );
  const CETrecalc = amountFloat + installmentFloat * installment;

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const cetValue =
    process === "credit"
      ? 0.25 * installment
      : installment === 1
      ? 0
      : 0.25 * (installment - 1);


  const formattedCET = cetValue.toFixed(2).replace(".", ",");
  const CET =
    process === "credit"
      ? formatNumber(CETrecalc)
      : installment === 1
      ? amount
      : cet;

  return (
    <div>
      <div className="border p-4 rounded-b-lg max-w-md w-screen">
        <div className="flex justify-between text-sm text-gray-700">
          <span>CET: {formattedCET}%</span>
          <span>Total: R${CET}</span>
        </div>
        <div className="border-t my-2"></div>
        <div>
          <button
            onClick={toggleDetails}
            className="flex justify-between w-full text-left text-gray-900 font-semibold"
          >
            Como funciona?
            <span
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              {" "}
              ⭣
            </span>
          </button>
          {isOpen && (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/86yn-7_hhfY?start=2"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500 flex flex-col items-center justify-center">
        Identificador:
        <div className="mt-1 text-xs text-gray-400 mb-1">{idTransaction}</div>
      </div>
    </div>
  );
}

export default costEffective;
