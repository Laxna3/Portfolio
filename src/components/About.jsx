import React from "react";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="border-b border-neutral-900 pb-4"
    >
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          {/* <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="" />
          </div>*/}
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w"
        >
          <div className="flex justify-center items-center lg:justify-start">
            <p className="my-2 py-6 tracking-wide leading-7">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
