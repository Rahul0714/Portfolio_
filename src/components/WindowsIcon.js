import { useDispatch } from "react-redux";
import windows from "../assets/win11_logo.png";
import { moveToWindows } from "../redux/utilsSlice";

const WindowsIcon = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(moveToWindows());
  };
  return (
    <div className="absolute  left-[125px] w-[60px]  m-7  flex flex-col justify-center items-center top-5">
      <a className="rounded-md bg-blue-300 p-2 cursor-pointer">
        <img src={windows} alt="Linkedin" onClick={handleClick} />
      </a>
      <div className="mt-1 text-white text-center">Windows Mode</div>
    </div>
  );
};
export default WindowsIcon;
