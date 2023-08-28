import resume from "../assets/resume.png";

const ResumeIcon = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-3 mt-1">
      <div className="cursor-pointer">
        <img className="h-[60px]" src={resume} alt="Resume" />
      </div>
      <div className="text-white mt-2">Resume</div>
    </div>
  );
};

export default ResumeIcon;
