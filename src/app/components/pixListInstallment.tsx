import PixItem from './pixInstallment';
import calcularDescontoProgressivo from './calc'


const valorInicial = 36000;
const meses = 12;

const pixData =  calcularDescontoProgressivo(valorInicial, meses);


function PixList() {
  return (
    <div className='w-full p-5 max-w-md mx-auto '>
      {pixData.map((item, index) => (
        <PixItem
              key={index}
              title={item.title}
              amount={item.amount} 
              cet={item.cet}  />
      ))}
    </div>
  );
}

export default PixList;
