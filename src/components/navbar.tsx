import Image from "next/future/image";
import logo from "../../public/logo_transparent.png";
import Button from "./button";

const NavBar = () => {
  return (
    <div className="w-full flex">
      <div className="flex lg:w-1/2 md:w-1/4 md:justify-center lg:justify-start lg:pl-40">
        <Image src={logo} className="lg:w-1/5 md:w-1/2" />
      </div>

      <div className="lg:w-1/2 gap-20 flex lg:text-lg md:w-3/4 font-roboto pt-10 font-medium md:text-sm border-black align-middle justify-center">
        <span className="cursor-pointer hover:scale-105 hover:text-blue-600">
          Home
        </span>
        <span className="cursor-pointer hover:scale-105 hover:text-blue-600">
          Experience
        </span>
        <span className="cursor-pointer hover:scale-105 hover:text-blue-600">
          Projects
        </span>
        <Button />
      </div>
    </div>
  );
};

export default NavBar;
