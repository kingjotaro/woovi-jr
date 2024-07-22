import React from "react";
import UniquePix from "./UniquePix";
import InstallmentPix from "./InstallmentPix";
import InstallmentPaymentCredit from "./InstallmentPaymentCredit";

type InstallmentDetailsType = {
  cet: string;
  idTransaction: string;
  process: string;
  amount: string;
  installmentNumber: number;
  installmentAmount: string;
};

interface InstallmentPaymentListProps {
  installmentDetails: InstallmentDetailsType;
}

function InstallmentPaymentListCredit({
  installmentDetails,
}: InstallmentPaymentListProps) {
  const {
    amount,
    installmentNumber,
    installmentAmount,
    process,
  } = installmentDetails;
  return (
    <div>
      <div className="absolute left-[21px] top-10 bottom-6 w-0.5 bg-gray-300"></div>
      <div className="flex items-center space-x-2 justify-between">
        <InstallmentPix process={process}></InstallmentPix>
        <div className="ml-auto text-right text-gray-700 font-semibold">
          R$ {amount}
        </div>
      </div>
      <InstallmentPaymentCredit
        installment={installmentNumber}
        amount={installmentAmount}
        process={process}
      ></InstallmentPaymentCredit>
    </div>
  );
}

export default InstallmentPaymentListCredit;
