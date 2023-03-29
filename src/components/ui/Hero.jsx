import React from "react";
import HeroImage from "../../assets/images/HeroImage.png";
import Header from "./Header";
import TextBorder from "./text/TextBorder";

function Hero() {
  return (
    <section className="">
      <div
        className="bg-no-repeat bg-cover bg-center bg-fixed "
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <Header />

        <div className="max-w-6xl mx-auto py-[176px] ">
          <TextBorder children={"Logistics & Supply Chain Solutions"} />

          <h1 className="font-bold text-[60px] text-white font-rubik w-1/2 leading-[71px]">
            Your Gateway to any Destination in the World
          </h1>
          <p className="font-krub font-base font-medium w-1/2 text-white">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>

          <div className="mt-6">
            <button className="text-[#23212A] text-base font-semibold coolBeans py-[19px] px-[50px] ">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
