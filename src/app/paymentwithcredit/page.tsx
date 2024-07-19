"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PaymentForm from "./paymentForm";
import PreviousButton from "../components/previousButton";

import { useTransaction } from "../pixcontext";
import PaymentDeadline from "../components/PaymentDeadline";
import Installment from "../components/installment/InstallmentPaymentList";
import FinishButton from "../components/endProcess";
import calculateProgressiveDiscount from "../utils/mockPix";

export default function Page2() {
  const { amount, installment, deadline, cet, idTransaction } =useTransaction();

  const headerPage = `João, pague o restante em ${installment - 1}x no cartão`;


  const monthlyDiscountRate = 0.0025;
  const initialAmount = 36000
  const AmountParse = parseFloat(amount.replace(".", ""));

  const totalAmount = initialAmount-AmountParse

  const month = 11;
  const pixData = calculateProgressiveDiscount(totalAmount, month, monthlyDiscountRate);

  console.log(amount)
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header />
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <PaymentForm amount={amount} installment={installment}/>

      <PaymentDeadline deadline={deadline} />
      <Installment
       
        cet={cet}
        idTransaction={idTransaction}
        process={"credit"} 
        amount={amount} 
        installments={installment}      ></Installment>
      <div className="flex flex-row items-center gap-2 mb-2 mt-2">
        <PreviousButton />
        <FinishButton />
      </div>

      <Footer></Footer>
    </div>
  );
}
