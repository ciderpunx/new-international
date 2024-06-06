"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header_hero from "../public/hero.jpg";
import { Roboto, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: "italic",
});
const Index = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-4 border-2 md:w-10/12">
      <div className="relative mx-auto aspect-4/3 w-full md:aspect-video">
        {/* //? overlay */}
        <div className="absolute z-30 h-full w-full bg-gradient-to-r from-gray-950/60 to-gray-950/10"></div>
        {/* //? image */}
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={Header_hero}
            fill={true}
            priority={true}
            // width={200}
            // height={500}
            alt="header-hero"
          />
          <div className="absolute bottom-2 left-0 right-0 z-40 m-auto flex flex-col px-4">
            <h1 className="text-2xl font-bold text-white">ON SHAKY GROUND</h1>
            <div
              className={
                roboto.className +
                " flex justify-start gap-1 text-xs text-[#c8c8c8]"
              }
            >
              <span className="text-xs">By Maxine Beteridge Moes</span>
              <span className="text-xs">.</span>
              <span className="text-xs">14 June 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* //? quote */}
      <div className="container mx-auto flex w-full max-w-5xl flex-col gap-2 border-2 text-left">
        <blockquote
          className={`${playfair_display.className} relative text-balance text-center indent-5 text-base`}
        >
          &ldquo; We don&apos;t need a handful of people doing zero waste
          perfectly. We need millions of people doing it imperfectly.&rdquo;
        </blockquote>
        <cite
          className={`${roboto.className} block text-center indent-5 text-xs text-[#666666]`}
        >
          - Anne Marie Bonneau, Zero Waste Chef
        </cite>
      </div>
    </div>
  );
};
export default Index;
