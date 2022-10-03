import React from "react";
import { BsCircle } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Image from "next/future/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

export interface Data {
  tech?: Tech[];
  year?: string;
  logo: string | StaticImageData;
  link?: string;
}

export interface Tech {
  img: string | StaticImageData;
  color: string;
  link?: string;
}

const ExperienceTable: React.FC<Data> = ({ year, logo, tech, link }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex relative items-center justify-center w-1/4">
        <span className="text-2xl font-bold absolute text-blue-600 ">
          {year}
        </span>
        <div className="rounded-full border-8 p-20  border-blue-600"></div>
      </div>
      <div className="flex items-center justify-center w-1/4">
        <div className="rounded-full border-8 p-7 hover:border-red-400 border-gray-300 cursor-pointer">
          <Link
            href={link as string}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Image
              src={logo}
              width={100}
              height={100}
              className="hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-1/4 items-center justify-center">
        {tech?.map((i) => (
          <div
            key={Math.random()}
            className={`rounded-full border-4 p-10  border-gray-200 hover:${i.color}  relative mr-3 cursor-pointer`}
          >
            <Link
              href={i.link as string}
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Image
                src={i.img}
                width={90}
                height={90}
                className="absolute left-0 top-0 hover:scale-110"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTable;
