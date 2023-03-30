import React from "react";
import WhyUsImage from "../../assets/images/WhyUsImage.png";
import TextBorder from "./text/TextBorder";
import Heading1 from "./text/Heading1";
import AirplaneImage from "../../assets/images/AirplaneImage.png";
import GirleImage from "../../assets/images/GirleImage.png";
import optmizedIcon from "../../assets/icons/fill/optimizedtravel.png";
import deliveryIcon from "../../assets/icons/fill/delivery.png";
import Pattern from "../../assets/images/Pattern.png";

function WhyUs() {
  return (
    <>
      <section className="relative w-full mb-[500px]">
        <div className="whyusgradient ">
          <img
            src={WhyUsImage}
            alt="Why Us Containers"
            className="bg-no-repeat bg-cover bg-center bg-fixed "
          />
        </div>

        <div className="bg-white z-10 max-w-6xl mx-auto flex flex-row p-[86px] gap-[86px] absolute w-full top-2/3 left-1/2 transform -translate-x-1/2  justify-center">
          <div className="w-1/2">
            <TextBorder children={"Why Us"} color={"#E8E8E8"} />
            <Heading1
              children={"We provide full range global logistics solution"}
            />

            <p className="font-medium mt-[12px] mb-[15px]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="font-medium">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.{" "}
            </p>

            <div className="flex flex-col gap-[22px] mt-[25px]">
              <div className="flex flex-row items-center gap-[15px] ">
                <img src={deliveryIcon} alt="Delivery on Time Icon" />
                <p className="text-rubik text-[25px] text-headingcolor">
                  Delivery on Time
                </p>
              </div>
              <div className="flex flex-row items-center gap-[15px] ">
                <img src={optmizedIcon} alt="Optimized Travel Cost Icon" />
                <p className="text-rubik text-[25px] text-headingcolor">
                  Optimized Travel Cost
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={AirplaneImage} alt="Airplane"  />
            <div className="absolute p-[30px] top-1/2 -left-1/3 bg-white">
              <img src={GirleImage} alt="Girl on delivery" />
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-6xl mx-auto flex flex-row justify-center">
        <div className="flex flex-row gap-4 items-center px-[70px] py-[46px] border-y-[1px] border-r">
          <h5 className="font-rubik text-[50px] font-bold text-headingcolor">
            1294
          </h5>
          <img src={Pattern} alt="Patern" className="w-[17px] h-[17px]"/>
          <p className="text-headingcolor text-xl font-normal">
            {" "}
            Delivered Packages
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center px-[70px] py-[46px] border-y-[1px]">
          <h5 className="font-rubik text-[50px] font-bold text-headingcolor">
            3594
          </h5>
          <img src={Pattern} alt="Patern" className="w-[17px] h-[17px]"/>
          <p className="text-headingcolor text-xl font-normal">
            {" "}
            Satisfied Clients
          </p>
        </div>
      </div>


    </>
  );
}

export default WhyUs;
