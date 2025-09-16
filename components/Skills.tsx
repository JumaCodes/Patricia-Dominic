import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { MYSkills } from "@/typings";

type Props = {
  skills: MYSkills[];
};

function Skills({ skills }: Props) {
  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center px-5 md:px-10 mx-auto max-w-7xl">
      {/* Section Title */}
      <h3 className="w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl mb-3">
        Skills
      </h3>

      {/* Subtitle */}
      <h4 className="w-full text-center text-gray-400 uppercase tracking-[3px] text-sm mb-20">
        Hover over a skill for current proficiency
      </h4>

      {/* Skills Grid with staggered animation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1, // stagger each skill fade-in
            },
          },
        }}
        className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 xl:mt-12 gap-5 justify-center items-center"
      >
        {skills?.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills
          ?.slice(Math.ceil(skills.length / 2), skills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </motion.div>
    </section>
  );
}

export default Skills;
