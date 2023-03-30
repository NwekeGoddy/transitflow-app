import React from "react";
import TextBorder from "./text/TextBorder";
import timeIcon from "../../assets/icons/timeIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import phoneIcon from "../../assets/icons/phoneIcon.png";
import YellowButton from "./button/YellowButton";
import One from '../../assets/images/contact/1.png';
import Two from '../../assets/images/contact/2.png';
import Three from '../../assets/images/contact/3.png';
import Four from '../../assets/images/contact/4.png';

function Contact() {
  return (
    <section className="bg-primary2">
      <div className="max-w-6xl mx-auto py-36">
        <TextBorder children={"Contact"} opacity={10} />

        <div className="flex flex-row gap-20">
          <div className="w-1/3">
            <h3 className="mb-[10px] font-rubik text-[35px] font-bold text-white leading-[40px]">
              Get in touch with us
            </h3>
            <p className="text-base text-white font-medium mb-8">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value.
            </p>

            <div className="flex flex-col gap-[39px]">
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

          <div className="w-2/3">
            <form action="post" className="grid grid-cols-2 gap-7">
              <input
                type="text"
                placeholder="Your name*"
                className="border border-[#4E5683] py-[21px] px-[30px] bg-primary2 text-white text-xl outline-none"
              />
              <input
                type="text"
                placeholder="Email*"
                className="border border-[#4E5683] py-[21px] px-[30px] bg-primary2 text-white text-xl outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="border border-[#4E5683] py-[21px] px-[30px] bg-primary2 text-white text-xl outline-none"
              />
              <input
                type="text"
                placeholder="City*"
                className="border border-[#4E5683] py-[21px] px-[30px] bg-primary2 text-white text-xl outline-none"
              />
              <textarea
                name=""
                id=""
                placeholder="Your Message"
                rows="4"
                className="col-span-2 border border-[#4E5683] py-[21px] px-[30px] bg-primary2 text-white text-xl outline-none"
              ></textarea>
              input
            </form>
            <YellowButton children={"Submit Message"} />
          </div>
        </div>


        <div className="mt-[70px] flex ">
            <img src={One} alt="Studio Green" />
            <img src={Two} alt="Norto" />
            <img src={Three} alt="Points One" />
            <img src={Four} alt= "Out of the sand box" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
