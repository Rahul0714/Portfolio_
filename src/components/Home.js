import React, { useEffect, useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import windows from "../assets/windows.jpg";
import BottomNavbar from "./BottomNavbar";
import GithubIcon from "./GithubIcon";
import ProjectIcon from "./ProjectIcons";
import ResumeIcon from "./ResumeIcon";
import LinkedinIcon from "./LinkedinIcon";
import FullscreenIcon from "./FullscreenIcon";
import { useSelector } from "react-redux";
import useResize from "../utils/useResize";

const Home = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isShowProjectPressed, setIsShowProjectPressed] = useState(false);
  const windowSize = useResize();

  const isApple = useSelector((store) => store.utils.isApple);

  useEffect(() => {
    setIsClosed(true);
  }, [isApple, windowSize]);

  return (
    <div className="flex flex-col max-h-screen h-auto">
      <div
        className={`${
          !isClosed ? "hidden" : "z-20"
        } absolute left-[40%] text-white h-fit w-[1/2] p-2 rounded-xl backdrop-blur-lg border-[1px] border-blue-950 shadow-sm text-center`}
      >
        <div className="flex justify-center items-end gap-4 text-sm">
          <div className="flex flex-col gap-1 items-center justify-center ">
            <div className="mt-2 flex gap-2 items-center">
              <IoBulbOutline /> Did you know?
            </div>
            <div>This portfolio will also look great on mobile</div>
          </div>
          <div
            className="text-lg cursor-pointer p-1  w-10 hover:text-blue-700"
            onClick={() => setIsClosed(false)}
          >
            OK
          </div>
        </div>
      </div>
      <img
        className=" object-cover fixed w-full h-screen overflow-hidden -z-10"
        src={windows}
        alt="Windows"
      />
      <div className="z-10 flex flex-row sm:flex-col items-start box-border m-4 gap-4 flex-wrap">
        <ProjectIcon
          isShowProjectPressed={isShowProjectPressed}
          setIsShowProjectPressed={setIsShowProjectPressed}
        />
        <ResumeIcon />
        <GithubIcon />
        <LinkedinIcon />
        <FullscreenIcon />
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Home;
