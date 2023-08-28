import github from "../assets/github.png";

const GithubIcon = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-4 mt-3 ">
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
