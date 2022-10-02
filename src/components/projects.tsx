import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import Link from "next/link";

const Project = () => {
  const [repo, setRepo] = useState<[]>([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  function SampleArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#2563eb" }}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    const response = async () => {
      const data = await axios.get(
        "https://api.github.com/users/igorvargasp/repos"
      );
      console.log(data.data);
      if (!data) {
        return;
      }
      setRepo(data.data);
    };
    response();
  }, []);

  return (
    <div className="flex flex-col w-full mt-60">
      <div className="flex w-full items-center justify-center">
        <div className="w-1/4">
          <hr className="border-4" />
        </div>
        <div className="w-1/4 justify-center flex text-4xl font-roboto font-bold text-blue-600 ">
          <h1>PROJECTS</h1>
        </div>
        <div className="w-1/4">
          <hr className="border-4" />
        </div>
      </div>

      <div className="w-full  pt-40 flex items-center justify-center">
        <div className="w-3/4 ">
          <Slider {...settings}>
            {repo?.map((i: any) => (
              <div className="pl-14">
                <Link
                  href={i.html_url}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <div className="w-4/5 flex flex-col items-center justify-center gap-2 border text-justify p-8 hover:border-blue-600 rounded cursor-pointer shadow">
                    <span className="text-blue-600 font-bold uppercase">
                      {i.full_name.substring(12)}
                    </span>
                    <span className="font-bold  text-gray-400">
                      {i.created_at.substring(0, 10)}
                    </span>
                    <span className="text-black font-semibold">
                      {i.description ? i.description : "No description"}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Project;
