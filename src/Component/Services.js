import React from "react";
let links = [
  {
    img: "/images/Astha.png",
    title: "Sveltekit Project",
    gitlink: "https://github.com/SAJIB2019/Simple-project-from-astha",
    livelink: "https://simple-project-from-astha.vercel.app",
  },
  {
    img: "/images/portfolio.png",
    title: "Portfolio Website",
    gitlink: "https://github.com/SAJIB2019/Portfolio-website",
    livelink: "https://portfolio-website-mu-wine.vercel.app",
  },
  {
    img: "/images/ecommerceWebsite.png",
    title: "Ecomerce Website",
    gitlink: "https://github.com/SAJIB2019/Fully-Responsive-Ecommerce-Website",
    livelink: "https://fully-responsive-ecommerce-website.vercel.app/contact",
  },
  {
    img: "/images/dashboard.png",
    title: "Dashboard Design",
    gitlink: "https://vercel.com/sajib2019/dash-board",
    livelink: "https://dash-board-beta.vercel.app",
  },
];
const Services = () => {
  return (
    <div className="bg-[#e5d6e6] py-10">
      <div className="container flex flex-col py-10">
        <div className="flex flex-col justify-center pb-10 items-center font-lora font-bold">
          <p className="text-red-500 text-[20px] ">Here is</p>
          <h1 className="text-[23px] md:text-[40px]">My Recent Work</h1>
        </div>
        <div className="w-full lg:w-auto flex flex-col lg:flex-row justify-between border-black space-y-4 md:space-x-4">
          {links.map((link) => (
            <div className="flex flex-col justify-center items-center md:items-start p-8 border-2 border-white rounded-[20px] bg-[#767676] hover:bg-white text-white hover:text-black duration-500">
              <div>
                <img
                  className="w-full h-full"
                  src={link.img}
                  alt="Portfolio_img"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="text-[25px] font-lora font-bold py-2">
                  {link.title}
                </h1>
                <div className="w-auto flex flex-col justify-center items-center md:items-start md:flex-row">
                  <button className="btn w-full md:w-auto text-[12px] font-bold mt-2 mr-0 md:mr-2 md:mt-0 bg-gradient-to-r from-indigo-500 via-[#e5e5e5] to-pink-500 hover:from-pink-500 hover:to-yellow-500 duration-500">
                    <a href={link.gitlink}>Github Repository</a>
                  </button>
                  <button className="btn w-full md:w-auto text-[12px] font-bold mt-2 md:mt-0 bg-gradient-to-r from-indigo-500 via-[#e5e5e5] to-pink-500 hover:from-pink-500 hover:to-yellow-500 duration-500">
                    <a href={link.livelink}>Live Website</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
