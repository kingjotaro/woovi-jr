import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTransaction } from '../pixcontext';
import {generatePaymentDeadline} from '../utils/deadline'


function nextButton({ isVisible, amount, installment, cet, idTransaction}:  {
  isVisible: boolean,
  amount: string,
  installment: number,
  cet: string
  idTransaction: string
} ) {

  const deadline = generatePaymentDeadline()

  const { setAmount, setInstallment, setDeadline, setCet, setIdTransaction  } = useTransaction();

 


  const router = useRouter();

  const pathname = usePathname()

  function next() {
    if (pathname === "/") {
      router.push('/paymentpix',
        
      );
      
    }
    if (pathname === '/paymentpix') {
      router.push('/paymentwithcredit');
    }
    setAmount(amount);
    setInstallment(installment);
    setDeadline(deadline)
    setCet(cet)
    setIdTransaction(idTransaction)
  }

  return (
    isVisible && (
      <button
        className="hover:text-black border-customGreen left-4 p-2 w-24 h-10 bg-customGreen text-white rounded-full font-bold shadow-lg shadow-gren-500/50 mb-1 mt-1"
        onClick={next}
      >
        Próximo
      </button>
    )
  );
}
export default nextButton