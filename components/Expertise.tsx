import React from "react";
import { motion } from "framer-motion";
import { Expertises } from "@/typings";

type Props = {
  expertise: Expertises[];
};

const Expertise = ({ expertise }: Props) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12">
      {/* Title */}
      <motion.h3
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="uppercase tracking-[20px] text-gray-500 text-3xl md:text-4xl mb-12 text-center"
      >
        Expertise
      </motion.h3>
      {/* Subtitle */}
      <motion.h4
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="w-full text-center text-gray-400 uppercase tracking-[3px] text-sm mb-20"
      >
        Key areas where I help entrepreneurs and businesses stay organized,
        efficient, and supported.
      </motion.h4>

      {/* Expertise Cards */}
      <div className="grid md:grid-cols-3 gap-10 w-full max-w-7xl">
        {expertise.map((item) => (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            key={item._id}
            className="bg-[#292929] p-8 md:p-10 cursor-pointer hover:opacity-100 opacity-70 rounded-2xl p-8 shadow-xl flex flex-col hover:scale-105 transition-transform"
          >
            <h4 className="text-lg md:text-2xl font-semibold mb-6 text-white text-start">
              {item.title}
            </h4>
            <motion.ul
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="list-disc list-outside pl-6 space-y-3 text-gray-300 text-base md:text-lg leading-relaxed"
            >
              {item.points?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
