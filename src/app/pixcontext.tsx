'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TransactionContextProps {
  amount: string;
  installment: number;
  setAmount: (amount: string) => void;
  setInstallment: (installment: number) => void;
  deadline: string;
  setDeadline: (deadline: string) => void;
}

const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [amount, setAmount] = useState<string>('');
  const [installment, setInstallment] = useState<number>(0);
  const [deadline, setDeadline] = useState<string>('')

  return (
    <TransactionContext.Provider value={{ amount, installment, setAmount, setInstallment, deadline, setDeadline }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};
