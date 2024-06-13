"use client";
import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// import Image from "next/image";
import TitlePara from "../utils/TitlePara";

import { League_Gothic, Roboto } from "next/font/google";
import localfont from "next/font/local";
const airolon = localfont({
  src: "../app/Aileron-Regular.woff2",
});
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const roboto_light = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const Page = () => {
  const [orthodoxEnter, setOrthodoxEnter] = useState(false);
  const [muslimsEnter, setMuslimsEnter] = useState(false);
  const [protestantsEnter, setprotestantsEnter] = useState(false);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:text-7xl">
      <TitlePara
        key="dominant religion"
        title="Dominant religions of ethiopia"
        textCenter
      />
      <section
        className={`${league_gothic.className} flex h-auto w-full flex-col gap-8 max-sm:divide-y-2 md:aspect-video md:flex-row`}
      >
        {/* //? orthodox */}
        <motion.div className="grid h-[60vh] w-full grid-rows-[10%_70%_20%]">
          <div className="grid place-items-center text-center align-middle text-3xl text-red-600 md:text-4xl">
            Orthodox Christians
          </div>
          <div className="relative my-auto h-full w-full">
            <motion.div
              transition={{ type: "spring", bounce: 0 }}
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              // ref={imageRef}
              // style={{ scale }}
              className={`absolute inset-0 m-auto h-4/5 w-full object-contain`}
            >
              <svg
                className="h-full w-full fill-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 308.8 482.9"
                // {...props}
              >
                <path d="m272 184.2-16 16-1 1 16.9 16.9 16.9-16.9-1-1-15.8-16zm2.7 19.5a4 4 0 0 1-2.9 1.1c-.9 0-1.8-.4-2.5-1.1a3.8 3.8 0 0 1 0-5.4c.9-.9 2.2-1.3 3.4-1 .7.1 1.4.5 1.9 1 1.6 1.6 1.6 4 .1 5.4zm13.3-41.3 1-1-17-17-16.9 17 16.9 16.9 16-15.9zm-16.2 2.8c-.9 0-1.8-.4-2.5-1.1a3.8 3.8 0 0 1 0-5.4c.9-.9 2.2-1.3 3.4-1 .7.1 1.4.5 1.9 1a3.8 3.8 0 0 1 0 5.4c-.7.8-1.7 1.2-2.8 1.1-.7 0-.7 0 0 0zm20-.8-1 1-16 16 16.9 16.9 16.9-17-16.8-16.9zm-.7 21c-.9 0-1.8-.4-2.5-1.1a3.7 3.7 0 0 1 0-5.3c.9-.9 2.2-1.3 3.4-1 .7.1 1.4.5 1.9 1a3.7 3.7 0 0 1 0 5.3c-.7.8-1.7 1.1-2.8 1.1z" />
                <path d="m253.1 165.3-.7-.7v-33.1h-7.6v2.7h-3.1v-2.7h-6.5v3.6h-31v-16.6h8.8V98.4h-8.8V79.6h.6v.4h7.7V62.1h-7.7v.4h-.6v-15h8.9V32.4h-3v-1.6h3V15.6h-44.6l10-15.6h-48l10 15.6H95.8v15.1h3v1.6h-3v15.1h9v50.8h-9.1v20.2h9.1V135H73.6v-3.6h-6.5v2.7h-4.3v-2.7h-6.5v33.1l-.7.7-16 16L56.4 198v39.6h6.5v-2.7h4.3v2.7h6.5v-3h31.2v88.7h-.6v-.6h-7.7v25.4h7.7v-.6h.6v55.4h-9.1v13.6h.1v8.4h43l-1.4 1.4 16.9 16.9 16-16 1-1-1.4-1.4h43v-22.1h-8.8v-55.4h.6v.6h7.7v-25.4h-7.7v.6h-.6v-88.7h31v3h6.5v-2.7h3.1v2.7h7.6V198l.7-.7 16-16-16-16zm-196.7 20H56c-.9 0-1.8-.4-2.5-1.1a3.7 3.7 0 0 1 0-5.3 4 4 0 0 1 2.9-1.1v7.5zm164.3-36.5L208.5 161l-12.2-12.2h24.4zm-82.5 129.3.1.1.1-.1 12.9 12.9-15.8 15.8-13-13 15.7-15.7zm0-7.7-15.7-15.7 13-13 15.8 15.8-12.9 12.9-.1-.1-.1.1zm13.1 60-12.9 12.9-.1-.1-.1.1-15.7-15.7 13-13 15.8 15.8zm-12-19.7 15.8-15.8 15.8 15.8-15.8 15.8-15.8-15.8zm3-36.4 12.9-12.9 12.9 12.9-12.9 12.8-12.9-12.8zm-3-36.4 15.8-15.8 15.8 15.8-15.8 15.8-15.8-15.8zm13.1-55.2h-25.2l11.1-11.1 3.9-3.9 10.2-10.2v25.2zm0 5.4v23.5l-10.2-10.2-13.2-13.2 23.4-.1zm-1.1 30.1L135.4 234l-13-13 15.8-15.8 13.1 13zm-19.7 19.7L118.4 251v-26.3l13.2 13.2zm2.7 36.4-15.9 15.9v-31.8l15.9 15.9zm-2.7 36.4-13.1 13.1v-26.3l13.1 13.2zm2.7 36.4L118.4 363v-31.8l15.9 15.9zm3.9 3.9.1.1.1-.1 12.9 12.9-15.8 15.8-13-13 15.7-15.7zm4.1-3.9 12.9-12.9 12.9 12.9-12.9 12.8-12.9-12.8zm16.7 16.7 12.9-12.9.1.1.1-.1 15.7 15.7-13 13-15.8-15.8zm13-20.7-.1.1-12.9-12.8 15.8-15.8 13 13-15.7 15.7-.1-.2zM159 291l12.9-12.9.1.1.1-.1 15.7 15.7-13 13L159 291zm13-20.7-.1.1-12.9-12.8 15.8-15.8 13 13-15.7 15.7-.1-.2zm2.8-36.3L159 218.2l13-13 15.8 15.8-13 13zm-6.7-32.6-10.2 10.2v-23.5h23.5l-13.3 13.3zm-10.2-18.7v-25.2l10.2 10.2 3.9 3.9 11.1 11.1h-25.2zm17.9-15 15.8-15.8 13 13-15.8 15.8-13-13zm14.7-24.7-11.9-11.9 11.9-11.9V143zm-2.7 5L172 163.8l-13-13 15.8-15.8 13 13zm-32.7-1-15.8-15.8 12.6-12.6h6.5l12.6 12.6-15.9 15.8zM172 90.8l-.1.1L159 78.1l15.8-15.8 13 13L172.1 91l-.1-.2zm6.7-32.4 10.8-10.8h1.1v22.7l-11.9-11.9zm-3.9-3.9-6.9-6.9h13.9l-7 6.9zm-3.8 3.9-15.8 15.8-15.8-15.8 10.8-10.8h10.1L171 58.4zm-35.6-3.9-7-6.9h13.9l-6.9 6.9zm-3.8 3.9-13.1 13.1v-24h2.4l10.7 10.9zm3.8 3.8L151.2 78l-12.9 12.9-.1-.1-.1.1-15.7-15.7 13-13zm6.9 32.6 12.9-12.9L168 94.8l-3.6 3.6h-18.5l-3.6-3.6zm1.9 23.8-8.7 8.7-8.7-8.7h17.4zm7.1 32.3-13 13-15.8-15.9 13-13 15.8 15.9zm-16.9 16.8-13 13-15.8-15.8 13-13 15.8 15.8zm-16.8 16.8-15.8 15.8L86 184.5l15.8-15.8 15.8 15.8zm3.9 3.9 13 13-15.8 15.8-13-13 15.8-15.8zm-3.1 182 13.1 13.2-13.1 13.1v-26.3zm17 16.9 15.5 15.5H125l-2.5-2.5 12.9-13zm3.9-3.8 15.8-15.8 15.8 15.8-15.8 15.8-15.8-15.8zm35.5 3.8 13 13-2.5 2.5h-25.9l15.4-15.5zm3.9-3.8 11.9-11.9v23.7l-11.9-11.8zm-2.8-36.4 14.6-14.6v29.2l-14.6-14.6zm2.8-36.4 11.9-11.9v23.7l-11.9-11.8zm-2.8-36.4 14.6-14.6v29.2l-14.6-14.6zm2.8-36.4 11.9-11.9v23.7l-11.9-11.8zm-2.9-36.5 13-13 15.8 15.8-13 13-15.8-15.8zm16.8-16.9 15.8-15.8 15.8 15.8-15.8 15.8-15.8-15.8zm-17.8-57.2-8.7-8.7h17.5l-8.8 8.7zm4.7-28.9-3.6-3.6 14.6-14.6v18.2h-11zm-61.1-19.5 15.9 15.9-3.6 3.6h-12.3V78.9zm.6 39.7 12.6 12.6-13 13-.2.2v-25.7l.6-.1zm-5 30.2L101.8 161l-12.2-12.2H114zm-38.9 0h5.2l-5.2 5.2v-5.2zm0 12.9 9.8-9.8 13 13-15.8 15.8-7-7v-12zm0 19.7 3.1 3.1-3.1 3.1v-6.2zm0 39.5v-5.8l5.8 5.8h-5.8zm0-13.5v-12l7-7 15.8 15.8-13 13-9.8-9.8zM89 220.9l12.8-12.8 12.8 12.8H89zm68.1 208c-.8.8-1.8 1.2-2.9 1.1-.7 0-.7 0 0 0-.9 0-1.8-.4-2.5-1.1a3.8 3.8 0 0 1-.9-4h7c.7 1.3.4 2.9-.7 4zm38.5-208 12.8-12.8 12.8 12.8h-25.6zm38.3 0h-4.5l4.5-4.5v4.5zm0-12.3-8.5 8.5-13-13 15.8-15.8 5.7 5.7v14.6zm0-22.2-1.8-1.8 1.8-1.8v3.6zm0-11.4-5.7 5.7-15.8-15.8 13-13 8.5 8.5V175zm0-22.3-3.9-3.9h3.9v3.9zm18.5 32.3v-7.5h.4c.7.1 1.4.5 1.9 1a3.8 3.8 0 0 1 0 5.4c-.5.8-1.4 1.1-2.3 1.1z" />
                <path d="m135.6 430.1-1-1-16.9 16.9 16.9 17 1-1 16-16-16-15.9zm-1.2 19.8c-.9 0-1.8-.4-2.5-1.1a3.7 3.7 0 0 1 0-5.3c.9-.9 2.2-1.3 3.4-1 .7.2 1.4.5 1.9 1a3.7 3.7 0 0 1 0 5.3 4 4 0 0 1-2.8 1.1zm20.1-.9-16 16-1 1 16.9 16.9 16.9-16.9-1-1-15.8-16zm2.6 19.5c-.8.8-1.8 1.2-2.9 1.1-.9 0-1.8-.4-2.5-1.1a3.7 3.7 0 0 1 0-5.3c.9-.9 2.2-1.3 3.4-1 .7.2 1.4.5 1.9 1a3.6 3.6 0 0 1 .1 5.3zm16.3-38.4-16 16 16.9 16.9 16.9-17-16.9-16.9-.9 1zm1.1 12.6c.7.1 1.4.5 1.9 1a3.7 3.7 0 0 1 0 5.3c-.8.8-1.8 1.2-2.9 1.1-.9 0-1.8-.4-2.5-1.1a3.7 3.7 0 0 1 0-5.3c1.1-.9 2.3-1.3 3.5-1zM36.8 184.2l-16 16-1 1 16.9 16.9 16.9-16.9-1-1-15.8-16zm2.7 19.5a4 4 0 0 1-2.9 1.1c-.9 0-1.8-.4-2.5-1.1a3.8 3.8 0 0 1 0-5.4c.9-.9 2.2-1.3 3.4-1 .7.1 1.4.5 1.9 1 1.5 1.6 1.6 4 .1 5.4zm13.3-41.3 1-1-17-17-16.9 17 16.9 16.9 16-15.9zm-16.2 2.8c-.9 0-1.8-.4-2.5-1.1a3.8 3.8 0 0 1 0-5.4c.9-.9 2.2-1.3 3.4-1 .7.1 1.4.5 1.9 1a3.8 3.8 0 0 1 0 5.4c-.7.8-1.8 1.2-2.8 1.1-.7 0-.7 0 0 0zm-18.7.1-1-1-16.9 17 16.9 17 1-1 16-16-16-16zm-1.1 19.8s-.1 0 0 0a4 4 0 0 1-2.5-1.1 3.8 3.8 0 0 1 0-5.4c.9-.9 2.2-1.3 3.4-1 .7.1 1.4.5 1.9 1a3.8 3.8 0 0 1-2.8 6.5zm79.6-123V80h7.8v-.4h.6V62.5h-.6v-.4z" />
              </svg>
              {/* <Image src={orthodox} alt="orthodox" fill={true} /> */}
            </motion.div>
          </div>
          <motion.div
            onViewportEnter={() => {
              setOrthodoxEnter(true);
            }}
            onViewportLeave={() => {
              setOrthodoxEnter(false);
            }}
            className="grid place-items-center text-[96px] font-bold text-red-500 md:text-7xl"
          >
            <span className="">
              <AnimatedNumber value={orthodoxEnter ? 43 : 0} />%
            </span>
          </motion.div>
        </motion.div>

        {/* //? muslims */}

        <motion.div className="grid h-[60vh] w-full grid-rows-[10%_70%_20%]">
          <div className="grid place-items-center text-center align-middle text-3xl text-red-600 md:text-4xl">
            Muslims
          </div>
          <motion.div className="relative my-auto h-2/3 w-full">
            <motion.div
              transition={{ type: "spring", bounce: 0 }}
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              // ref={imageRef}
              // style={{ scale }}
              className={`absolute inset-0 m-auto h-4/5 w-full object-contain`}
            >
              <svg
                className="m-auto h-full w-full fill-yellow-600 object-contain"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 275.2 276.5"
                // fill={true}
                // {...props}
              >
                <path d="M230 241.2a136.3 136.3 0 0 1-129 30.2A138 138 0 0 1 .2 145.3 138 138 0 0 1 229.1 34.6c-27.6-14.9-56.7-19.1-87.2-11.5S87.8 48 70.6 74.3A118.7 118.7 0 0 0 230 241.2z" />
                <path d="m258.1 181.9-5.3-3.6c-7-5.1-14.1-10.2-21-15.4-1.5-1.1-2.4-1-3.8 0-7.8 6-15.8 11.8-23.7 17.7-.6.4-1.2 1.6-1.9 1-.6-.5 0-1.5.2-2.2l8.7-28.2c.6-1.9.2-2.8-1.4-3.9L186.2 130c-.6-.4-1.6-.8-1.4-1.5.3-.9 1.4-.6 2.1-.6h28.9c2.4 0 3.4-.8 4.1-3.1l8.9-28c.2-.6.3-1.3.8-1.8.9.1.8.9 1 1.5 3.2 9.6 6.5 19.2 9.6 28.9.6 1.8 1.5 2.5 3.4 2.5h29.3c.7 0 1.7-.3 2 .5.3 1-.8 1.2-1.4 1.7l-24 17.6c-1.3 1-1.5 1.8-1 3.3 3 9 5.8 18 8.7 27.1l1 3.7-.1.1z" />
              </svg>
              {/* <Image src={muslims} alt="muslims" fill={true} /> */}
            </motion.div>
          </motion.div>
          <motion.div
            onViewportEnter={() => {
              setMuslimsEnter(true);
            }}
            onViewportLeave={() => {
              setMuslimsEnter(false);
            }}
            className="grid place-items-center text-[96px] font-bold text-red-500 md:text-7xl"
          >
            <span>
              <AnimatedNumber value={muslimsEnter ? 33 : 0} />%
            </span>
          </motion.div>
        </motion.div>

        {/* //? protestants */}

        <motion.div className="grid h-[50vh] w-full grid-rows-[10%_70%_20%] md:h-[60vh]">
          <div
            className={`${league_gothic.className} grid place-items-center text-center align-middle text-3xl text-red-600 md:text-4xl`}
          >
            Protestant Christians
          </div>
          <div className="relative my-auto h-2/3 w-full">
            <motion.div
              transition={{ type: "spring", bounce: 0 }}
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              // ref={imageRef}
              // style={{ scale }}
              className={`absolute inset-0 m-auto w-full fill-yellow-600 object-contain md:h-2/4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                viewBox="0 0 136.9 207.1"
                // {...props}
                className="h-full w-full object-contain"
              >
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  d="M90.6 207.1H46.3V90.6H0V46.3h46.3V0h44.3v46.3h46.3v44.3H90.6v116.5z"
                />
              </svg>
              {/* <Image src={protestants} alt="protestants" fill={true} /> */}
            </motion.div>
          </div>
          <motion.div
            onViewportEnter={() => {
              setprotestantsEnter(true);
            }}
            onViewportLeave={() => {
              setprotestantsEnter(false);
            }}
            className="grid place-items-center text-[96px] font-bold text-red-500 md:text-7xl"
          >
            <span>
              <AnimatedNumber value={protestantsEnter ? 20 : 0} />%
            </span>
          </motion.div>
        </motion.div>
      </section>
      <div
        className={`${airolon.className} w-full text-sm font-bold text-[#3c4c54] md:text-2xl`}
      >
        Rest - 4%
      </div>
      <TitlePara
        key="success-story"
        para="It’s a rare success story in a region where the procedure is largely prohibited except to save a pregnant person’s life. But where recent feminist movements to legalize abortion have been characterized by large and vibrant street protests, such as those in Latin America, Ethiopia’s journey was more subtle. Led by local doctors, women’s groups and lawyers, a determined coalition successfully pressured parliamentarians to reform the 1957 law in order to legally permit abortion in cases of rape, incest and foetal impairment, as well as for women with disabilities and minors."
      />
    </div>
  );
};
export default Page;
{
}

function AnimatedNumber({ value }) {
  let spring = useSpring(value, {
    mass: 1,
    stiffness: 75,
    damping: 15,
    // bounce: 0,
  });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span animate={{ scale: display.isAnimating() ? 1.5 : 1 }}>
      {display}
    </motion.span>
  );
}

// let dominantReligionData = [
//   {
//     imageURL: orthodox,
//     id: 1,
//     religionTitle: "Orthodox Christians",
//     height: "h-full",
//     percentage: 43,
//   },
//   {
//     imageURL: muslims,
//     id: 2,
//     religionTitle: "Muslims",
//     height: "h-2/3",
//     percentage: 33,
//   },
//   {
//     imageURL: protestants,
//     id: 3,
//     religionTitle: "Protestant Christians",
//     height: "h-2/3",
//     percentage: 20,
//   },
// ];
