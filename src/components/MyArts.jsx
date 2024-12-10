import React from "react";

// Import your images
import art1 from "../assets/art-1.jpg";
import art2 from "../assets/art-2.jpg";

const getDetails = [
  {
    id: 1,
    date: "15 Aug 2024",
    image: art1,
  },

  {
    id: 2,
    date: "24 Nov 2024",
    image: art2,
  },
];

// Array of images
const IMAGES = [art1, art2];

const MyArts = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-10">
        <h2 className="my-20 text-center text-4xl text-neutral-500">
          My <span className="text-white">Art Gallery</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 mb-16">
        {/* Map over images */}
        {getDetails?.map((data, i) => (
          <div
            key={i}
            className="hover:text-primary hover:border-primary border-[1px] border-accent p-7 flex flex-col gap-2 rounded-2xl"
          >
            
            <img
              src={data?.image}
              alt={`Art ${i + 1}`}
              className="rounded-xl w-full h-full"
              sizes="16"
            />
            <p className="text-end my-1">Uploaded On : {data?.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
