import React from "react";

function InstallmentRadio({ process }: { process: string }) {

  return (
   
    <>
      {process === "pix" ? (
        <div className="relative flex items-center">
          <input type="checkbox" name="payment" readOnly checked />
          <label htmlFor="pix" className="ml-2">
            1ª entrada no Pix
          </label>
        </div>
      ) : (
        <div className="relative flex items-center">
        <input type="checkbox" name="payment" readOnly checked className="z-50 w-3 h-3 -ml-0.3 bg-green-500 border border-black rounded-full" />

          <label htmlFor="pix" className="ml-2">
            1ª entrada no Pix
          </label>
        </div>
      )}
    </>
  );
}

export default InstallmentRadio;
