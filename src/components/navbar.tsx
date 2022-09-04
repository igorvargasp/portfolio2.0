import Image from "next/image";
import logo from "../../public/logo_transparent.png";
import Button from "./button";

const NavBar = () => {
  return (
    <div className="w-full flex">
      <div className="lg:w-1/2 flex align-middle pl-32 md:w-1/3 ">
        <Image src={logo} width="140" height="140" />
      </div>
      <div className="lg:w-1/2 gap-20 flex lg:text-lg font-roboto pt-10 font-normal md:text-sm border-black md:w-1/3 align-middle justify-center">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Experience</span>
        <span className="cursor-pointer">Projects</span>
        <Button />
      </div>
    </div>
  );
};

export default NavBar;
