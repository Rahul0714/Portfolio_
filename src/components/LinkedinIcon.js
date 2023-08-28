import { HiArrowUpRight } from "react-icons/hi2";
import linkedin from "../assets/linkedin.png";

const LinkedinIcon = () => {
  return (
    <div className="absolute w-[70px] top-[375px] m-7 left-[18px] flex flex-col justify-center items-center">
      <a
        className="rounded-md cursor-pointer"
        href="https://www.linkedin.com/in/rahul-mujumdar-53829518b/"
        target="_blank"
      >
        <img src={linkedin} alt="Linkedin" />
        <div className="w-[15px] h-[15px] bg-white flex justify-center items-center absolute top-[49px] left-[2px]">
          <HiArrowUpRight className="text-blue-950 text-sm font-bold" />
        </div>
      </a>
      <div className="mt-2 text-white">Linkedin</div>
    </div>
  );
};
export default LinkedinIcon;
