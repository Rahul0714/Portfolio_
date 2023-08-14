import React from "react";
import { projectList } from "../utils/projectList";
import "../../style.css";

const Projects = ({ isShowProjectPressed, setIsShowProjectPressed }) => {
  return (
    <div className="absolute left-36 h-[630px] w-[1121px] rounded-lg border-gray-50 text-white bg-[#303030] shadow-lg overflow-auto scroll-m-0 forScroll">
      <div className="flex flex-grow justify-end">
        <h1
          onClick={() => {
            setIsShowProjectPressed(!isShowProjectPressed);
            console.log(isShowProjectPressed);
          }}
          className="float-right mx-4 my-2 px-2 py-1 w-fit font-bold hover:bg-red-500 cursor-pointer rounded-sm"
        >
          X
        </h1>
      </div>
      <div className="m-4">
        <div className="text-5xl font-bold">
          <h1>My Projects</h1>
          <div className="h-[1px] w-full border border-gray-600 mt-4"></div>
        </div>
        <div className="flex flex-wrap my-4 justify-center">
          <div className="flex flex-col border border-gray-700 backdrop-blur-md rounded-xl hover:scale-105 w-[40%] p-7 m-2 items-center">
            <img className="" src={projectList[0].photo} alt="Project" />
            <h1 className="text-4xl font-bold">{projectList[0].name}</h1>
            <h2 className="text-xl">{projectList[0].tags}</h2>
            <h4 className="text-lg">{projectList[0].github}</h4>
          </div>
          <div className="flex flex-col border border-gray-700 backdrop-blur-md rounded-xl hover:scale-105 w-[40%] p-7 m-2 items-center">
            <img className="" src={projectList[0].photo} alt="Project" />
            <h1 className="text-4xl font-bold">{projectList[0].name}</h1>
            <h2 className="text-xl">{projectList[0].tags}</h2>
            <h4 className="text-lg">{projectList[0].github}</h4>
          </div>
          <div className="flex flex-col border border-gray-700 backdrop-blur-md rounded-xl hover:scale-105 w-[40%] p-7 m-2 items-center">
            <img className="" src={projectList[0].photo} alt="Project" />
            <h1 className="text-4xl font-bold">{projectList[0].name}</h1>
            <h2 className="text-xl">{projectList[0].tags}</h2>
            <h4 className="text-lg">{projectList[0].github}</h4>
          </div>
          <div className="flex flex-col border border-gray-700 backdrop-blur-md rounded-xl hover:scale-105 w-[40%] p-7 m-2 items-center">
            <img className="" src={projectList[0].photo} alt="Project" />
            <h1 className="text-4xl font-bold">{projectList[0].name}</h1>
            <h2 className="text-xl">{projectList[0].tags}</h2>
            <h4 className="text-lg">{projectList[0].github}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
