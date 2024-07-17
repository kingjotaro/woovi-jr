'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import InstallmentComponent from "../paymentpix/Installment";
import PaymentForm from "./paymentForm";
import PreviousButton from "../components/previousButton";

import { useTransaction } from "../pixcontext";
import CostEffective from "../components/costEffective";
import PaymentDeadline from "../components/PaymentDeadline";


export default function Page2() {

  const { amount, installment, deadline } = useTransaction();

 const headerPage = `João, pague o restante em 1x no cartão`

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header/>
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <PaymentForm/>
     
      <PaymentDeadline deadline={deadline}/> 
      <InstallmentComponent amount={amount} installments={installment}></InstallmentComponent>
      <CostEffective/>
      <PreviousButton/>
      
   
    <Footer></Footer>
    </div>
    
  
  );
}
