import Installment from "./Installment";
import calculateProgressiveDiscount from "../utils/InstallmentPix";
import Pix from "./pix";
import { useState } from "react";

function unformatValue(value: string): number {
    // Remove 'R$', espaços e pontos
    const cleanedValue = value
      .replace('R$', '')        
      .replace(/\s/g, '')       
      .replace(/\./g, '')      
      .replace(',', '');   
  
    // Converte a string limpa em um número
    return parseFloat(cleanedValue);
  }

function InstallmentList({paymentAmount}: {paymentAmount: string}) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);


  const totalDiscountRate = "3%";
  const monthlyDiscountRate = 0.0025;
  const initialAmount = unformatValue(paymentAmount);
  console.log(paymentAmount);
  const cashback = Number((initialAmount * 0.03/100).toFixed(2)).toLocaleString(
    "pt-BR",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );

  const pixData = calculateProgressiveDiscount(
    initialAmount,
    monthlyDiscountRate
  );

  function handleSelect(item: string) {
    if (selectedItem !== item) {
      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  }

  return (
    <div className="w-full p-5 max-w-md mx-auto">
      <div className="mb-10">
        <Pix
          title={pixData[0].title}
          amount={pixData[0].amount}
          cashback={totalDiscountRate}
          cashbackAmount={cashback}
          isSelected={selectedItem === "pix"}
          onClick={() => handleSelect("pix")}
          cet={pixData[0].cet}
        />
      </div>

      {pixData.slice(1).map((item, index) => (
        <Installment
          key={index}
          index={index}
          title={item.title}
          amount={item.amount}
          installment={item.installment}
          cet={item.cet}
          isSelected={selectedItem === `pixItem-${index + 1}`}
          onClick={() => handleSelect(`pixItem-${index + 1}`)}
          totalItems={pixData.length}
        ></Installment>
      ))}
    </div>
  );
}

export default InstallmentList;
