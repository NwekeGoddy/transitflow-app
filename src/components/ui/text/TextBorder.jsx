import React from "react";

function TextBorder({ children, color, opacity }) {
  return (
    <div
      className={
        `mb-[10px] border-l-4 border-primary1 bg-opacity-50 w-fit ` +
        (color ? `bg-[#E8E8E8]` : "bg-[#041C37]") 
      }
    >
      <p
        className={`font-rubik text-sm px-[9px] py-[3] ` + (
          color ? `text-[#1C1F35]` : "text-white"
        )}
      >
        {children}
      </p>
    </div>
  );
}

export default TextBorder;
