import React, { useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import ProjectIcon from "./ProjectIcons";
import ResumeIcon from "./ResumeIcon";
import LinkedinIcon from "./LinkedinIcon";
import GithubIcon from "./GithubIcon";
import FullscreenIcon from "./FullscreenIcon";
import AppleBottomNavbar from "./AppleBottomNavbar";
import TopNavbar from "./TopNavbar";
import WindowsIcon from "./WindowsIcon";
import apple from "../assets/apple.jpg";

const AppleMode = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isShowProjectPressed, setIsShowProjectPressed] = useState(false);

  return (
    <div className="flex flex-col w-full max-h-screen h-auto flex-wrap">
      <div
        className={`${
          !isClosed ? "hidden" : "z-20"
        } absolute top-[21px] left-[500px] text-white h-[75px] w-[400px] rounded-xl backdrop-blur-lg border-[1px] border-blue-950 shadow-sm text-center`}
      >
        <div className="flex justify-center items-end gap-4 text-sm">
          <div className="flex flex-col gap-1 items-center justify-center ">
            <div className="mt-2 flex gap-2 items-center">
              <IoBulbOutline /> Did you know?
            </div>
            <div className="text-base">
              This portfolio will also look great on mobile
            </div>
          </div>
          <div
            className="text-base cursor-pointer px-2 rounded-md w-10 hover:text-gray-200 bg-slate-600 backdrop-blur-xl "
            onClick={() => setIsClosed(false)}
          >
            OK
          </div>
        </div>
      </div>
      <img
        className=" object-cover fixed w-full h-screen"
        src={apple}
        alt="Windows"
      />
      <TopNavbar
        isShowProjectPressed={isShowProjectPressed}
        setIsShowProjectPressed={setIsShowProjectPressed}
      />
      <ProjectIcon
        isShowProjectPressed={isShowProjectPressed}
        setIsShowProjectPressed={setIsShowProjectPressed}
      />
      <ResumeIcon />
      <GithubIcon />
      <LinkedinIcon />
      <FullscreenIcon />
      <WindowsIcon />
      <AppleBottomNavbar />
    </div>
  );
};

export default AppleMode;
