
function Pix({ title, amount, cashback, cashbackAmount, isSelected, onClick }: {
  title: string,
  amount: string,
  cashback: string,
  cashbackAmount: string,
  isSelected: boolean;
  onClick: () => void;
}) {




  return (
    <div className={`relative border rounded-lg p-4 shadow-lg ${isSelected ? 'border-customGreen' : 'border-gray-300'}`}>
      <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-gray-300 h-4 w-12 rounded-full flex items-center justify-center font-bold text-sm">
        {title}
      </div>
      <div className="flex flex-col items-start">
        <div className="text-xl font-semibold">{amount}</div>
        <div className="text-green-500 font-medium">{cashback}</div>
        <button
          className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-white focus:outline-none ${isSelected ? 'bg-customGreen' : 'bg-gray-200'}`}
          onClick={onClick}
        >
          {isSelected && '✓'}
        </button>
        <div className="bg-blue-900 text-white text-sm font-semibold rounded-md px-4 py-2 mt-2 relative cut-corner w-full">
          {cashbackAmount}
        </div>
      </div>
    </div>
  );
}

export default Pix;
