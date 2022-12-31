import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-[#7842f5] py-10">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="flex text-2xl text-white space-x-4">
              <a href="#" className="hover:text-gray-400 duration-500">
                <AiFillFacebook />
              </a>
              <a href="#" className="hover:text-gray-400 duration-500">
                <AiFillLinkedin />
              </a>
              <a href="#" className="hover:text-gray-400 duration-500">
                <AiFillInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 duration-500">
                <AiTwotoneMail />
              </a>
            </div>
            <div className="font-bold text-2xl cursor-pointer py-2 md:py-0 flex justify-center items-center font-lora text-white hover:rotate-[360deg] duration-500 w-2 md:w-auto">
              <span className="text-indigo-600 mr-2">
                <TbBrandJavascript className="text-white" />
              </span>
              SRS
            </div>
            <div className="text-white text-[11px] font-bold font-lora">
              sajib.sohelrana21@gmail.com
            </div>
          </div>
          <div className="flex justify-center items-center pt-4 md:pt-10  text-white text-[10px] md:text-xl font-bold font-lora">
            Copyright © 2022. All right reserved by Sajib
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
