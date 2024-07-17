import React from 'react';

function PaymentForm() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Pagamento</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nome completo
          </label>
          <input
            id="name"
            type="text"
            placeholder="João Linaldo Dias Fraga Santos"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cpf">
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            placeholder="405.503.503-15"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
            Número do cartão
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="405.503.503-15"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiry">
              Vencimento
            </label>
            <input
              id="expiry"
              type="text"
              placeholder="10/11"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="405"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="installments">
            Parcelas
          </label>
          <select
            id="installments"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>1x de R$ 15.300,00</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Pagar
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
