import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";
import { Project } from "@/typings";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <section className="h-screen flex flex-col">
      {/* Title - stays fixed at top */}
      <h3 className="w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl mb-5">
        Projects
      </h3>

      {/* Horizontal Scroll Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex-1 flex overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 px-10 md:px-20"
      >
        <div className="flex space-x-10">
          {projects.map((project, i) => (
            <div
              key={project._id}
              className="flex flex-row items-center justify-center space-x-8 min-w-full"
            >
              {/* Project Image */}
              <div className="w-full md:w-[45%] h-[360px] md:h-[500px] flex-shrink-0">
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
              <div className="w-full md:w-[50%] max-w-[500px] flex flex-col items-center md:items-start space-y-3">
                <h4 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
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
                      className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
                      alt={tech.title}
                    />
                  ))}
                </div>

                <h3 className="text-3xl uppercase text-[#F7AB0A] font-bold">
                  Click The Image
                </h3>

                {/* Summary */}
                <div className="text-base md:text-lg break-words max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                  {project.summary}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
