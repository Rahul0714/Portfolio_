import { useDispatch } from "react-redux";
import apple from "../assets/apple.png";
import { moveToApple } from "../redux/utilsSlice";

const AppleIcon = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(moveToApple());
  };
  return (
    <div className="absolute  left-[125px] w-[60px]  m-7  flex flex-col justify-center items-center">
      <a className="rounded-md bg-blue-300 p-2 cursor-pointer">
        <img src={apple} alt="Linkedin" onClick={handleClick} />
      </a>
      <div className="mt-1 text-white text-center">Apple Mode</div>
    </div>
  );
};
export default AppleIcon;
