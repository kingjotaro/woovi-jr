"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PaymentForm from "./paymentForm";
import PreviousButton from "../components/previousButton";

import { useTransaction } from "../pixcontext";
import PaymentDeadline from "../components/PaymentDeadline";
import InstallmentPaymentList from "../components/installment/InstallmentPaymentList";
import FinishButton from "../components/endProcess";
import calculateProgressiveDiscount from "../utils/InstallmentPix";

export default function Page2() {
  const { amount, installment, deadline, cet, idTransaction } =
    useTransaction();

  const transactionDetails = {
    cet,
    idTransaction,
    process: "credit",
    amount,
    installment,
  };

  const headerPage = `João, pague o restante em ${installment - 1}x no cartão`;

  const initialAmount = amount;
  const totalMonths = installment;
  const monthlyDiscountRate = 0.0025;

  const AmountParse = parseFloat(amount.replace(".", ""));
  const AmountParseCET = parseFloat(cet.replace(".", ""));
  console.log(AmountParse);

  const totalAmount = AmountParseCET - AmountParse;
  console.log(totalAmount);

  const month = 11;
  const pixData = calculateProgressiveDiscount(
    totalAmount,
    month,
    monthlyDiscountRate
  );

  type InstallmentDetailsType = {
    cet: string;
    idTransaction: string;
    process: string;
    amount: string;
    installment: number;
  };

  const installmentDetails: InstallmentDetailsType = {
    cet,
    idTransaction,
    process: "credit",
    amount,
    installment,
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header />
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <PaymentForm
        amount={amount}
        installment={installment}
        pixData={pixData}
      />

      <PaymentDeadline deadline={deadline} />
      <InstallmentPaymentList
        installmentDetails={installmentDetails}
      ></InstallmentPaymentList>
      <div className="flex flex-row items-center gap-2 mb-2 mt-2">
        <PreviousButton />
        <FinishButton />
      </div>

      <Footer></Footer>
    </div>
  );
}
