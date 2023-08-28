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
import PopUp from "./PopUp";
import android from "../assets/anroid.jpg";
import MobileWeather from "./MobileWeather";

const Home = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isShowProjectPressed, setIsShowProjectPressed] = useState(false);
  const windowSize = useResize();

  const isApple = useSelector((store) => store.utils.isApple);

  useEffect(() => {
    setIsClosed(true);
  }, [isApple, windowSize]);

  return (
    <div className="flex flex-col max-h-screen h-auto ">
      <PopUp isClosed={isClosed} setIsClosed={setIsClosed} />
      {windowSize && <MobileWeather />}
      <img
        className=" object-cover fixed w-full h-screen overflow-hidden -z-10"
        src={windowSize ? android : windows}
        alt="Windows"
      />
      <div className=" flex flex-row sm:flex-col items-start box-border m-4 gap-4 flex-wrap">
        <ProjectIcon
          isShowProjectPressed={isShowProjectPressed}
          setIsShowProjectPressed={setIsShowProjectPressed}
        />
        <ResumeIcon />
        <GithubIcon />
        <LinkedinIcon />
        <FullscreenIcon />
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Home;
