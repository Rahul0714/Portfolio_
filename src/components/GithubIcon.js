import { HiArrowUpRight } from "react-icons/hi2";
import github from "../assets/github.png";

const GithubIcon = () => {
  return (
    <div className="absolute w-[60px]  top-[250px] m-7 flex flex-col justify-center items-center left-[18px] ">
      <a
        className="bg-white rounded-md cursor-pointer"
        href="https://github.com/Rahul0714"
        target="_blank"
      >
        <img src={github} alt="Github" />
        <div className="w-[15px] h-[15px] bg-white flex justify-center items-center absolute top-[47px] -left-[6px]">
          <HiArrowUpRight className="text-blue-950 text-sm font-bold" />
        </div>
      </a>
      <div className="text-white mt-2">Github</div>
    </div>
  );
};

export default GithubIcon;
