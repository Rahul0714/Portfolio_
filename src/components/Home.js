import React, { useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import windows from "../assets/windows.jpg";
import BottomNavbar from "./BottomNavbar";
import Github from "./GithubIcon";
import ProjectIcon from "./ProjectIcons";
import ResumeIcon from "./ResumeIcon";
import LinkedinIcon from "./LinkedinIcon";
import FullscreenIcon from "./FullscreenIcon";

const Home = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div className="flex flex-col w-full h-screen">
      <div
        className={`${
          !isClosed ? "hidden" : "z-10"
        } absolute top-[21px] left-[500px] text-white h-[75px] w-[400px] rounded-xl backdrop-blur-lg border-[1px] border-blue-950 shadow-sm text-center`}
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
      <img className="min-w-full fixed" src={windows} alt="Windows" />
      <ProjectIcon />
      <ResumeIcon />
      <Github />
      <LinkedinIcon />
      <FullscreenIcon />
      <BottomNavbar />
    </div>
  );
};

export default Home;
