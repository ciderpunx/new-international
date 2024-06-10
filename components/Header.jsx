"use client";
import { League_Gothic } from "next/font/google";
import header_logo from "../public/header_logo.svg";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  delay,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const Page = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <motion.header
      style={{ zIndex: 9999, position: "fixed" }}
      className={
        league_gothic.className +
        "fixed left-0 right-0 top-0 z-40 mb-24 h-24 w-full bg-[#dcf3f3] px-0 py-2"
      }
    >
      <navbar className="relative mx-auto flex h-full w-full items-center justify-between px-0 md:w-4/5">
        <div className="relative ml-2 flex h-full w-32 items-center justify-between md:w-48">
          <div className="absolute inset-0 h-full w-full text-black">
            <Image
              fill={true}
              src={header_logo}
              alt="New International logo"
              className="size-36"
            />
          </div>
        </div>
        {/* //?  hidden on mobile */}
        <div className="mr-0 hidden h-full w-2/3 md:block">
          <div className="flex h-full w-full items-center justify-between">
            <ul className="my-auto flex w-2/3 items-center justify-evenly">
              {links.map((x, index) => (
                <li
                  className={`${league_gothic.className} cursor-pointer text-2xl uppercase text-[#3c4c54] hover:text-[#c72e21]`}
                  key={index}
                >
                  {x.title}
                </li>
              ))}
            </ul>
            <button
              className={`${league_gothic.className} place-self-center bg-[#c72e21] px-4 py-2 text-2xl uppercase text-white hover:bg-red-500 md:self-start md:px-8 md:py-4 md:text-3xl`}
            >
              Subscribe
            </button>
          </div>
        </div>
        {/* //? visible on mobile */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className="mr-2 grid size-14 place-items-center md:hidden"
        >
          {isNavbarOpen ? (
            <motion.button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10 text-black"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          ) : (
            <motion.button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="black size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </motion.button>
          )}
        </motion.div>

        <AnimatePresence mode="sync">
          {isNavbarOpen && (
            <motion.div
              style={{ originY: 0 }}
              variants={hamburgerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-full m-auto flex h-[50vh] w-screen flex-col items-center justify-start gap-4 bg-[#dcf3f3] px-2 py-8"
            >
              {links.map((x, index) => (
                <motion.div
                  key={index}
                  variants={linksVariants}
                  className={`${league_gothic.className} relative w-full gap-4 place-self-center overflow-hidden text-2xl uppercase`}
                >
                  {x.title}
                </motion.div>
              ))}

              <motion.button
                variants={linksVariants}
                className={`${league_gothic.className} place-self-start bg-[#c72e21] px-4 py-2 text-2xl uppercase text-white hover:bg-red-500`}
              >
                Subscribe
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </navbar>
    </motion.header>
  );
};
export default Page;

let hamburgerVariants = {
  hidden: {
    height: 0,
    skewY: 6,
  },
  show: {
    height: "50vh",
    skewY: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    skewY: -10,
    scaleY: 0,
    // height: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      when: "afterChildren",
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

let linksVariants = {
  hidden: { y: -20, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
  },
  exit: { y: -20, opacity: 0 },
};

let links = [
  {
    title: "about",
    link: "",
  },
  {
    title: "latest issue",
    link: "",
  },
  {
    title: "All magazines",
    link: "",
  },
  {
    title: "ethical shop",
    link: "",
  },
];
