import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 cursor-pointer">
      <h2
      className="my-20 text-center text-4xl">Technologies</h2>
      <div
      className="flex flex-wrap items-center justify-center gap-4">
        <div
          title="Tailwind CSS"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-500" />
        </div>
        <div
          title="React JS"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-blue-600" />
        </div>
        <div
          title="NextJs"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div
          title="Firebase"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoFirebase className="text-7xl text-yellow-500" />
        </div>
        <div
          title="MongoDB"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div
          title="NodeJs"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
