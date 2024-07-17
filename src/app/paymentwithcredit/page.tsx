'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PaymentForm from "./paymentForm";
import PreviousButton from "../components/previousButton";

import { useTransaction } from "../pixcontext";
import PaymentDeadline from "../components/PaymentDeadline";
import Installment from "../components/Installment";


export default function Page2() {

  const { amount, installment, deadline, cet, idTransaction } = useTransaction();

 const headerPage = `João, pague o restante em ${installment-1}x no cartão`

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header/>
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <PaymentForm/>
     
      <PaymentDeadline deadline={deadline}/> 
      <Installment amount={amount} installments={installment} cet={cet} idTransaction={idTransaction}></Installment>
      <div className="flex flex-row items-center gap-2 mb-2 mt-2">

      <PreviousButton/>
      </div>
    
      
   
    <Footer></Footer>
    </div>
    
  
  );
}
