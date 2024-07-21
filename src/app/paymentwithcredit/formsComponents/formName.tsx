import React from "react";

function removeNonAlphabeticCharacters(value: string) {
  return value.replace(/[^a-zA-ZÇçáéíóúàèìòùâêîôûãõäëïöüñ\s]/g, "");
}


function NameInput({
  formDataName,
  handleChange,
}: {
  formDataName: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  


  return (
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
        value={removeNonAlphabeticCharacters(formDataName)}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default NameInput;
