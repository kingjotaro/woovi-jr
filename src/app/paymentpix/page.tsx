"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PreviousButton from "../components/previousButton";
import Qrcode from "./qrcode";
import { useTransaction } from "../pixcontext";
import PaymentDeadline from "../components/PaymentDeadline";
import NextButton from "../components/nextButton";
import Installment from "../components/Installment";
import FinishButton from "../components/endProcess";

export default function Page2() {
  const { amount, installment, deadline, cet, idTransaction } =
    useTransaction();

  const headerPage = `João, pague a entrada de R$ ${amount} pelo Pix`;
  const headerUniquePix = `João realize seu pagamento de R$ ${amount} pelo Pix`;

  const header = installment === 1 ? headerUniquePix : headerPage;

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  min-w-screen">
      <Header></Header>
      <HeaderDynamic header={header}></HeaderDynamic>
      <Qrcode></Qrcode>

      <PaymentDeadline deadline={deadline} />
      <Installment
        amount={amount}
        installments={installment}
        cet={cet}
        idTransaction={idTransaction}
      ></Installment>

      <div className="flex flex-row items-center gap-2 mb-2 mt-2">
        <PreviousButton />
        {installment === 1 ? (
          <FinishButton />
        ) : (
          <NextButton
            isVisible={true}
            amount={amount}
            installment={installment}
            cet={cet}
            idTransaction={idTransaction}
          ></NextButton>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
}
