import Image from "next/future/image";
import { useEffect, useState } from "react";
import logo from "../../public/logo_transparent.png";
import Button from "./button";

const NavBar = () => {
  const [item, setItem] = useState<string>("");

  useEffect(() => {
    var elmntToView = document.getElementById(item);
    elmntToView?.scrollIntoView({ behavior: "smooth" });
  }, [item]);

  return (
    <div className="w-full flex">
      <div className="flex lg:w-1/2 md:w-1/4 md:justify-center lg:justify-start lg:pl-40">
        <Image src={logo} className="lg:w-1/5 md:w-1/2" />
      </div>

      <div className="lg:w-1/2 gap-20 flex lg:text-lg md:w-3/4 font-roboto pt-10 font-medium md:text-sm border-black align-middle justify-center">
        <span
          className="cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={() => setItem("")}
        >
          Home
        </span>
        <span
          className="cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={() => setItem("experience")}
        >
          Experience
        </span>
        <span
          className="cursor-pointer hover:scale-105 hover:text-blue-600"
          onClick={() => setItem("projects")}
        >
          Projects
        </span>
        <div onClick={() => setItem("contact")}>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
