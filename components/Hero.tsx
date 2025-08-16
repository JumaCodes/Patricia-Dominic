import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const TypewriterHero: React.FC<Props> = ({ pageInfo }) => {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      `Guy-who-loves-Coffee.tsx`,
      `<ButLovesToCodeMore />`,
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 sm:space-y-8 items-center justify-center text-center overflow-hidden px-4 sm:px-6 md:px-0">
      <BackgroundCircles />

      {/* Profile Image */}
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Steve-John's Image"
        className="relative rounded-full h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mx-auto object-cover"
      />

      <div className="z-20">
        {/* Role */}
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[12px] md:tracking-[15px]">
          {pageInfo?.role}
        </h2>

        {/* Typewriter Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-4 sm:px-6 md:px-10">
          <span className="mr-2 sm:mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        {/* Buttons */}
        <div className="pt-4 sm:pt-5 flex flex-wrap justify-center gap-2 sm:gap-4">
          <Link href="#about">
            <button className="heroButton text-xs sm:text-sm px-3 sm:px-5 py-1 sm:py-2">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton text-xs sm:text-sm px-3 sm:px-5 py-1 sm:py-2">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-xs sm:text-sm px-3 sm:px-5 py-1 sm:py-2">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-xs sm:text-sm px-3 sm:px-5 py-1 sm:py-2">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TypewriterHero;
