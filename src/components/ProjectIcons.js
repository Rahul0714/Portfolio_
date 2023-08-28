import React, { useState } from "react";
import { SiReact } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import Projects from "./Projects";

const ProjectIcon = () => {
  const [isShowProjectPressed, setIsShowProjectPressed] = useState(false);

  return (
    <div className="relative w-[100px] h-[100px] m-7">
      {isShowProjectPressed ? (
        <Projects
          isShowProjectPressed={isShowProjectPressed}
          setIsShowProjectPressed={setIsShowProjectPressed}
        />
      ) : null}
      <div
        className="text-6xl text-blue-400 flex justify-center items-center cursor-pointer "
        onClick={() => setIsShowProjectPressed((prev) => !prev)}
      >
        <SiReact className="relative" />
        <div className="w-[15px] h-[15px] bg-white flex justify-center items-center absolute top-[45px] left-[18px]">
          <HiArrowUpRight className="text-blue-950 text-sm font-bold" />
        </div>
      </div>
      <div className="text-white text-center p-1 text-base ">Projects</div>
    </div>
  );
};

export default ProjectIcon;
