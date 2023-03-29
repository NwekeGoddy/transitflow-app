import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/icons/socials/Facebook.png";
import Twitter from "../../assets/icons/socials/Twitter.png";
import Instagram from "../../assets/icons/socials/Instagram.png";
import Linkdin from "../../assets/icons/socials/Linkdin.png";

function Header() {
  return (
    <header className="bg-primary2 bg-opacity-25  w-full relative ">
      <section className="max-w-6xl m-auto flex justify-between items-center text-base font-semibold">
        <div className="">
          <ul className="text-white flex flex-row  ">
            <div className="relative">
              <div className="h-[2px] w-5 absolute top-10 -right-2 bg-white rotate-90 opacity-20"></div>
              <li className="py-[30px] mr-[30px] border-b-2">
                <Link to="#">Home</Link>
              </li>
            </div>
            <div className="relative">
              <div className="h-[2px] w-5 absolute top-10 -right-2 bg-white rotate-90 opacity-20"></div>
              <li className="py-[30px] mx-[30px] hover:border-b-2">
                <Link to="#">About</Link>
              </li>
            </div>
            <div className="relative">
              <div className="h-[2px] w-5 absolute top-10 -right-2 bg-white rotate-90 opacity-20"></div>
              <li className="py-[30px] mx-[30px] hover:border-b-2">
                <Link to="#">Pages</Link>
              </li>
            </div>
            <div className="relative">
              <div className="h-[2px] w-5 absolute top-10 -right-2 bg-white rotate-90 opacity-20"></div>
              <li className="py-[30px] mx-[30px] hover:border-b-2">
                <Link to="#">Project</Link>
              </li>
            </div>
            <div>
              <li className="py-[30px] mx-[30px] hover:border-b-2">
                <Link to="#">Contact</Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="flex items-center">
          <ul className="flex gap-6 mr-[50px] items-center">
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
            <li>
              <Link to="#">
                <img src={Linkdin} alt="Linkdin Icon" />{" "}
              </Link>
            </li>
          </ul>

          <div className="bg-white">
            <p className="text-[#23212A] py-[31px] px-[52px] ">Request Quote</p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
