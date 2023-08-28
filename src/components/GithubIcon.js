import github from "../assets/github.png";

const GithubIcon = () => {
  return (
    <div className="z-10 flex flex-col justify-center items-center left-[18px] ">
      <a
        className="bg-white rounded-md cursor-pointer"
        href="https://github.com/Rahul0714"
        target="_blank"
      >
        <img className="h-[50px]" src={github} alt="Github" />
      </a>
      <div className="text-white mt-2">Github</div>
    </div>
  );
};

export default GithubIcon;
