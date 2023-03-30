import React from "react";

function Heading1({ children }) {
  return (
    <h3 className="mb-[10px] font-rubik text-[35px] font-bold text-headingcolor leading-[40px]">
      {children}
    </h3>
  );
}

export default Heading1;
