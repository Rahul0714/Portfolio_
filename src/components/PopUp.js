import React from "react";
import useResize from "../utils/useResize";
import { IoBulbOutline } from "react-icons/io5";

const PopUp = ({ isClosed, setIsClosed }) => {
  const windowSize = useResize();
  return (
    <div
      className={`${
        !isClosed ? "hidden" : "z-20"
      } mx-auto text-white h-fit w-fit p-2 rounded-xl backdrop-blur-lg border-[1px] border-blue-950 shadow-sm text-center z-30 absolute left-[10%] right-[10%]`}
    >
      <div className="flex justify-center items-end gap-4 text-sm">
        <div className="flex flex-col gap-1 items-center justify-center ">
          <div className="mt-2 flex gap-2 items-center">
            <IoBulbOutline /> Did you know?
          </div>
          <div>
            This portfolio will also look great on
            {windowSize ? " Web" : " Mobile"}
          </div>
        </div>
        <div
          className="text-lg cursor-pointer p-1 my-auto  w-10 hover:text-blue-700"
          onClick={() => setIsClosed(false)}
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default PopUp;
