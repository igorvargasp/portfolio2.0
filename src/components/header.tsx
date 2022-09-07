import Image from "next/future/image";
import headerImage from "../../public/hearder_image.png";
import docker from "../../public/docker_logo.png";
import kubernets from "../../public/kubernets_logo.png";
import nodeJs from "../../public/nodeJs_logo.png";
import react from "../../public/react_logo.png";
import "animate.css";

const Header = () => {
  return (
    <div className="w-scren flex">
      <div
        className="w-1/2 flex 
      lg:pt-24 flex-col md:pt-20 animate__animated animate__fadeInLeft  h-3/6"
      >
        <div
          className="tracking-widest font-bold 
        lg:text-8xl flex 
        flex-col items-end md:text-6xl"
        >
          <h1 className="lg:pr-4 md:pr-3">FULLSTACK</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div
          className="flex flex-col 
        pt-10"
        >
          <div
            className="flex items-center 
          gap-2 font-bold 
          lg:text-4xl justify-center md:text-3xl md:pr-9 lg:pr-1"
          >
            <hr className="w-10" />
            <h2 className="text-red-400">WHAT I DO?</h2>
          </div>
        </div>
        <div className="flex justify-end pt-10 lg:pr-10 md:pr-1 md:justify-end">
          <div
            className="flex flex-col
           text-gray-400
           lg:text-3xl
           md:text-xl"
          >
            <span>I BUILD WEBSITES, APPS AND SOFTWARES.</span>
            <span>YOU CAN FIND MY FULL CV BELOW</span>
          </div>
        </div>
        <div className="flex justify-center pt-10 pr-20">
          <div className="flex whitespace-nowrap lg:w-1/4 md:w-1/2">
            <button
              className="font-bold rounded-full
             bg-blue-600 
             w-full h-12 
             justify-center 
             items-center
              text-white flex hover:scale-110"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex relative lg:justify-center md:justify-center md:pt-18 lg:pt-1 animate__animated animate__fadeInRight ">
        <Image
          src={headerImage}
          className="lg:w-4/5 lg:h-5/5 md:w-5/5 md:h-5/5"
        />
        <div className="flex absolute rounded-full lg:right-3/4 animate-pulse md:right-3/4">
          <Image
            src={react}
            className="lg:w-24 md:w-16 animate__animated animate__bounce"
          />
        </div>
        <div className="flex absolute rounded-full lg:top-80 lg:left-18 animate-pulse md:left-1 md:top-80">
          <Image
            src={nodeJs}
            className="lg:w-24 md:w-16 animate__animated animate__bounce"
          />
        </div>
        <div className="flex absolute rounded-full  lg:top-3/4 lg:right-2/4 md:top-96 md:right-70 animate-pulse">
          <Image
            src={docker}
            className="lg:w-56 md:w-36 animate__animated animate__bounce"
          />
        </div>
        <div className="flex absolute rounded-full  lg:top-2/3 lg:right-40 md:top-72 md:right-5 animate-pulse">
          <Image
            src={kubernets}
            className="lg:w-24 md:w-16 animate__animated animate__bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
