import React from "react";

function InstallmentRadio({ process }: { process: string }) {
    console.log(process)
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
          <span className="z-50 w-3 h-3 -ml-0.3 bg-customGreen flex items-center justify-center rounded-full border border-black">
            X
          </span>
          <label htmlFor="pix" className="ml-2">
            1ª entrada no Pix
          </label>
        </div>
      )}
    </>
  );
}

export default InstallmentRadio;
