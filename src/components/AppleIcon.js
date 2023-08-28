import apple from "../assets/apple.png";

const AppleIcon = () => {
  return (
    <div className="absolute  left-[125px] w-[60px]  m-7  flex flex-col justify-center items-center">
      <a className="rounded-md bg-blue-300 p-2 cursor-pointer">
        <img src={apple} alt="Linkedin" />
      </a>
      <div className="mt-1 text-white text-center">Apple Mode</div>
    </div>
  );
};
export default AppleIcon;
