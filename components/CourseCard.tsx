"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  progress: number;
  index: number;
}

export default function CourseCard({
  title,
  progress,
  index,
}: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="bg-[#13131a] rounded-3xl p-5 border border-zinc-800 hover:border-violet-400/60 transition"
    >
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-sm text-gray-400">
        Progress
      </p>

      <div className="w-full bg-zinc-700 rounded-full h-3 mt-2 overflow-hidden">
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="bg-violet-500 h-3 rounded-full"
        />
      </div>

      <p className="mt-2">
        {progress}%
      </p>
    </motion.article>
  );
}