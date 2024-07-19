import React, { useState } from "react";
import InstallmentCredit from "./InstallmentCredit";

function PaymentForm(pixData: any) {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    installments: "",
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validação dos campos
    if (!formData.name.trim()) {
      alert("Por favor, preencha o nome completo.");
      return;
    }

    if (!formData.cpf.trim() || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) {
      alert("Por favor, informe um CPF válido no formato 000.000.000-00.");
      return;
    }

    if (!formData.cardNumber.trim()) {
      alert("Por favor, preencha o número do cartão.");
      return;
    }

    if (!formData.expiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      alert("Por favor, informe a data de vencimento no formato MM/AA.");
      return;
    }

    if (!formData.cvv.trim() || !/^\d{3}$/.test(formData.cvv)) {
      alert("Por favor, informe o CVV com 3 dígitos numéricos.");
      return;
    }

  
    setFormData({
      name: "",
      cpf: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      installments: "",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Pagamento</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome completo
          </label>
          <input
            id="name"
            type="text"
            placeholder="João Linaldo Dias Fraga Santos"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cpf"
          >
            CPF
          </label>
          <input
            id="cpf"
            type="text"
            placeholder="405.503.503-15"
            value={formData.cpf}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardNumber"
          >
            Número do cartão
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="405.503.503-15"
            value={formData.cardNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expiry"
            >
              Vencimento
            </label>
            <input
              id="expiry"
              type="text"
              placeholder="10/11"
              value={formData.expiry}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cvv"
            >
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="405"
              value={formData.cvv}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      <InstallmentCredit pixData={pixData}></InstallmentCredit>
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
