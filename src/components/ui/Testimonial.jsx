import React from "react";
import TextBorder from "./text/TextBorder";
import Heading1 from "./text/Heading1";
import bluearrow from "../../assets/icons/testimonials/bluearrow.png";
import yellowarrow from "../../assets/icons/testimonials/yellowarrow.png";
import Star from "../../assets/icons/testimonials/Star.png";
import quotes from "../../assets/icons/testimonials/quotes.png";
import John from "../../assets/images/testimonial/john.png";
import Smith from "../../assets/images/testimonial/smith.png";

function Testimonial() {
  return (
    <section className="max-w-6xl mx-auto my-[100px]">
      <TextBorder children={"Testominial"} color={"#E8E8E8"} />
      <div className="flex flex-row justify-between items-center">
        <Heading1 children={"What Our Customer Say"} />

        <div className="flex flex-row gap-2">
          <img src={yellowarrow} alt="Yellow arrow for navigation left" />
          <img src={bluearrow} alt="BLue arrow for navigation right" />
        </div>
      </div>

      <div className="flex flex-row mt-[40px]">
        <div className="py-[50px] px-[72px] w-1/2 bg-[#F4F4F4]">
          <div className="flex flex-row justify-between items-center mb-[20px]">
            <div className="flex flex-row items-center gap-2">
              <img src={Smith} alt="Smith profile" className="rounded-full" />
              <div className="flex flex-col ">
                <p className="font-rubik text-xl font-medium text-primary2">
                  Kathleen Smith
                </p>
                <p className="text-base font-krub text-primary2 font-medium">
                  Fuel Company
                </p>
              </div>
            </div>
            <img src={quotes} alt="Quotes Icon" />
          </div>

          <div>
            <p className="text-[#666C89] font-medium text-base">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>

          <div className="flex flex-row items-center mt-[35px] gap-[3px]">
            <img src={Star} alt="Star for rating 1" />
            <img src={Star} alt="Star for rating 2" />
            <img src={Star} alt="Star for rating 3" />
            <img src={Star} alt="Star for rating 4" />
            <img src={Star} alt="Star for rating 5" />
          </div>
        </div>

        <div className="py-[50px] px-[72px] w-1/2 bg-[#091242]">
          <div className="flex flex-row justify-between items-center mb-[20px]">
            <div className="flex flex-row items-center gap-2">
              <img src={John} alt="John profile" className="rounded-full" />
              <div className="flex flex-col ">
                <p className="font-rubik text-xl font-medium text-white">
                  John Martin
                </p>
                <p className="text-base font-krub text-white font-medium">
                  Restoration Company
                </p>
              </div>
            </div>
            <img src={quotes} alt="Quotes Icon" />
          </div>

          <div>
            <p className="text-white font-medium text-base">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>

          <div className="flex flex-row items-center mt-[35px] gap-[3px]">
            <img src={Star} alt="Star for rating 1" />
            <img src={Star} alt="Star for rating 2" />
            <img src={Star} alt="Star for rating 3" />
            <img src={Star} alt="Star for rating 4" />
            <img src={Star} alt="Star for rating 5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
