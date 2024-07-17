import React from "react";

function HeaderDynamic({ header }: { header: string }) {
  return (
    <div className="text-center text-md font-extrabold text-[#4D4D4D] max-w-md w-screen">
      {header}
    </div>
  );
}

export default HeaderDynamic;
