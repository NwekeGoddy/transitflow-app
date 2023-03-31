import React from "react";
import FooterImage from "../../assets/images/FooterImage.png";
import transitflowLogo from "../../assets/icons/Logo.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import phoneIcon from "../../assets/icons/phoneIcon.png";
import YellowButton from "./button/YellowButton";
import Facebook from "../../assets/icons/socials/Facebook.png";
import Twitter from "../../assets/icons/socials/Twitter.png";
import Instagram from "../../assets/icons/socials/Instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img src={FooterImage} alt="Footer Container" />

      <div className="bg-primary2">

        <div className="bg-white bg-opacity-[0.08] mb-[41px]">
          <div className="  max-w-[1220px] mx-auto flex flex-row">
            <div className="pl-[35px] pr-[120px] bg-primary2 py-[44px]">
              <img src={transitflowLogo} alt="transitflow Logo" />
            </div>

            <ul className="py-[44px] text-[25px] font-rubik font-medium text-white flex flex-row gap-36 pl-[80px]">
              <li className="w-[86px]">Pages</li>
              <li className="w-[86px]">Utility</li>
              <li>Subscribe</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-32 mb-12 max-w-6xl mx-auto">
          <div className="">
            <p className="mb-[33px] font-base font-medium text-white">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>

            <div className="flex flex-col gap-[39px]">
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

         <div className="flex flex-row gap-36 pl-12">
          <div className="">
            <ul className="font-base font-medium text-white flex flex-col gap-5 whitespace-nowrap">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Project</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <ul className="font-base font-medium text-white flex flex-col gap-5 whitespace-nowrap">
              <li>Style Guide</li>
              <li>Changelog</li>
              <li>Licenses</li>
              <li>Protected</li>
              <li>Not Found</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enrol here*"
              className="border border-[#4E5683] py-[21px] px-[30px] bg-primary2 text-white text-xl outline-none"
            />

            <div className="flex flex-row justify-between items-center gap-8">
              <YellowButton children={"Send Now"} />

              <div className="">
                <ul className="flex flex-row items-center justify-between gap-3">
                  <li>
                    <Link to="#">
                      <img src={Instagram} alt="Instagram Icon" />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={Facebook} alt="Facebook Icon" />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={Twitter} alt="Twitter Icon" />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="border-t border-[#4E5683] py-[25px] ">
          <div className="flex flex-row justify-between items-center max-w-6xl mx-auto">
            <h4 className="text-white text-base font-medium">
              Copyright © TransitFlow | Designed by VictorFlow - Powered by
              Webflow.
            </h4>
            <ul className="flex flex-row gap-4 text-[#8388A7]">
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>Changelog</li>
              <li>Password</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
