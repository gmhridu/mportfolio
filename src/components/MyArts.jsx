import React from "react";
import { motion } from "framer-motion";

// Import your images
import art1 from "../assets/art-1.jpg";
import art2 from "../assets/art-2.jpg";

// Array of images
const IMAGES = [art1, art2];

const MyArts = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl text-neutral-500"
        >
          My <span className="text-white">Art Gallery</span>
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 mb-16">
        {/* Map over images */}
        {IMAGES.map((image, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Alternate direction
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl"
          >
            <img src={image} alt={`Art ${index + 1}`} className="rounded-xl w-full h-full" sizes="20"/>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
