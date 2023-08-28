import React, { useState } from "react";
import { SiReact } from "react-icons/si";
import Projects from "./Projects";

const ProjectIcon = ({ isShowProjectPressed, setIsShowProjectPressed }) => {
  return (
    <div className="mx-3">
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
        <SiReact className="" />
      </div>
      <div className="text-white text-center p-1 text-base ">Projects</div>
    </div>
  );
};

export default ProjectIcon;
