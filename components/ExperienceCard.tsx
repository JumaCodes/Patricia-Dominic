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
      className="flex flex-col rounded-lg items-center justify-start space-y-7 flex-shrink-0 
                 w-[80vw] md:w-[500px] xl:w-[700px] h-[70vh] 
                 bg-[#292929] p-8 md:p-10 cursor-pointer hover:opacity-100 opacity-70 
                 transition-opacity duration-200 overflow-hidden"
    >
      {/* Company Image */}
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        src={
          experience?.companyImage
            ? urlFor(experience.companyImage)?.url()
            : "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757670643/Patricia_Dominic_kfhipy.jpg"
        }
        alt="Company Image"
        className="bg-white w-24 h-24 md:w-28 md:h-28 rounded-full object-cover object-center"
      />

      {/* Text Content */}
      <div className="flex flex-col flex-grow px-0 md:px-6 text-center md:text-left w-full">
        <h4 className="text-2xl md:text-3xl font-semibold">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl mt-1 uppercase">{experience.company}</p>

        {/* Technologies */}
        <div className="flex space-x-2 my-2 justify-center md:justify-start flex-wrap">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={
                technology?.image
                  ? urlFor(technology.image)?.url()
                  : "https://res.cloudinary.com/dgmfpoddb/image/upload/v1757670643/Patricia_Dominic_kfhipy.jpg"
              }
              alt="stack Icon"
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>

        {/* Dates */}
        <p className="uppercase py-3 text-gray-300 text-sm md:text-base">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        {/* Points */}
        <ul className="list-disc space-y-2 ml-5 text-sm md:text-base overflow-y-auto max-h-40 md:max-h-60 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-2">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
