import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";
import { Project } from "@/typings";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col overflow-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* Title */}
      <h3 className="w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl py-4 mb-20">
        Projects
      </h3>

      {/* Projects container */}
      <div className="flex space-x-10 px-5 md:px-20 flex-row md:flex-row overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 pb-8">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-8 min-w-full pb-6"
          >
            {/* Project Image */}
            <div className="w-full md:w-[45%] h-[260px] md:h-[460px] flex-shrink-0">
              {project.linkToBuild ? (
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </a>
              ) : (
                <motion.img
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>

            {/* Project Details */}
            <div className="w-full md:w-[50%] max-w-[500px] flex flex-col items-center md:items-start space-y-3 pb-4">
              <h4 className="text-xl md:text-3xl font-semibold text-center md:text-left">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {project.technologies?.map((tech) => (
                  <img
                    src={urlFor(tech.image).url()}
                    key={tech._id}
                    className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full"
                    alt={tech.title}
                  />
                ))}
              </div>

              {/* Summary */}
              <div className="text-sm md:text-lg break-words max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                {project.summary}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
