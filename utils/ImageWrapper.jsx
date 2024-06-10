"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  // style: 'italic',
});
const Page = ({ alt, imageURL, textData, sevenXL }) => {
  return (
    <div
      className={`${sevenXL == true ? "max-w-7xl" : ""} mx-auto flex w-full flex-col gap-4 border-2 md:w-10/12`}
    >
      {/* //? image */}
      <div className="relative aspect-4/3 w-full md:aspect-video">
        <motion.div
          transition={{ type: "spring", bounce: 0 }}
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: "some" }}
          className="absolute inset-0 h-full w-full"
        >
          <Image
            src={imageURL}
            loading="lazy"
            alt={alt}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        {/* //? overlay */}
        {textData && (
          <div className="absolute z-30 h-full w-full bg-gradient-to-b from-gray-950/10 to-gray-950/50">
            <h2
              className={`${playfair_display.className} absolute bottom-4 left-0 right-0 mx-auto max-w-5xl text-balance text-center indent-4 text-sm text-white md:bottom-0 md:text-3xl`}
            >
              {textData}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;
