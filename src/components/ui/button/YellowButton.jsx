import React from "react";

function YellowButton({ children }) {
  return (
    <button className="text-[#23212A] text-base font-semibold coolBeans py-[19px] px-[50px] whitespace-nowrap">
      {children}
    </button>
  );
}

export default YellowButton;
