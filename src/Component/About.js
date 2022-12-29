import React from "react";
import { BiUser } from "react-icons/bi";
import { BsFolderCheck } from "react-icons/bs";
import { SiStackoverflow } from "react-icons/si";
const About = () => {
  return (
    <section id="about">
      <div className="bg-gradient-to-r from-[#b3a796] via-[#ebe6da] to-[#c3c3c3]">
        <div className="container py-[50px]">
          <div className="flex justify-center items-center mb-[20px] text-[40px] font-bold font-lora">
            <h1>About Me</h1>
          </div>
          <div className="flex flex-col lg:flex-row  justify-center items-center py-[30px]">
            <div className="w-full">
              <div className="w-auto h-auto md:w-[300px] md:h-[400px]  border-[2px] border-white rounded-[20px] overflow-hidden bg-gradient-to-r form-[#efe2df] vai-[#fff] to-[#f5f5dc]">
                <img
                  src="images/hero1.png"
                  alt="About_img"
                  className="w-full h-full hover:scale-[1.2] duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col">
              <div className="flex flex-col md:flex-row items-center  justify-between py-4 my-4 space-y-4 md:space-x-4">
                <div className="w-full md:w-auto bg-[#767676] hover:bg-white text-white hover:text-black duration-500 flex flex-col rounded-[20px] items-center justify-center p-[40px] border-[2px]  border-white font-bold font-lora">
                  <SiStackoverflow />
                  <p>Experience</p>
                  <p>2 year working</p>
                </div>
                <div className="w-full md:w-auto bg-[#767676] hover:bg-white text-white hover:text-black duration-500 flex flex-col rounded-[20px] items-center justify-center p-[40px] border-[2px]  border-white font-bold font-lora">
                  <BiUser />
                  <p>Clint's</p>
                  <p>5 worldwide</p>
                </div>
                <div className="w-full md:w-auto bg-[#767676] hover:bg-white text-white hover:text-black duration-500 flex flex-col rounded-[20px] items-center justify-center p-[40px] border-[2px] border-white font-bold font-lora">
                  <BsFolderCheck />
                  <p>Projects</p>
                  <p>10 Completed</p>
                </div>
              </div>
              <div className="font-lora font-bold py-4 text-justify">
                <p>
                  Software Engineer with 1+ year of experience. Completed B.sc
                  in Computer Science and Engineering from Gono Bishwabidyalay.
                  Able to complete any kind of task under pressure.
                  <span> Note:</span> 4+ years of production level experience in
                  <span>
                    <a href=""> Dekko Accessories ltd</a>
                  </span>
                </p>
              </div>
              <button className="btn font-bold w-auto md:w-[180px] mt-2 md:mt-0 bg-gradient-to-r from-indigo-500 via-white to-pink-500 hover:from-pink-500 hover:to-yellow-500 duration-500">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
