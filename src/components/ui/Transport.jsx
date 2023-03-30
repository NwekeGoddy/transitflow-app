import React from "react";
import Liquidtransport from "../../assets/images/transport/Liquidtransport.png";
import Logistics from "../../assets/images/transport/Logistics.png";
import Packaging from "../../assets/images/transport/Packaging.png";
import Warehouse from "../../assets/images/transport/Warehouse.png";
import Specializedtrans from "../../assets/images/transport/Specializedtrans.png";
import BlueButton from "./button/BlueButton";

function Transport() {
  return (
    <section className="max-w-8xl mx-auto my-[97px] relative">
      <div>
        <h3 className="font-rubik text-[35px] font-bold text-headingcolor leading-[40px] text-center">
          Transporting Across The World
        </h3>
      </div>

      <div className="flex flex-row gap-[18px] mt-[35px] mb-[65px] justify-center mx-8 ">
        <div className="transportgradient relative z-10">
          <img
            src={Liquidtransport}
            alt="Liguid Transportation"
            className="bg-no-repeat bg-cover bg-center bg-fixed "
          />

          <div className="font-medium flex flex-col gap-1 absolute bottom-5 left-4 z-10">
            <p className="text-white text-xl font-rubik">
              Liquid Transportation
            </p>
            <p className="text-base text-primary1">Premium Tankers</p>
          </div>
        </div>

        <div className="transportgradient relative  z-10">
          <img
            src={Packaging}
            alt="Packaging Solutions"
            className="bg-no-repeat bg-cover bg-center bg-fixed "
          />

          <div className="font-medium flex flex-col gap-1 absolute bottom-5 left-4 z-10">
            <p className="text-white text-xl font-rubik">Packaging Solutions</p>
            <p className="text-base text-primary1">Warehouse Management</p>
          </div>
        </div>

        <div className="transportgradient relative z-10">
          <img
            src={Logistics}
            alt="Contract Logistics"
            className="bg-no-repeat bg-cover bg-center bg-fixed "
          />

          <div className="font-medium flex flex-col gap-1 absolute bottom-5 left-4 z-10">
            <p className="text-white text-xl font-rubik">Contract Logistics</p>
            <p className="text-base text-primary1">Road Transportation</p>
          </div>
        </div>

        <div className="transportgradient relative z-10">
          <img
            src={Warehouse}
            alt="Warehouse & Distribution"
            className="bg-no-repeat bg-cover bg-center bg-fixed "
          />

          <div className="font-medium flex flex-col gap-1 absolute bottom-5 left-4 z-10">
            <p className="text-white text-xl font-rubik">
              Warehouse & Distribution
            </p>
            <p className="text-base text-primary1">Large Warehouse</p>
          </div>
        </div>

        <div className="transportgradient relative z-10">
          <img
            src={Specializedtrans}
            alt="Specialized Transport"
            className="bg-no-repeat bg-cover bg-center bg-fixed "
          />

          <div className="font-medium flex flex-col gap-1 absolute bottom-5 left-4 z-10">
            <p className="text-white text-xl font-rubik">
              Specialized Transport
            </p>
            <p className="text-base text-primary1">Ocean Transports</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <BlueButton children={"More Work"} />
      </div>


      <div className="yellowgradient w-full h-[400px] absolute top-1/2 z-0">

      </div>
    </section>
  );
}

export default Transport;
