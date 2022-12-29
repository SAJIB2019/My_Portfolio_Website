import React, { useEffect, useState } from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  let links = [
    { name: "HOME", link: "#" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILL", link: "#skill" },
    { name: "PORTFOLIO", link: "#services" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    let handler = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div className="shadow-xl w-full fixed top-0 left-0  bg-[#f8f8f8]">
      <div className="container">
        <div className="md:flex items-center justify-between py-5">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-lora text-gray-800 hover:rotate-[360deg] duration-500 w-2 md:w-auto">
            <span className="text-indigo-600 mr-2">
              <TbBrandJavascript />
            </span>
            SRS
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
          <ul
            className={`bg-gradient-to-r from-indigo-500 via-white to-pink-500 md:from-[#f8f8f8] md:flex md:items-center absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto mt-5 md:mt-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${
              isOpen ? "left-0" : "left-[-1000px]"
            }`}
          >
            {links.map((link) => (
              <li
                key={links.name}
                className="md:ml-8 text-xl font-lora font-bold my-10 md:my-0"
              >
                <a
                  href={link.link}
                  onClick={() => setActiveNav(links.link)}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
