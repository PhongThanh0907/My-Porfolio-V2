import React from "react";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";

type Props = {};

export default function Technologies({}: Props) {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 max-w-7xl mx-auto py-20">
      {technologies.map((technology, index) => (
        <motion.div
          initial={{
            y: -150,
            opacity: 0,
          }}
          transition={{ duration: technology.transition }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`w-28 h-28 moveUpDown
        ${index % 2 == 0 ? "moveUpDown-1" : "moveUpDown-2"}
          `}
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
}
