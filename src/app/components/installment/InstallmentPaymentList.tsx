import React from "react";
import CostEffective from "../costEffective";
import UniquePix from "./UniquePix";
import InstallmentRadio from "./InstallmentPix";
import InstallmentePayments from "./InstallmentPaymentCredit";

type InstallmentDetailsType = {
  cet: string;
  idTransaction: string;
  process: string;
  amount: string;
  installment: number;
};

interface InstallmentPaymentListProps {
  installmentDetails: InstallmentDetailsType;
}

function InstallmentPaymentList({ installmentDetails }: InstallmentPaymentListProps) {

  const { amount, installment, cet, idTransaction, process } = installmentDetails;
  return (
    <div>
      <div className="relative flex flex-col space-y-2 p-4 border rounded-t-lg">
        {installment === 1 ? (
           <UniquePix amount={amount}></UniquePix>
        ) : (
          <>
            <div className="absolute left-[21px] top-10 bottom-6 w-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2 justify-between">
              <InstallmentRadio process={process}></InstallmentRadio>
              <div className="ml-auto text-right text-gray-700 font-semibold">
                R$ {amount}
              </div>
            </div>
           <InstallmentePayments installment={installment} amount={amount} process={process}></InstallmentePayments>
          </>
        )}
      </div>
      <CostEffective
        amount={amount}
        installment={installment}
        cet={cet}
        idTransaction={idTransaction}
      ></CostEffective>
    </div>
  );
}

export default InstallmentPaymentList;
