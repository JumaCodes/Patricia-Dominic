import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "@/typings";

type Props = {
  experiences: Experiences[];
};

function Experience({ experiences }: Props) {
  return (
    <section className="h-screen flex flex-col justify-start items-center px-5 md:px-10 mx-auto overflow-hidden">
      {/* Section Title */}
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl mb-4"
      >
        Experience
      </motion.h3>

      <motion.h4
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="w-full text-center text-gray-400 uppercase tracking-[3px] text-sm mb-20"
            >
              Scroll Horizontally for more experience.
            </motion.h4>

      {/* Horizontal Scroll */}
      <div className="w-full flex space-x-5 overflow-x-auto snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pb-5 overflow-y-hidden">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
