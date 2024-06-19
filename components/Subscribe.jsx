"use client";
import Image from "next/image";
// import new_international from "../public/new-international.jpg";
import new_magazine_cover from "../public/NI550_Abortion_Cover_large.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

import { libre_baskerville, league_gothic } from "@/utils/Fonts";

const Page = () => {
  return (
    <div className="grid h-auto min-h-[100svh] w-full place-items-center bg-[#fbeaea] py-16 md:min-h-[70svh]">
      <section className="divide-y- flex w-full max-w-5xl flex-col gap-8 px-4 md:flex-row">
        {/* //? image */}
        <div className="relative h-[500px] w-full max-w-sm">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="NI550_Abortion_Cover_large.jpg"
              alt="new international magazine"
              fill="true"
              fetchPriority="auto"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* //? links */}
        <div className="relative flex h-[500px] w-full flex-col gap-4 px-2 py-4">
          {/* //title */}
          <h2
            className={`${league_gothic.className} text-2xl uppercase text-[#3c4c54] md:text-4xl`}
          >
            Subscribe to new internationalist
          </h2>
          {/* //links */}
          <ul
            className={`${libre_baskerville.className} my-auto grid h-full w-full grid-rows-[auto] divide-y-2 divide-gray-600 border-b-2 border-t-2 border-b-slate-800 border-t-gray-600`}
          >
            {linkArrowData.map((x, index) => (
              <li
                className="flex items-center gap-2 text-lg font-semibold text-[#212529] md:gap-4 md:text-2xl"
                key={index}
              >
                <span className="size-6 text-[#212529]">
                  <FaLongArrowAltRight />
                </span>
                <span className="">{x}</span>
              </li>
            ))}
          </ul>
          {/* button */}
          <button
            className={`${league_gothic.className} self-center bg-[#c72e21] px-4 py-2 text-2xl uppercase text-white hover:bg-red-500 md:self-start md:px-8 md:py-4 md:text-3xl`}
          >
            <a href="https://subscribe.newint.org/">Subscribe today</a>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Page;

let linkArrowData = [
  "Discover new perspectives",
  "Support cutting-edge independent media",
  "Magazine delivered to your door or inbox",
  "Digital archive of over 500 issues",
  "Fund in-depth, high quality journalism",
];
