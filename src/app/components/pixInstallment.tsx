import { Dispatch, SetStateAction } from "react";
import FixedNavigationButton from "./navigatorButton";


function PixItem({ title, amount, cet, isSelected, onClick, index, totalItems, nextPage, setNextPage}: {

  title: string,
  amount: string,
  cet: string,
  isSelected: boolean;
  onClick: () => void;
  index: number,
  totalItems: number,
  nextPage: boolean,
  setNextPage: Dispatch<SetStateAction<boolean>>,


}) {


  const borderColor = isSelected ? 'border-customGreen' :  'border-gray-300';
  const borderTop = index === 0 ? 'rounded-t-lg' :'' ;
  const borderBottom = index === totalItems - 2 ? 'rounded-b-lg' : '';
 

  return (
    <div>
    <div className={`relative border p-4 shadow-lg ${borderColor} ${borderTop} ${borderBottom}`}
    onClick={onClick}
    >
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-gray-300 h-6 w-28 rounded-full flex items-center justify-center font-bold text-sm">
        {title}
      </div>
      <div className="flex flex-col items-start">
        <div className="text-xl font-semibold">{amount}</div>
        <div className="text-gray-400"> {cet}</div>
        <button
          className={`absolute top-4 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white focus:outline-none ${isSelected ? 'bg-customGreen' : 'bg-gray-200'
            }`}
          
        >
          {isSelected && '✓'}
        </button>
       
      </div>
     
    </div>
    <div className='flex flex-row justify-center mt-1 mb-2'>
  
     <FixedNavigationButton setNextPage={setNextPage} isVisible={isSelected}></FixedNavigationButton>
    </div>
     </div> );
}

export default PixItem;
