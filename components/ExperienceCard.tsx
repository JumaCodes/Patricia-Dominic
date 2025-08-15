import React from "react";
import { motion } from "framer-motion";
import { Experiences } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experiences;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
     bg-[#292929] p-10 cursor-pointer hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        src={urlFor(experience?.companyImage).url()}
        alt="Company Image"
        className="bg-white w-24 h-24 rounded-full md:w-[100px] md:h-[100px]  xl:object-contain object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light uppercase">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 uppercase">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="stack Icon"
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
