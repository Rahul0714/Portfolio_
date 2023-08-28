import React, { useState } from "react";
import { FaApple, FaPhone, FaEarthAfrica } from "react-icons/fa6";
import { GrClose, GrMail } from "react-icons/gr";
const TopNavbar = ({ isShowProjectPressed, setIsShowProjectPressed }) => {
  const [isAppleLogoOpen, setIsAppleLogoOpen] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [isShowAbout, setIsShowAbout] = useState(false);
  const [isShowContact, setIsShowContact] = useState(false);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="z-10 w-full backdrop-blur-xl flex justify-between">
      <div className="flex items-center justify-around w-1/3 text-white text-sm">
        <div
          className="text-base cursor-pointer"
          onClick={() => setIsAppleLogoOpen(!isAppleLogoOpen)}
        >
          <FaApple />
        </div>
        {isAppleLogoOpen && (
          <div className="absolute text-center z-10 w-24 rounded-md h-24  left-0 top-6 flex flex-col items-center justify-center ml-1 bg-gradient-to-br from-lime-400 to-indigo-400 text-gray-600 ">
            <div
              className="cursor-pointer hover:text-gray-900 hover:bg-blue-500 w-20"
              onClick={() => {
                setIsShowAbout(!isShowAbout);
                setIsAppleLogoOpen(false);
              }}
            >
              About Me
            </div>
            <div className="h-[1px] w-4/5 bg-black my-2 px-2"></div>
            <div
              className="cursor-pointer hover:text-gray-900 hover:bg-blue-500 w-20"
              onClick={() => {
                setIsShowContact(true);
                setIsAppleLogoOpen(false);
              }}
            >
              Contact
            </div>

            <div
              className="cursor-pointer hover:text-gray-900 hover:bg-blue-500 w-20"
              onClick={() => {
                setIsShowProjectPressed(!isShowProjectPressed);
                setIsAppleLogoOpen(false);
              }}
            >
              My Projects
            </div>
          </div>
        )}
        <div className="font-bold cursor-default">Finder</div>
        <div className="cursor-pointer" onClick={() => setIsShowAbout(true)}>
          About Me
        </div>
        {isShowAbout && (
          <div className="h-96 w-80 left-[550px] top-[150px]  bg-gray-600 rounded-xl p-2 shadow-2xl backdrop-blur-xl absolute">
            <div className="flex">
              <div className="flex gap-2">
                <div
                  className={`h-4 w-4 rounded-full bg-red-600 flex justify-center items-center text-xs cursor-pointer`}
                  onMouseEnter={() => setShowCross(true)}
                  onMouseLeave={() => setShowCross(false)}
                  onClick={() => setIsShowAbout(false)}
                >
                  {showCross && <GrClose />}
                </div>
                <div className="h-4 w-4 rounded-full bg-gray-500 "></div>
                <div className="h-4 w-4 rounded-full bg-gray-500 "></div>
              </div>
              <div
                className="ml-14 font-bold"
                onClick={() => setIsShowAbout(!isShowAbout)}
              >
                About Me
              </div>
            </div>
            <div className="mx-auto my-4 w-28 h-28 border rounded-full flex justify-center items-center">
              Photo
            </div>
            <div className="font-bold text-2xl text-center">Rahul Mujumdar</div>
            <div className="text-base text-center">Software Engineer</div>
            <div className="w-44  flex mx-auto text-slate-300">
              <div className="font-semibold mx-2">Skills</div>
              <div>
                React, Flutter, javascript, nodejs, typescript, mongoDB, HTML,
                Tailwind, Git
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              <div className="p-1 bg-slate-500 hover:bg-slate-400 cursor-pointer rounded-md">
                My Projects
              </div>
              <div
                className="p-1 bg-slate-500 hover:bg-slate-400 cursor-pointer rounded-md"
                onClick={() => setIsShowContact(true)}
              >
                Contacts
              </div>
            </div>
          </div>
        )}
        <div
          className="cursor-pointer"
          onClick={() => setIsShowContact(!isShowContact)}
        >
          Contact
        </div>
        {isShowContact && (
          <div className="h-80 w-80 left-[550px] top-[150px]  bg-gray-600 rounded-xl p-2 shadow-2xl backdrop-blur-xl absolute">
            <div className="flex">
              <div className="flex gap-2">
                <div
                  className={`h-4 w-4 rounded-full bg-red-600 flex justify-center items-center text-xs cursor-pointer`}
                  onMouseEnter={() => setShowCross(true)}
                  onMouseLeave={() => setShowCross(false)}
                  onClick={() => setIsShowContact(false)}
                >
                  {showCross && <GrClose />}
                </div>
                <div className="h-4 w-4 rounded-full bg-gray-500 "></div>
                <div className="h-4 w-4 rounded-full bg-gray-500 "></div>
              </div>
              <div
                className="ml-14 font-bold"
                onClick={() => setIsShowContact(!isShowContact)}
              >
                Contact
              </div>
            </div>
            <div className="mx-auto my-4  flex justify-center items-center gap-2">
              <div className="w-14 h-14 border rounded-full"></div>
              <div className="flex flex-col ">
                <div className="font-bold text-2xl text-center">
                  Rahul Mujumdar
                </div>
                <div className="text-base text-center">Software Engineer</div>
              </div>
            </div>
            <div className="text-center flex items-center gap-2 justify-center">
              <FaPhone /> +91 7722075339
            </div>
            <div className="h-[1px] bg-gray-200 w-4/5 mx-auto my-3"></div>
            <div className="text-center flex gap-2 items-center justify-center">
              <GrMail /> rahulmujumdar2000@gmail.com
            </div>
            <div className="h-[1px] bg-gray-200 w-4/5 mx-auto my-3"></div>

            <div className="text-center flex items-center justify-center gap-2">
              <FaEarthAfrica /> rahul.in
            </div>
            <div className="flex justify-center gap-2 mt-10">
              <div className="p-1 bg-slate-500 hover:bg-slate-400 cursor-pointer rounded-md">
                My Projects
              </div>
              <div className="p-1 bg-slate-500 hover:bg-slate-400 cursor-pointer rounded-md">
                Contacts
              </div>
            </div>
          </div>
        )}
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsShowProjectPressed(!isShowProjectPressed);
            console.log("a", isShowProjectPressed);
          }}
        >
          My Projects
        </div>
      </div>
      <div className="flex items-center gap-3 justify-end w-1/4 mr-3">
        <div className="bg-white text-black rounded-md text-sm px-1 shadow-md border border-gray-50 ">
          EN
        </div>
        <div className="text-white text-sm font-semibold">{`${
          days[new Date().getDay()]
        }`}</div>
        <div className="text-white text-sm font-semibold">{`${
          new Date().getDate() +
          " " +
          new Date()
            .toLocaleTimeString("default", { month: "short" })
            .split(",")[0]
        }`}</div>
        <div className="text-white text-sm mr-0 text-end font-semibold">{`${new Date()
          .toLocaleTimeString()
          .split(":")
          .filter((_, index) => index !== 2)
          .join(":")} ${new Date().getHours() > 12 ? " PM" : " AM"}`}</div>
      </div>
    </div>
  );
};

export default TopNavbar;
