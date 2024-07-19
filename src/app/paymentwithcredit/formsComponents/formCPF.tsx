import React from 'react';

const formatCPF = (value: string) => {
  return value
    .replace(/\D/g, '') 
    .replace(/^(\d{3})(\d)/, '$1.$2') 
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3') 
    .replace(/\.(\d{3})(\d)/, '.$1-$2') 
    .replace(/(-\d{2})\d+$/, '$1'); 
};

function FormCPF({
  formDataCPF,
  handleChange,
}: {
  formDataCPF: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {

  
  return (
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
        value={formatCPF(formDataCPF)}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default FormCPF;
