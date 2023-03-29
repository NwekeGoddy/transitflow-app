import React from "react";
import transitflowLogo from "../../assets/icons/Logo.png";
import timeIcon from "../../assets/icons/timeIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import phoneIcon from "../../assets/icons/phoneIcon.png";

function TopBar() {
  return (
    <section className="bg-primary2 py-[48px] w-full ">
      <div className="max-w-6xl m-auto flex justify-between items-center text-sm">
        <div>
          <img src={transitflowLogo} alt="transitflow Logo" />
        </div>
        <div className="flex gap-[39px]">
          <div className="text-white flex flex-row items-center gap-[17px]">
            <img src={timeIcon} alt="Time Icon" />

            <div className="flex flex-col">
              <p>Mon - Sat 9.00 - 18.00 </p>
              <p>Sunday Closed</p>
            </div>
          </div>
          <div className="text-white flex flex-row items-center gap-[17px]">
            <img src={emailIcon} alt="Time Icon" />

            <div className="flex flex-col">
              <p>Email </p>
              <p>contact@logistics.com</p>
            </div>
          </div>

          <div className="text-white flex flex-row items-center gap-[17px]">
            <img src={phoneIcon} alt="Time Icon" />

            <div className="flex flex-col">
              <p>Call Us</p>
              <p>(00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
