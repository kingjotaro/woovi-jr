"use client";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderDynamic from "../components/headerDynamic";
import InstallmentList from "./InstallmentList/InstallmentList";
import PaymentModal from "./PaymentModal/PaymentModal";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [paymentAmount, setPaymentAmount] = useState('200');

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const headerPage = "João como você deseja pagar?";

  return (
    <div className="flex min-h-screen flex-col items-center justify-between min-w-screen">
      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          paymentAmount={paymentAmount}
          setPaymentAmount={setPaymentAmount}
        />
      )}
      <Header />
      <HeaderDynamic header={headerPage} />
      <InstallmentList paymentAmount={paymentAmount} />
      <Footer />
    </div>
  );
}