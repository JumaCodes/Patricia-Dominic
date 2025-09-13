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
    <div
      className={`group relative flex justify-center items-center flex-col cursor-pointer`}
    >
      {/* Skill Image */}
      <motion.img
        initial={{ x: directionLeft ? -150 : 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }} // Animate only once
        transition={{ duration: 0.8 }}
        src={urlFor(skill.image)?.url()}
        alt={skill.title}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Hover Overlay */}
      <div className="absolute top-0 rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 flex items-center justify-center">
        <p className="text-lg md:text-xl xl:text-2xl font-bold text-black">
          {skill.progress}%
        </p>
      </div>

      <p className="text-lg md:text-xl xl:text-2xl font-bold text-white md:mt-10 mt-4 mb-4">
        {skill.title}
      </p>
    </div>
  );
}

export default Skill;
