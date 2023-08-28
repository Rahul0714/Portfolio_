import { useState, useEffect } from "react";

import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

const FullscreenIcon = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onFullScreenChange = () => {
    setIsFullScreen(Boolean(document.fullscreenElement));
    if (isFullScreen === false) {
      document.body.requestFullscreen();
    } else {
      document?.exitFullscreen();
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", onFullScreenChange);
    console.log(isFullScreen);
    return () =>
      document.removeEventListener("fullscreenchange", onFullScreenChange);
  }, [isFullScreen]);

  return (
    <div className=" z-10 left-[23px] flex flex-col justify-center items-center">
      <div
        className="text-5xl text-blue-950 flex justify-center items-center bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => onFullScreenChange()}
      >
        {!isFullScreen ? <AiOutlineFullscreen /> : <AiOutlineFullscreenExit />}
      </div>
      <div className="text-white mt-2">Fullscreen</div>
    </div>
  );
};

export default FullscreenIcon;
