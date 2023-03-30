import React from "react";
import Airplane from "../../assets/images/whychoose/airplane.png";
import TextBorder from "./text/TextBorder";
import Heading1 from "./text/Heading1";
import time from "../../assets/icons/fill/time.png";
import support from "../../assets/icons/fill/support.png";
import delivery from "../../assets/icons/fill/delivery.png";
import global from "../../assets/icons/fill/global.png";
import optimizedtravel from "../../assets/icons/fill/optimizedtravel.png";
import shipping from "../../assets/icons/fill/shipping.png";
import ProductPlane from "../../assets/icons/productplane.png";

function WhyChoose() {
  return (
    <div className="relative">
      <section className="flex flex-row">
        <div className="w-1/2 h-[700px]  bg-primary2"></div>

        <div className=" w-1/2 h-[700px] bg-secondary1 flex flex-col justify-center">
          <div className="pl-[130px] max-w-xl">
            <TextBorder children={"Why Choose"} color={"#E8E8E8"} />
            <Heading1 children={"We create opportunity to reach potential"} />

            <p className="font-medium text-base text-[#666C89] mb-[61px]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.{" "}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row gap-2 items-center">
                <img src={delivery} alt="" />
                <p className="text-xl text-[headingcolor] font-rubik font-normal">
                  Safe Package
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src={shipping} alt="" />
                <p className="text-xl text-[headingcolor] font-rubik font-normal">
                  Ship Everywhere
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src={global} alt="" />
                <p className="text-xl text-[headingcolor] font-rubik font-normal">
                  Global Tracking
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src={support} alt="" />
                <p className="text-xl text-[headingcolor] font-rubik font-normal">
                  24/7 Support
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src={time} alt="" />
                <p className="text-xl text-[headingcolor] font-rubik font-normal">
                  In Time Delivery
                </p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <img src={optimizedtravel} alt="" />
                <p className="text-xl text-[headingcolor] font-rubik font-normal">
                  Transparent Pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute top-32 2xl:left-36 xl:left-12 lg:left-0">
        <div className="relative">
          <img src={Airplane} alt="Airplane" className="h-[450px]" />

          <div className="absolute bottom-0 left-20 flex flex-row gap-6 p-[38px] yellowgradient w-fit">
            <img src={ProductPlane} alt="ProductPlane Icon" />
            <p className="text-headingcolor text-[25px] font-rubik ">
              Moving your products <br /> across borders
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default WhyChoose;
