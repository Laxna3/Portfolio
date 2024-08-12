import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="tracking-wide flex items-center justify-center">
        <a
          className="m-4 text-5xl text-blue-800"
          href="https://www.linkedin.com/in/laxna-gautam-768742273"
        >
          <FaLinkedin />
        </a>
        <a className="m-4 text-5xl" href="https://www.github.com/Laxna3">
          <FaGithub />
        </a>
        <a
          className="m-4 text-5xl text-pink-600"
          href="https://www.instagram.com/paradisewith7"
        >
          <FaInstagram />
        </a>
        <a
          className="m-4 text-5xl text-red-600"
          href="laxna.gautam1206@gmail.com "
        >
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
