'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import InstallmentComponent from "../components/Installment";
import PreviousButton from "../components/previousButton";
import Qrcode from "./qrcode";
import { useTransaction } from '../pixcontext';
import PaymentDeadline from "../components/PaymentDeadline";
import NextButton from "../components/nextButton";



export default function Page2() {

  const { amount, installment, deadline, cet, idTransaction } = useTransaction();



 const headerPage = `João, pague a entrada de
${amount} pelo Pix`

const headerUniquePix = `João realize seu pagamento de ${amount} pelo Pix`

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header></Header>
      <HeaderDynamic header={headerPage} headerUniquePix={headerUniquePix}></HeaderDynamic>
      <Qrcode></Qrcode>
      
      <PaymentDeadline deadline={deadline}/> 
      <InstallmentComponent amount={amount} installments={installment} cet={cet} idTransaction={idTransaction}></InstallmentComponent>
     
      <div className="flex flex-row items-center gap-2 mb-2 mt-2">
      <PreviousButton/>
      <NextButton isVisible={true} amount={amount} installment={installment} cet={cet} idTransaction={idTransaction}></NextButton>
      </div>
      
      
   
    <Footer></Footer>
    </div>
    
  
  );
}
