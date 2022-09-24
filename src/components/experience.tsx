import { BsArrowRight, BsCircle } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const Experience = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex row justify-center w-full pt-20 font-roboto font-bold gap-16 items-center ">
        <br />
        <h2 className="text-blue-600 text-5xl">EXPERIENCE</h2>
        <BsArrowRight className="text-6xl" />
        <h2 className="text-blue-600 text-5xl">WHERE</h2>
        <BsArrowRight className="text-6xl" />
        <h2 className="text-blue-600 text-5xl">TECHNOLOGIES</h2>
      </div>
      <div className="w-full flex pt-40">
        <div className="w-full flex items-center justify-center">
          <div className="flex relative items-center justify-center w-1/4">
            <span className="text-3xl font-bold absolute text-blue-600 ">
              1 Year
            </span>
            <BsCircle className="text-9xl text-blue-600 " />
          </div>
          <div className="flex relative items-center justify-center w-1/4">
            <ImLocation className="text-9xl text-red-400" />
            <img />
          </div>
          <div className="flex relative items-center justify-center w-1/4">
            <div className="rounded-full p-10 bg-gray-400"></div>
            <div className="rounded-full  bg-gray-400 p-10">
              <img />
            </div>
            <div className="rounded-full  bg-gray-400 p-10">
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
