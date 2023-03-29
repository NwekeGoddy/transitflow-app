import React from "react";

function TextBorder({children}) {
  return (
    <div className="border-l-4 border-primary1 bg-[#041C37] bg-opacity-50 w-fit">
      <p className="font-rubik text-sm px-[9px] py-[3] text-white">
       {children}
      </p>
    </div>
  );
}

export default TextBorder;
