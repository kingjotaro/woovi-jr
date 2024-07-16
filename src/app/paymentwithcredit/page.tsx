'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import InstallmentComponent from "../paymentpix/Installment";
import PaymentForm from "./paymentForm";
import PreviousButton from "../components/previousButton";
import PaymentDeadline from "../components/timeLimit";
import TotalComponent from "../components/custoTotal";


export default function Page2() {

 const headerPage = `João, pague o restante em 1x no cartão`

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header/>
      <HeaderDynamic header={headerPage}></HeaderDynamic>
      <PaymentForm/>
     
      <PaymentDeadline/> 
      <InstallmentComponent/>
      <TotalComponent/>
      <PreviousButton/>
      
   
    <Footer></Footer>
    </div>
    
  
  );
}
