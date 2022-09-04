import Image from "next/image";
import headerImage from "../../public/hearder_image.png";
import docker from "../../public/docker_logo.png";
import kubernets from "../../public/kubernets_logo.png";
import nodeJs from "../../public/nodeJs_logo.png";
import react from "../../public/react_logo.png";

const Header = () => {
  return (
    <div className="w-full flex">
      <div
        className="w-1/2 flex 
      pt-24 flex-col"
      >
        <div
          className="tracking-widest font-bold 
        text-8xl flex 
        flex-col items-end"
        >
          <h1 className="pr-4">FULLSTACK</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div
          className="flex flex-col 
        pt-10"
        >
          <div
            className="flex items-center 
          gap-2 font-bold 
          text-4xl justify-center"
          >
            <hr className="w-10" />
            <h2 className="text-red-400">WHAT I DO?</h2>
          </div>
        </div>
        <div className="flex justify-end pt-10 pr-10">
          <div
            className="flex flex-col
           text-gray-400
           text-3xl"
          >
            <span>I BUILD WEBSITES, APPS AND SOFTWARES.</span>
            <span>YOU CAN FIND MY FULL CV BELOW</span>
          </div>
        </div>
        <div className="flex justify-center pt-10 pr-20">
          <div className="flex whitespace-nowrap w-1/5">
            <button
              className="font-bold rounded-full
             bg-blue-600 
             w-full h-12 
             justify-center 
             items-center
              text-white flex"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex relative justify-center">
        <Image src={headerImage} width="670" height="587" />
        <div className="flex absolute rounded-full right-3/4">
          <Image src={react} width="101" height="101" />
        </div>
        <div className="flex absolute rounded-full top-80 left-10">
          <Image src={nodeJs} width="101" height="101" />
        </div>
        <div className="flex absolute rounded-full  top-full right-2/4">
          <Image src={docker} width="160" height="101" />
        </div>
        <div className="flex absolute rounded-full  top-3/4 right-20">
          <Image src={kubernets} width="101" height="101" />
        </div>
      </div>
    </div>
  );
};

export default Header;
