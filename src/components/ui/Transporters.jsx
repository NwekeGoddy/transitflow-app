import React from "react";
import TextBorder from "./text/TextBorder";
import Heading1 from "./text/Heading1";
import Jesca from "../../assets/images/transporter/jessca.png";
import Kathleen from "../../assets/images/transporter/kathleen.png";
import Rebecca from "../../assets/images/transporter/rebecca.png";
import Twitter from "../../assets/icons/socials/TwitterBlue.png";
import Facebook from "../../assets/icons/socials/FacebookBlue.png";
import Instagram from "../../assets/icons/socials/InstagramBlue.png";
import LinkedIn from "../../assets/icons/socials/LinkedinBLue.png";

function Transporters() {
  return (
    <section className="my-24">
      <div className="flex flex-col justify-center items-center mb-7">
        <TextBorder children={"The Transporters"} color={"#E8E8E8"} />
        <Heading1 children={"Meet Expert Team"} />
      </div>

      <div className="max-w-6xl mx-auto flex gap-[54px]">
        <div className="">
          <div className="relative">
            <img src={Jesca} alt="Jesca" />
            <div className="text-white pb-[20px] pt-[42px] pl-[34px] bg-headingcolor">
              <h5 className="text-xl font-medium font-rubik">Jessca Arow</h5>
              <p className="font-base ">Designer</p>
            </div>
            <div className="absolute bottom-20 right-0 w-fit yellowgradient py-[20px] px-[17px] flex flex-row gap-4">
              <img src={Twitter} alt="Twitter" />
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative">
            <img src={Kathleen} alt="Kathleen" />
            <div className="text-white pb-[20px] pt-[42px] pl-[34px] bg-headingcolor">
              <h5 className="text-xl font-medium font-rubik">Kathleen Smith</h5>
              <p className="font-base ">Designer</p>
            </div>
            <div className="absolute bottom-20 right-0 w-fit yellowgradient py-[20px] px-[17px] flex flex-row gap-4">
              <img src={LinkedIn} alt=" LinkedIn" />
              <img src={Twitter} alt="Twitter" />
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>

        <div className="">
          <div className="relative">
            <img src={Rebecca} alt="Rebecca" />
            <div className="text-white pb-[20px] pt-[42px] pl-[34px] bg-headingcolor">
              <h5 className="text-xl font-medium font-rubik">Rebecca Tylor</h5>
              <p className="font-base ">Designer</p>
            </div>
            <div className="absolute bottom-20 right-0 w-fit yellowgradient py-[20px] px-[17px] flex flex-row gap-4">
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transporters;
