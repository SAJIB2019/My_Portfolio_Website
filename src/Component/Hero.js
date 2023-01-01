import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import CV from "./Resume/Software_Engineer_sajib.pdf";
const Hero = () => {
  return (
    <section id="#">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-screen">
        <div className="container flex flex-col md:flex-row-reverse justify-between items-center py-[100px] md:py-[200px]">
          <div className="bg-gradient-to-r from-indigo-500 via-white to-pink-500 rounded-[50%] overflow-hidden w-[200px] h-[300px] md:h-auto md:w-auto">
            <img
              className="w-full h-full hover:scale-[1.2] duration-700"
              src="/images/hero.png"
              alt="img"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start mt-4 md:mt-0">
            <p className="font-lora text-xl text-white">Hi There,</p>
            <h1 className="font-lora text-xl md:text-[35px] font-bold md:my-2 text-white">
              I'm Sohel <span className="text-red-300">Rana Sajib</span>
            </h1>
            <h1 className="font-lora text-xl md:text-2xl font-bold text-white">
              Software Engineer
            </h1>
            <div className="flex space-x-4 text-3xl my-2 md:my-4 text-white ">
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
            <a href={CV} download={CV}>
              <button className=" btn font-bold mt-2 md:mt-0 bg-gradient-to-r from-indigo-500 via-white to-pink-500 hover:from-pink-500 hover:to-yellow-500 duration-500">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
