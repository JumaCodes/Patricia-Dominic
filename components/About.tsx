import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <section className="snap-center min-h-screen flex flex-col justify-center items-center px-5 md:px-10 mx-auto max-w-7xl">
      {/* Section Title */}
      <h3 className="w-full text-center uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        About
      </h3>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Profile Image */}
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Steve-John's Image"
          className="w-56 h-56 md:w-64 md:h-80 xl:w-[400px] xl:h-[500px] rounded-full md:rounded-lg object-cover flex-shrink-0"
        />

        {/* Text Content */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-5 md:space-y-10 text-center md:text-left px-0 md:px-10"
        >
          <h4 className="text-3xl md:text-4xl font-semibold uppercase">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base md:text-lg">
            {pageInfo?.backgroundInformation}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
