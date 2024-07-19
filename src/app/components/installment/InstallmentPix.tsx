import React from "react";

function InstallmentPix({ process }: { process: string }) {
  return (
    <>
      {process === "pix" ? (
        <div className="relative flex items-center">
          <input
            type="checkbox"
            name="payment"
            readOnly
            checked
            className="accent-customGreen"
          />
          <label htmlFor="pix" className="ml-2">
            1ª entrada no Pix
          </label>
          <div></div>
        </div>
      ) : (
        <div className="relative flex items-center">
          <input
            type="checkbox"
            name="payment"
            readOnly
            checked
            className="accent-black"
          />
          <label htmlFor="pix" className="ml-2">
            1ª entrada no Pix
          </label>
        </div>
      )}
    </>
  );
}

export default InstallmentPix;
