import resume from "../assets/resume.png";

const ResumeIcon = () => {
  return (
    <div className="absolute w-[70px]  top-[125px] m-7 left-[15px] flex flex-col justify-center items-center">
      <div className="cursor-pointer">
        <img className="h-[60px]" src={resume} alt="Resume" />
      </div>
      <div className="text-white mt-2">Resume</div>
    </div>
  );
};

export default ResumeIcon;
