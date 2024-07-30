import NextButton from "../../components/nextButtons/NextButton";
import getTransactionId64 from "../../utils/getFormatedDate";
import { InstallmentProps } from "./typeInstallment";

function Installment({
  title,
  amount,
  cet,
  isSelected,
  onClick,
  index,
  totalItems,
  installment,
}: InstallmentProps) {

  let id = getTransactionId64();
  const borderColor = isSelected ? "border-customGreen" : "border-gray-300";

  const borderTop = index === 0 ? "rounded-t-lg" : "";
  const borderBottom = index === totalItems - 2 ? "rounded-b-lg" : "";

  return (
    <div>
      <div
        className={`hover:border-customGreen relative border p-4 shadow-lg ${borderColor} ${borderTop} ${borderBottom}`}
        onClick={onClick}
      >
        <div className="absolute top-0 left-4 transform -translate-y-1/2 bg-gray-300 h-6 w-28 rounded-full flex items-center justify-center font-bold text-sm">
          {title}
        </div>
        <div className="flex flex-col items-start">
          <div className="text-xl font-bold text-neutral-600">
            {installment + "x "}
            <span className="font-normal">{`R$ ${amount}`}</span>
          </div>
          <div className="text-gray-400"> {`Total R$ ${cet}`}</div>
          <button
            className={`absolute top-4 right-1 w-6 h-6 rounded-full flex items-center justify-center text-white focus:outline-none ${
              isSelected ? "bg-customGreen" : "bg-gray-200"
            }`}
          >
            {isSelected && "✓"}
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <NextButton
          isVisible={isSelected}
          installment={installment}
          amount={amount}
          cet={cet}
          idTransaction={id}
        ></NextButton>
      </div>
    </div>
  );
}

export default Installment;
