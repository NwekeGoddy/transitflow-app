import React from "react";
import TextBorder from "./text/TextBorder";
import Heading1 from "./text/Heading1";
import Image1 from "../../assets/images/ourblog/Image1.png";
import Image2 from "../../assets/images/ourblog/Image2.png";
import Image3 from "../../assets/images/ourblog/Image3.png";
import CalendarIcon from "../../assets/icons/calender.png";
import BlueButton from "./button/BlueButton";

function OurBlog() {
  return (
    <section className="my-24  max-w-[943px] mx-auto">
      <div className="flex flex-col justify-center items-center mb-7">
        <TextBorder children={"Our Blog"} color={"#E8E8E8"} />
        <Heading1 children={"Our Latest News"} />
      </div>

      <div className="flex flex-col py-[30px] border-y">
        <div className="flex flex-row gap-[20px] justify-center mb-[30px]">
          <div className="w-11/12">
            <img
              src={Image1}
              alt="Inland freight a worthy solution for your business"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={CalendarIcon}
              alt="Calender Icon"
              className="mb-[3px] w-[52px]"
            />
            <h4 className="leading-10 text-[40px] font-headingcolor font-rubik font-semibold">
              08
            </h4>
            <p className="font-base text-Paracolor font-medium ">September</p>
          </div>
          <div className="flex flex-col  pl-[29px] border-l">
            <h3 className="text-headingcolor text-[25px] font-rubik mb-4 leading-7">
              Inland freight a worthy solution for your business
            </h3>
            <p className="font-base text-Paracolor font-medium mb-4 ">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.{" "}
            </p>

            <ul className="text-headingcolor font-medium text-base list-disc pl-4">
              <li>Urgent transport solutions</li>
              <li> Reliable & experienced staffs </li>
              <li>Urgent transport solutions </li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-[20px] justify-center py-[30px] border-y">
          <div className="w-11/12">
            <img
              src={Image3}
              alt="How technology can help redraw the supply chain map"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={CalendarIcon}
              alt="Calender Icon"
              className="mb-[3px] w-[52px]"
            />
            <h4 className="leading-10 text-[40px] font-headingcolor font-rubik font-semibold">
              12
            </h4>
            <p className="font-base text-Paracolor font-medium ">September</p>
          </div>
          <div className="flex flex-col  pl-[29px] border-l">
            <h3 className="text-[#FFBE34] text-[25px] font-rubik mb-4 leading-7 ">
              How technology can help redraw the supply chain map
            </h3>
            <p className="font-base text-Paracolor font-medium mb-4 ">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.{" "}
            </p>

            <ul className="text-headingcolor font-medium text-base list-disc pl-4">
              <li>Urgent transport solutions</li>
              <li> Reliable & experienced staffs </li>
              <li>Urgent transport solutions </li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-[20px] justify-center mt-[30px]">
          <div className="w-11/12">
            <img
              src={Image2}
              alt="Inland freight a worthy solution for your business"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src={CalendarIcon}
              alt="Calender Icon"
              className="mb-[3px] w-[52px]"
            />
            <h4 className="leading-10 text-[40px] font-headingcolor font-rubik font-semibold">
              25
            </h4>
            <p className="font-base text-Paracolor font-medium ">September</p>
          </div>
          <div className="flex flex-col  pl-[29px] border-l">
            <h3 className="text-headingcolor text-[25px] font-rubik mb-4 leading-7">
              Five things you should have ready for your broker
            </h3>
            <p className="font-base text-Paracolor font-medium mb-4 ">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.{" "}
            </p>

            <ul className="text-headingcolor font-medium text-base list-disc pl-4">
              <li>Urgent transport solutions</li>
              <li> Reliable & experienced staffs </li>
              <li>Urgent transport solutions </li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[39px] ">
        <BlueButton children={"More Blog"} />
      </div>
    </section>
  );
}

export default OurBlog;
