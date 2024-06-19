"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { aileron } from "./Fonts";
const Page = ({ alt, imageURL, sevenXL, caption, originalAspect }) => {
  return (
    <div
      className={`${sevenXL == true ? "max-w-7xl" : ""} mx-auto flex w-full max-w-5xl flex-col gap-1 md:gap-2`}
    >
      {/* //? image */}
      <div
        className={`relative mx-auto overflow-hidden border-2 ${originalAspect ? "" : "aspect-4/3 md:aspect-video"} w-full`}
      >
        <motion.div
          transition={{ type: "spring", bounce: 0 }}
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: "some" }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={imageURL}
            fetchPriority="auto"
            alt={alt}
            height="100%"
            width="100%"
            className="h-full w-full object-cover"
            // loading="lazy"
            // fill={true}
          />
        </motion.div>
        {/* //? overlay */}
        {/* {textData && (
          <div className="absolute z-30 h-full w-full bg-gradient-to-b from-gray-950/10 to-gray-950/50">
            <h2
              className={`${playfair_display.className} absolute bottom-4 left-0 right-0 mx-auto max-w-5xl text-balance text-center indent-4 text-sm text-white md:bottom-0 md:text-3xl`}
            >
              {textData}
            </h2>
          </div>
        )} */}
      </div>
      {/* //caption */}
      {caption && (
        <div
          className={`${aileron.className} mx-auto w-full text-left text-xs text-gray-500 md:text-base`}
        >
          {caption}
        </div>
      )}
    </div>
  );
};
export default Page;
