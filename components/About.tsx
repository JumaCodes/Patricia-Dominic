import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative">
      {/* Title stays absolutely positioned */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      {/* Add top padding here to prevent overlap */}
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Steve-John's Image"
          className="mb-10  mt-20 md:mt-0 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10 px-0 md:px-10"
        >
          <h4 className="text-4xl font-semibold uppercase">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          {/* Add a short description if you like */}
          <p className="text-base">{pageInfo?.backgroundInformation}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
