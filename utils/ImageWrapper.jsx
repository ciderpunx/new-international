"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import localfont from "next/font/local";
const aileron = localfont({
  src: "../app/Aileron-Regular.woff2",
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  // style: 'italic',
});
const Page = ({ alt, imageURL, textData, sevenXL, bodyWidth, caption }) => {
  return (
    <div
      className={`${sevenXL == true ? "max-w-7xl" : ""} mx-auto flex w-full max-w-5xl flex-col gap-1 md:gap-2`}
    >
      {/* //? image */}
      <div className="relative aspect-4/3 w-full md:aspect-video">
        <motion.div
          transition={{ type: "spring", bounce: 0 }}
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: "some" }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <Image
            src={imageURL}
            style={{ objectFit: "cover" }}
            loading="lazy"
            alt={alt}
            fill={true}
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
      <div
        className={`${aileron.className} mx-auto w-full text-left text-xs md:text-sm`}
      >
        {caption}
      </div>
    </div>
  );
};
export default Page;
