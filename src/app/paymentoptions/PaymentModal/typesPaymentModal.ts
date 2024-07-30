export type PaymentModalProps = {
    isOpen: boolean;
    onClose: () => void;
    setPaymentAmount: React.Dispatch<React.SetStateAction<string>>;
    paymentAmount: string;
  }