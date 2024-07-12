import { useState } from "react";

function PixItem({ title, amount, cet }:  {
  title: string ,
  amount: string,
  cet: string,
} ) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`relative border rounded-lg p-4 shadow-lg ${isSelected ? 'border-customGreen' : 'border-gray-300'}`}>
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-gray-300 h-4 w-12 rounded-full flex items-center justify-center font-bold text-sm">
        {title}
      </div>
      <div className="flex flex-col items-start">
        <div className="text-xl font-semibold">{amount}</div>
        <div className="text-gray-400"> {cet}</div>
        <button
          className={`absolute top-4 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white focus:outline-none ${
            isSelected ? 'bg-customGreen' : 'bg-gray-200'
          }`}
          onClick={handleCheckboxClick}
        >
          {isSelected && '✓'}
        </button>
      </div>
    </div>
  );
}

export default PixItem;
