import React from 'react';
import { useRouter } from 'next/navigation';

function FixedNavigationButton({ isVisible}:  any ) {
  const router = useRouter();

  function next() {
    router.push('/page2');
    console.log('Navigating to the next page');
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
