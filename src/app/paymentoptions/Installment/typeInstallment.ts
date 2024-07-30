export type InstallmentProps = {
    title: string;
    amount: string;
    cet: string;
    isSelected: boolean;
    onClick: () => void;
    index: number;
    totalItems: number;
    installment: number;
  }