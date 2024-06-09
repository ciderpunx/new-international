"use client";
import { League_Gothic } from "next/font/google";
import header_logo from "../public/header_logo.svg";
import Image from "next/image";
import {
  AnimatePresence,
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
        "fixed left-0 right-0 top-0 z-40 mb-24 h-24 w-full bg-[#dcf3f3] px-2 py-2"
      }
    >
      <navbar className="relative mx-auto flex h-full w-full items-center justify-between md:w-4/5">
        <div className="relative flex h-full w-32 items-center justify-between md:w-48">
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
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className="grid size-14 place-items-center md:hidden"
        >
          {isNavbarOpen ? "close" : "open"}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg> */}
        </motion.button>

        <AnimatePresence mode="sync">
          {isNavbarOpen && (
            <HamburgerMenu
              setIsNavbarOpen={setIsNavbarOpen}
              isNavbarOpen={isNavbarOpen}
            />
          )}
        </AnimatePresence>
      </navbar>
    </motion.header>
  );
};
export default Page;

const HamburgerMenu = ({ isNavbarOpen, setIsNavbarOpen }) => {
  <motion.div
    style={{ position: "fixed" }}
    // style={{ zIndex: 999999 }}
    className="h-screen w-screen bg-lime-400"
  >
    <motion.div className="absolute left-0 right-0 top-24 h-1/2 bg-[#dcf3f3]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fuga
      deserunt quidem quae necessitatibus exercitationem tenetur commodi ducimus
      natus libero?
    </motion.div>
  </motion.div>;
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
