import React from "react";
import { motion } from "framer-motion";
import { MYSkills } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: MYSkills;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex justify-center items-center cursor-pointer">
      {/* Skill Image */}
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Hover Overlay */}
      <div className="absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 flex items-center justify-center">
        <p className="text-xl md:text-2xl xl:text-3xl font-bold text-black">
          {skill.progress}%
        </p>
      </div>
    </div>
  );
}

export default Skill;
