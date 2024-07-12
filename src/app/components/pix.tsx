import { useState } from "react";




function Pix() {

  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className={`relative border rounded-lg p-4 shadow-lg ${isSelected ? 'border-customGreen' :'border-gray-300'}`}>
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-gray-300 h-4 w-12 rounded-full flex items-center justify-center font-bold text-sm">
        Pix
      </div>
      <div className="flex flex-col items-start">
        <div className="text-xl font-semibold">1x R$ 36.000,00</div>
        <div className="text-green-500 font-medium">Ganhe 3% de Cashback</div>
        <button
        className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white focus:outline-none ${
          isSelected ? 'bg-customGreen' : 'bg-gray-200'
        }`}
        onClick={handleCheckboxClick}
      >
        {isSelected && '✓'}
      </button>
        <div className="bg-blue-900 text-white text-sm font-semibold rounded-md px-4 py-2 mt-2 relative cut-corner ">
        🤑 R$ 1080,00 de volta no seu Pix na hora
        </div>
      </div>
    </div>
  );
}

export default Pix;
