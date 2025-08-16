import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: 1,
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      {/* Smallest circle */}
      <div
        className="absolute border border-[#333333] rounded-full 
        h-[120px] w-[120px] sm:h-[180px] sm:w-[180px] md:h-[200px] md:w-[200px] 
        mt-40 sm:mt-60 md:mt-96 animate-ping"
      />

      {/* Second circle */}
      <div
        className="absolute border border-[#333333] rounded-full 
        h-[180px] w-[180px] sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] 
        mt-40 sm:mt-60 md:mt-96"
      />

      {/* Third circle */}
      <div
        className="absolute border border-[#333333] rounded-full 
        h-[260px] w-[260px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] 
        mt-40 sm:mt-60 md:mt-96"
      />

      {/* Highlight circle */}
      <div
        className="absolute border border-[#F7AB0A] rounded-full opacity-20 
        h-[340px] w-[340px] sm:h-[520px] sm:w-[520px] md:h-[650px] md:w-[650px] 
        mt-40 sm:mt-60 md:mt-96 animate-pulse"
      />

      {/* Largest circle */}
      <div
        className="absolute border border-[#333333] rounded-full 
        h-[420px] w-[420px] sm:h-[650px] sm:w-[650px] md:h-[800px] md:w-[800px] 
        mt-40 sm:mt-60 md:mt-96 animate-pulse"
      />
    </motion.div>
  );
}

export default BackgroundCircles;
