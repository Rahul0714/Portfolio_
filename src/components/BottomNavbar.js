import React from "react";
import { SiWindows11, SiMicrosoftedge, SiReact, SiGmail } from "react-icons/si";
import { AiFillCloud } from "react-icons/ai";

const BottomNavbar = () => {
  return (
    <div>
      <div className="absolute bottom-[65px] text-white flex justify-center w-full">
        <div className="flex items-center gap-2">
          <SiReact />
          <div className="flex">
            <div className="text-gray-300">Made with &nbsp;</div> React
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-[65px] backdrop-blur-md z-10 absolute bottom-0">
        <div className="mx-4 flex items-center gap-2">
          <div className="">
            <AiFillCloud className="text-white text-xl" />
          </div>
          <div className="flex flex-col">
            <div className="text-white text-sm">21{"\u00B0"} C</div>
            <div className="text-white text-xs">Overcast</div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-blue-400 text-4xl hover:scale-125 transition duration-100 ease-in-out cursor-pointer ">
            <SiWindows11 />
          </div>
          <div className="text-blue-300 text-4xl hover:scale-125 transition duration-100 ease-in-out cursor-pointer">
            <SiMicrosoftedge />
          </div>
          <div
            className="
            text-blue-400
            text-4xl hover:scale-125 transition duration-100 ease-in-out cursor-pointer"
          >
            <SiReact />
          </div>
          <div className="text-blue-400 text-4xl hover:scale-125 transition duration-100 ease-in-out cursor-pointer">
            <SiGmail />
          </div>
        </div>
        <div className="flex gap-2 items-center mx-4 justify-end">
          <div className="text-white text-base mr-3">ENG</div>
          <div>
            <div className="text-white text-xs mr-0 text-end">{`${new Date().toLocaleTimeString()}`}</div>
            <div className="text-white text-xs">{`${new Date().toLocaleDateString()}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
