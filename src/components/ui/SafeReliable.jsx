import React from "react";
import TextBorder from "./text/TextBorder";
import Heading1 from "./text/Heading1";
import flightIcon from "../../assets/icons/plain/flight.png";
import seaIcon from "../../assets/icons/plain/sea.png";
import shippingIcon from "../../assets/icons/plain/shipping.png";
import warehouseIcon from "../../assets/icons/plain/warehouse.png";

function SafeReliable() {
  return (
    <section className="bg-white flex flex-row  gap-10 justify-between mx-auto my-[132px] max-w-6xl">
      <div className="flex flex-col gap-[18px] w-fit ">
        <TextBorder children={"What We Do"} color={"#E8E8E8"} />

        <div>
          <Heading1 children={"Safe & Reliable Cargo Solutions"} />
        </div>
      </div>

      <div className="flex flex-row flex-wrap w-fit gap-10">
        <div className="flex flex-row gap-10 w-5/12 mb-10">
          <div>
            <img
              src={seaIcon}
              alt="Sea transport services Icon"
              className="max-w-none w-[57px]"
            />
          </div>
          <div className="flex flex-col pl-[25px] border-l-2 border-[#d8d8d8]">
            <h5 className="text-headingcolor text-[25px] font-rubik leading-[28px] mb-[13px]">
              Sea Transport Services
            </h5>
            <p className="text-base font-krub font-medium">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 w-5/12 mb-10">
          <div>
            <img
              src={warehouseIcon}
              alt="Warehousing Services"
              className="max-w-none w-[57px]"
            />
          </div>
          <div className="flex flex-col pl-[25px] border-l-2 border-[#d8d8d8]">
            <h5 className="text-headingcolor text-[25px] font-rubik leading-[28px] mb-[13px]">
              Warehousing Services
            </h5>
            <p className="text-base font-krub font-medium whitespace-normal">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 w-5/12 mb-10">
          <div>
            <img
              src={flightIcon}
              alt="Air Flight Services"
              className="max-w-none w-[57px]"
            />
          </div>
          <div className="flex flex-col pl-[25px] border-l-2 border-[#d8d8d8]">
            <h5 className="text-headingcolor text-[25px] font-rubik leading-[28px] mb-[13px]">
              Air Flight Services
            </h5>
            <p className="text-base font-krub font-medium">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-10 w-5/12 mb-10">
          <div>
            <img
              src={shippingIcon}
              alt="Local Shipping Services"
              className="max-w-none w-[57px]"
            />
          </div>
          <div className="flex flex-col pl-[25px] border-l-2 border-[#d8d8d8]">
            <h5 className="text-headingcolor text-[25px] font-rubik leading-[28px] mb-[13px]">
              Local Shipping Services
            </h5>
            <p className="text-base font-krub font-medium">
              Following the quality of our service thus having gained trust of
              our many clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafeReliable;
