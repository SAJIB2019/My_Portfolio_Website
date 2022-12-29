import React from "react";

const Skill = () => {
  return (
    <section id="skill">
      <div className="bg-[#e5e5e5]">
        <div className="container flex flex-col  py-[80px]">
          <div className="flex flex-col justify-center items-center pb-[40px] font-lora">
            <p className="text-[20px] font-bold text-red-400">My Skill's</p>
            <h1 className="text-[23px] md:text-[40px] font-bold">
              On Front-End Technologies
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-x-4">
            <div className="w-full lg:w-auto flex flex-col justify-center items-center text-[15px] md:text-xl p-20 space-y-4 border-[2px]  border-white font-bold font-lora bg-[#767676] hover:bg-white text-white hover:text-black duration-500 rounded-[20px]">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JAVASCRIPT</p>
              <p>PYTHON</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col justify-center items-center text-[15px] md:text-xl p-20 space-y-4 border-[2px]  border-white font-bold font-lora bg-[#767676] hover:bg-white text-white hover:text-black duration-500 rounded-[20px]">
              <p>REACT JS</p>
              <p>NODE JS</p>
              <p>EXPRESS JS</p>
              <p>SVELTEKIT</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col justify-center items-center text-[15px] md:text-xl p-20 space-y-4 border-[2px]  border-white font-bold font-lora bg-[#767676] hover:bg-white text-white hover:text-black duration-500 rounded-[20px]">
              <p>TAILWIND CSS</p>
              <p>COMPONENT CSS</p>
              <p>ES6</p>
              <p>REDUX</p>
            </div>
            <div className="w-full lg:w-auto flex flex-col justify-center items-center text-[14px] md:text-xl p-20 space-y-4 border-[2px]  border-white font-bold font-lora bg-[#767676] hover:bg-white text-white hover:text-black duration-500 rounded-[20px]">
              <p>REACT NATIVE</p>
              <p>.</p>
              <p>.</p>
              <p>BEGINEER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
