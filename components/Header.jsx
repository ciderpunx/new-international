"use client";
import { League_Gothic } from "next/font/google";
import header_logo from "../public/header_logo.svg";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const Page = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    if (scrollY.getPrevious() - latestScrollY < 0) {
      setIsScrollingDown(true);
    } else setIsScrollingDown(false);
  });

  return (
    <motion.header
      animate={{
        // height: isScrollingDown ? 0 : 96,
        scaleY: isScrollingDown ? 0 : 1,
        opacity: isScrollingDown ? 0 : 1,
      }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
      }}
      style={{
        originY: 0,
        zIndex: 99999,
        position: "fixed",
      }}
      className={
        league_gothic.className +
        "fixed left-0 right-0 top-0 z-40 mb-24 h-24 w-full bg-[#dcf3f3] px-0 py-2"
      }
    >
      <navbar className="relative mx-auto flex h-full w-full items-center justify-between px-0 md:w-4/5">
        <div className="relative ml-2 flex h-full w-32 items-center justify-between md:w-48">
          <a
            href="https://newint.org/

"
            className="absolute inset-0 h-full w-full text-black"
          >
            <Image
              fill={true}
              src={header_logo}
              alt="New International logo"
              className="size-36"
            />
          </a>
        </div>
        {/* //?  hidden on mobile */}
        <div className="mr-0 hidden h-full w-2/3 md:block">
          <div className="flex h-full w-full items-center justify-between">
            <ul className="my-auto flex w-2/3 items-center justify-evenly">
              {links.map((x, index) => (
                <a
                  href={x.link}
                  className={`${league_gothic.className} cursor-pointer text-2xl uppercase text-[#3c4c54] hover:text-[#c72e21]`}
                  key={index}
                >
                  {x.title}
                </a>
              ))}
            </ul>
            <button
              className={`${league_gothic.className} place-self-center bg-[#c72e21] px-4 py-2 text-2xl uppercase text-white hover:bg-red-500 md:self-start md:px-8 md:py-4 md:text-3xl`}
            >
              <a className="h-full w-full" href="https://subscribe.newint.org/">
                Subscribe
              </a>
            </button>
          </div>
        </div>
        {/* //? visible on mobile */}
        <motion.div
          // whileTap={{ scale: 0.9 }}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className="mr-2 grid size-14 place-items-center md:hidden"
        >
          <AnimatePresence mode="wait" key={isNavbarOpen}>
            {isNavbarOpen ? (
              <motion.button
                key="isOpen"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
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
              <motion.button
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
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
          </AnimatePresence>
        </motion.div>

        <AnimatePresence mode="sync">
          {isNavbarOpen && (
            <motion.div
              style={{ originY: 0 }}
              variants={hamburgerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-full z-30 m-auto flex h-[50vh] w-screen flex-col items-center justify-start gap-4 bg-[#dcf3f3] px-2 py-8"
            >
              {links.map((x, index) => (
                <motion.div
                  key={index}
                  variants={linksVariants}
                  className={`${league_gothic.className} relative w-full gap-4 place-self-center overflow-hidden text-2xl uppercase`}
                >
                  <a href={x.link}>{x.title}</a>
                </motion.div>
              ))}

              <motion.button
                animate={{
                  opacity: isScrollingDown ? 0 : 1,
                }}
                variants={linksVariants}
                className={`${league_gothic.className} place-self-start bg-[#c72e21] px-4 py-2 text-2xl uppercase text-white hover:bg-red-500`}
              >
                <a
                  className="h-full w-full"
                  href="https://subscribe.newint.org/"
                >
                  Subscribe
                </a>
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
    skewY: 4,
  },
  show: {
    height: "40vh",
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
    scaleY: 0,
    skewY: -10,
    skewX: 5,
    // height: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
      when: "afterChildren",
      // delayChildren: 0.1,
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
    link: "https://newint.org/about",
  },
  {
    title: "latest issue",
    link: "https://newint.org/latest-magazine",
  },
  {
    title: "All magazines",
    link: "https://newint.org/magazines",
  },
  {
    title: "ethical shop",
    link: "https://ethicalshop.org/",
  },
];
