import { HiArrowUpRight } from "react-icons/hi2";
import linkedin from "../assets/linkedin.png";

const LinkedinIcon = () => {
  return (
    <div className="z-10 flex flex-col justify-center items-center">
      <a
        className="rounded-md cursor-pointer"
        href="https://www.linkedin.com/in/rahul-mujumdar-53829518b/"
        target="_blank"
      >
        <img className="h-[60px]" src={linkedin} alt="Linkedin" />
      </a>
      <div className="mt-2 text-white">Linkedin</div>
    </div>
  );
};
export default LinkedinIcon;
