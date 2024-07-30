import isValidCPF from "../utils/validateCPF";
import React, { useState } from "react";
import NameInput from "./formsComponents/formName";
import FormCPF from "./formsComponents/formCPF";
import FormExpirationCard from "./formsComponents/formExpirationCard";
import FormVerifyDigit from "./formsComponents/formVerifyDigit";
import FormCardNumber from "./formsComponents/formCardNumber";
import FormInstallmentCredit from "./formsComponents/formInstallmentCredit";

function PaymentForm({ pixData, setAmountItem, setInstallmentItem, installment }: any) {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    installments: "",
  });


  const handleChange = (e: { target: { id: any; value: any } }) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    isValidCPF(formData.cpf);

    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Por favor, preencha o nome completo.");
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
      <form onSubmit={handleSubmit}>
        <NameInput
          formDataName={formData.name}
          handleChange={handleChange}
        ></NameInput>
        <FormCPF
          formDataCPF={formData.cpf}
          handleChange={handleChange}
        ></FormCPF>
        <FormCardNumber
          formCardNumber={formData.cardNumber}
          handleChange={handleChange}
        ></FormCardNumber>
        <div className="flex mb-4">
          <FormExpirationCard
            formDataExpirationCard={formData.expiry}
            handleChange={handleChange}
          ></FormExpirationCard>
          <FormVerifyDigit
            formDataCVV={formData.cvv}
            handleChange={handleChange}
          ></FormVerifyDigit>
        </div>

        <FormInstallmentCredit pixData={pixData} setAmountItem={setAmountItem} setInstallmentItem={setInstallmentItem} numberInstallment={installment}></FormInstallmentCredit>
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
