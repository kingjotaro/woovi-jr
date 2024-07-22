"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PaymentForm from "./paymentForm";
import PreviousButton from "../components/previousButton";
import { useTransaction } from "../pixcontext";
import PaymentDeadline from "../components/PaymentDeadline";
import InstallmentPaymentListCredit from "../components/installment/InstallmentPaymentListCredit";
import FinishButton from "../components/endProcess";
import ReInstallmentPix from "../utils/ReInstallmentPix";
import { useState } from "react";
import CostEffective from "../components/costEffective";


export default function Page2() {
  const { amount, installment, deadline, cet, idTransaction } =
    useTransaction();

  const [amountItem, setAmountItem] = useState<string>(amount);
  const [installmentItem, setInstallmentItem] = useState<number>(installment-1);

  const headerPage = `João, pague o restante em ${installment - 1}x no cartão`;

  const monthlyDiscountRate = 0.0025;

  const AmountParse = parseFloat(amount.replace(".", ""));
  const AmountParseCET = parseFloat(cet.replace(".", ""));
  const totalAmount = AmountParseCET - AmountParse;

  const pixData = ReInstallmentPix(
    totalAmount,
    installment - 1,
    monthlyDiscountRate
  );

  type InstallmentDetailsType = {
    cet: string;
    idTransaction: string;
    process: string;
    amount: string;
    installmentNumber: number;
    installmentAmount: string;
  };

  const installmentDetails: InstallmentDetailsType = {
    cet,
    idTransaction,
    process: "credit",
    amount: amount,
    installmentNumber: installmentItem,
    installmentAmount: amountItem,
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header />
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <PaymentForm
        pixData={pixData}
        setAmountItem={setAmountItem}
        setInstallmentItem={setInstallmentItem}
      />
      <PaymentDeadline deadline={deadline} />
      <div>
  
        <InstallmentPaymentListCredit
          installmentDetails={installmentDetails}
        ></InstallmentPaymentListCredit>
        <CostEffective
          amount={amount}
          installment={installmentDetails.installmentNumber}
          cet={cet}
          idTransaction={idTransaction}
        ></CostEffective>
      </div>
      <div className="flex flex-row items-center gap-2 mb-2 mt-2">
        <PreviousButton />
        <FinishButton />
      </div>
      <Footer></Footer>
    </div>
  );
}
