import React from 'react';
import { useTransaction } from '../pixcontext';

function HeaderDynamic({header, headerUniquePix}: {header: string, headerUniquePix: string} ) {

  const { installment} = useTransaction();

  const evaluateHeader = (installment === 0) ? header : (installment === 1) ? headerUniquePix : header

  return (
    <div className='text-center text-md font-extrabold text-[#4D4D4D] p-2'>
       {evaluateHeader}
    </div>
  );
}

export default HeaderDynamic;
