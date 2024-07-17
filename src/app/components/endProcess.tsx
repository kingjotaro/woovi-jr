import React, { useState } from 'react';
import ModalPayment from './modalPayment';
import { usePathname, useRouter } from 'next/navigation';

function FinishButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const router = useRouter();

  const pathname = usePathname()

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    router.push('/');

  }

  return (
    <div >
      <button
        className="hover:text-black border-customGreen left-4 p-2 w-24 h-10 bg-customGreen text-white rounded-full font-bold shadow-lg shadow-gren-500/50 mb-1 mt-1"
        onClick={openModal}
      >
        Finalizar 
      </button>

      <ModalPayment isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FinishButton;
