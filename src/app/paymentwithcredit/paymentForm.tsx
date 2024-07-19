import React, { useState } from "react";
import InstallmentCredit from "./InstallmentCredit";
import NameInput from "./formsComponents/formName";
import FormCPF from "./formsComponents/formCPF";
import isValidCPF from "../utils/validateCPF";
import FormExpirationCard from "./formsComponents/formExpirationCard";

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

    
    if (!formData.name.trim()) {
      alert("Por favor, preencha o nome completo.");
      return;
    }

    console.log(formData.cpf)

   

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
       <NameInput formDataName={formData.name} handleChange={handleChange}></NameInput>
        <FormCPF formDataCPF={formData.cpf} handleChange={handleChange}></FormCPF>
       
        <div className="flex mb-4">
        <FormExpirationCard formDataExpirationCard={formData.expiry} handleChange={handleChange}></FormExpirationCard>
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
