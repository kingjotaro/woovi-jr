import React from 'react';
import { usePathname, useRouter } from 'next/navigation';


function FixedNavigationButton({ isVisible}:  any ) {
  const router = useRouter();

  const pathname = usePathname()

  function next() {
    if (pathname === "/") {
      router.push('/paymentpix');
    }
    if (pathname === '/paymentpix') {
      router.push('/paymentwithcredit');
    }
  
    
  }

  return (
    isVisible && (
      <button
        className="border-customGreen left-4 p-2 w-24 h-10 bg-customGreen text-white rounded-full shadow-lg font-bold shadow-lg shadow-gren-500/50"
        onClick={next}
      >
        Próximo
      </button>
    )
  );
}

export default FixedNavigationButton;
