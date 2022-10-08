import React, { useEffect, useState } from "react";
import { BsCircle } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Image from "next/future/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import "animate.css";

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
      <div className="flex relative lg:items-center lg:justify-center md:items-center md:justify-center lg:w-1/4 md:w-1/3 animate__animated animate__backInLeft">
        <span className="lg:text-2xl md:text-1xl font-bold absolute text-blue-600 ">
          {year}
        </span>
        <div className="rounded-full border-8 lg:p-20 md:p-12  border-blue-600"></div>
      </div>
      <div className="flex lg:items-center lg:justify-center md:items-center md:justify-center lg:w-1/4 md:w-1/3">
        <div className="rounded-full border-8 p-7 hover:border-red-400 border-gray-300 cursor-pointer md:ml-5 animate__animated animate__backInLeft animate__delay-2s">
          <Link
            href={link as string}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <Image
              src={logo}
              className="hover:scale-110 md:w-10 md:h-10 lg:w-20 lg:h-20"
            />
          </Link>
        </div>
      </div>
      <div className="flex lg:w-1/4 md:w-1/3 lg:items-center lg:justify-center md:items-center md:justify-end">
        {tech?.map((i) => (
          <div
            key={Math.random()}
            className={`rounded-full border-4 lg:p-10 md:p-5  border-gray-200 ${i.color}  relative mr-3 cursor-pointer animate__animated animate__backInRight`}
          >
            <Link
              href={i.link as string}
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <Image
                src={i.img}
                className="absolute left-0 top-0 hover:scale-110 md:w-10 md:h-10 lg:w-20 lg:h-20"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTable;
