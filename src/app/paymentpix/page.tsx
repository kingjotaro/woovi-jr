'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import InstallmentComponent from "./Installment";
import FixedNavigationButton from "../components/nextButton";
import PreviousButton from "../components/previousButton";
import Qrcode from "./qrcode";
import PaymentDeadline from "../components/timeLimit";
import TotalComponent from "../components/custoTotal";
import { useTransaction } from '../pixcontext';



export default function Page2() {

  const { amount, installment } = useTransaction();



 const headerPage = `João, pague a entrada de
R$ ${amount} pelo Pix`

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header></Header>
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <Qrcode></Qrcode>
      
      <PaymentDeadline></PaymentDeadline> 
      <InstallmentComponent amount={amount} installments={installment}></InstallmentComponent>
      <TotalComponent></TotalComponent>
    
      <div className="flex flex-row items-center gap-2">
      <PreviousButton/>
      <FixedNavigationButton isVisible={true} amount={amount} installment={installment}></FixedNavigationButton>
      </div>
      
      
   
    <Footer></Footer>
    </div>
    
  
  );
}
