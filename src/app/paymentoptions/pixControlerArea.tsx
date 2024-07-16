import PixItem from './pixInstallment';
import calculateProgressiveDiscount from '../utils/mockPix'
import Pix from './pix';
import { useState } from 'react';

function PixList() {

    const [selectedItem, setSelectedItem] = useState<string | null>(null);


    const totalDiscountRate = "3%";
    const monthlyDiscountRate = 0.03 / 12;
    const initialAmount = 36000;
    const month = 12;
    const cashback = Number((initialAmount * 0.03).toFixed(2)).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const pixData = calculateProgressiveDiscount(initialAmount, month, monthlyDiscountRate);

    function handleSelect(item: string) {
        if (selectedItem !== item) {
            setSelectedItem(item);
           
        } else {
            setSelectedItem(null);
          
        }
    }



    return (
        <div className='w-full p-5 max-w-md mx-auto'>
            <div className='mb-10'>

                <Pix
                    title={pixData[0].title}
                    amount={pixData[0].amount}
                    cashback={`Ganhe ${totalDiscountRate} de Cashback`}
                    cashbackAmount={`🤑 R$ ${cashback} de volta no seu Pix na hora`}
                    isSelected={selectedItem === "pix"}
                    onClick={() => handleSelect("pix")}
                />
            </div>

            {pixData.slice(1).map((item, index) => (

                <PixItem
                    key={index}
                    index={index}
                    title={item.title}
                    amount={item.amount}
                    cet={item.cet}
                    isSelected={selectedItem === `pixItem-${index + 1}`}
                    onClick={() => handleSelect(`pixItem-${index + 1}`)}
                    totalItems={pixData.length}

                />


            ))}

        </div>
    );
}

export default PixList;
