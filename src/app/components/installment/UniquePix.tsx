import React from "react";

function UniquePix({ amount }: { amount: string }) {
  return (
    <div className="relative flex flex-col space-y-4 p-4 rounded-t-lg">
      <div className="flex items-center space-x-2 justify-between">
        <div className="relative flex items-center">
          <input type="checkbox" name="payment" readOnly checked />
          <label htmlFor="pix" className="ml-2">
            À vista no Pix
          </label>
        </div>
        <div className="ml-auto text-right text-gray-700 font-semibold">
          R$ {amount}
        </div>
      </div>
      
    </div>
  );
}

export default UniquePix;
