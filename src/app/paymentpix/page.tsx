"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import PreviousButton from "../components/previousButton";
import Qrcode from "./qrcode";
import { useTransaction } from "../pixcontext";
import PaymentDeadline from "../components/PaymentDeadline";
import NextButton from "../components/nextButton";
import InstallmentPaymentList from "../components/installment/InstallmentPaymentList";
import FinishButton from "../components/endProcess";

export default function Page2() {
  const { amount, installment, deadline, cet, idTransaction } =
    useTransaction();

  const headerPage = `João, pague a entrada de R$ ${amount} pelo Pix`;
  const headerUniquePix = `João realize seu pagamento de R$ ${amount} pelo Pix`;

  const header = installment === 1 ? headerUniquePix : headerPage;

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
      <Header></Header>
      <HeaderDynamic header={header}></HeaderDynamic>
      <Qrcode></Qrcode>

      <PaymentDeadline deadline={deadline} />

      <InstallmentPaymentList
        installmentDetails={installmentDetails}
      ></InstallmentPaymentList>

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
