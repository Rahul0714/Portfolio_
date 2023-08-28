import safari from "../assets/safari.png";
import mail from "../assets/mail.png";
import contacts from "../assets/contacts.png";
import { SiReact } from "react-icons/si";

const AppleBottomNavbar = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute bottom-[65px] text-white flex justify-center w-full m-1">
        <div className="flex items-center gap-2">
          <SiReact />
          <div className="flex">
            <div className="text-gray-300">Made with &nbsp;</div> React
          </div>
        </div>
      </div>
      <div className="px-4 m-1  flex justify-center items-center w-fit h-16 py-3 backdrop-blur-3xl z-10 absolute bottom-0 rounded-2xl border border-gray-700 shadow-xl">
        <div className="flex gap-1 justify-center items-center">
          <div className="text-blue-400 hover:scale-125 transition duration-100 ease-in-out cursor-pointer ">
            <img className="w-12" src={safari} alt="Safari" />
          </div>
          <div className="text-blue-300 hover:scale-125 transition duration-100 ease-in-out cursor-pointer">
            <img className="w-12" src={mail} alt="Mail" />
          </div>
          <div
            className="
            text-blue-400
            text-4xl hover:scale-125 transition duration-100 ease-in-out cursor-pointer"
          >
            <SiReact />
          </div>
          <div className="text-blue-400 text-4xl hover:scale-125 transition duration-100 ease-in-out cursor-pointer">
            <img className="w-12" src={contacts} alt="Contacts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleBottomNavbar;
