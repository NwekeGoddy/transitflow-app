import React from "react";

function BlueButton({ children }) {
  return (
    <button className="text-white text-base font-semibold blueBeans py-[19px] px-[50px] w-fit m-auto">
      {children}
    </button>
  );
}

export default BlueButton;
