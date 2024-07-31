'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TransactionContextProps {
  amount: string;
  installment: number;
  setAmount: (amount: string) => void;
  setInstallment: (installment: number) => void;
  deadline: string;
  setDeadline: (deadline: string) => void;
  cet: string;
  setCet: (cet: string) => void;
  idTransaction: string;
  setIdTransaction: (idTransaction: string) => void;
}

const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export const TransactionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [amount, setAmount] = useState<string>('0');
  const [installment, setInstallment] = useState<number>(1);
  const [deadline, setDeadline] = useState<string>('0')
  const [cet, setCet] = useState<string>('0')
  const [idTransaction, setIdTransaction] = useState<string>('0')

  return (
    <TransactionContext.Provider value={{ amount, installment, setAmount, setInstallment, deadline, setDeadline, cet, setCet, idTransaction, setIdTransaction }}>
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
