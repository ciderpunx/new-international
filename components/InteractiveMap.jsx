"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { League_Gothic, Baskervville } from "next/font/google";
import Interactive_map from "../svgs/Africa_map";
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const baskerville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  const [mapState, setMapState] = useState({
    hoverState: false,
    title: " ",
    background: "",
    textColor: "",
    subtitle: "",
  });
  return (
    <div className="relative mx-auto flex h-auto w-full max-w-7xl flex-col gap-4 border-2">
      {/* //? svg */}
      <div className="relative aspect-video w-full overflow-hidden">
        <div className={`absolute inset-0 m-auto h-full w-full object-contain`}>
          <Interactive_map />

          {/* <Image src="interactive-map.svg" fill="true" alt="interactive-map" /> */}
        </div>
      </div>
      {/* //? hover elements */}
      <div className="md:auto-rows-auto-[160px] relative grid h-auto min-h-24 w-full auto-rows-[64px] grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
        {mapInfo.map((x, index) => (
          <motion.div
            onTap={() => {
              setMapState({
                title: x.title,
                hoverState: true,
                background: x.background,
                subtitle: x.subtitle,
                textColor: x.textColor,
              });
            }}
            onHoverStart={() => {
              setMapState({
                title: x.title,
                hoverState: true,
                background: x.background,
              });
            }}
            onHoverEnd={() => {
              setMapState({
                title: "",
                hoverState: false,
                background: "",
              });
            }}
            key={index}
            className={`relative flex h-full w-full cursor-pointer items-center rounded-sm bg-[#ebf7f7] px-1 py-2 text-sm font-semibold capitalize last:col-span-2 md:text-lg md:last:col-span-1`}
          >
            <span>{x.title}</span>
            <motion.div
              animate={{
                height:
                  mapState.hoverState && mapState.title == x.title
                    ? "100%"
                    : "8px",
              }}
              style={{
                background: x.background,
                color: x.textColor,
              }}
              className={`absolute bottom-0 left-0 right-0 grid h-2 w-full place-items-center text-lg`}
            >
              {mapState.hoverState && mapState.title == x.title && x.title}
            </motion.div>
            <AnimatePresence>
              {mapState.hoverState && mapState.title == x.title && x.title && (
                <motion.div
                  initial={{ y: -10, height: 0, x: "-30%", opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  animate={{ height: "40vh", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                  // layoutId="hover"
                  style={{
                    background: mapState.background,
                    color: x.textColor,
                    height: "30vh",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                  }}
                  className={`${baskerville.className} absolute left-0 top-full z-40 mx-0 hidden h-[25vh] w-[40vw] items-start justify-start gap-4 px-8 py-4 pt-8 text-white md:visible md:flex`}
                >
                  <h2 className="text-balance font-serif text-3xl font-semibold">
                    {x.subtitle}
                  </h2>
                  <vr />
                  <p
                    className={`${baskerville.className} text-balance indent-4 text-xl`}
                  >
                    {x.para}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      {/* //? title and para */}

      <AnimatePresence>
        {mapState.hoverState && (
          <motion.div
            variants={parentVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            // transition={{ type: "spring", bounce: 0.9, duration: 0.8 }}
            onClick={() => {
              setMapState({
                hoverState: false,
                subtitle: "",
                title: "",
              });
            }}
            className="fixed inset-0 h-full w-full touch-none overflow-hidden bg-black/30 px-4 md:hidden"
          >
            {" "}
            <motion.div
              variants={childVariant}
              style={{
                color: mapState.textColor,
                borderColor: mapState.background,
                background: mapState.background,
              }}
              className={`${baskerville.className} absolute bottom-0 left-0 right-0 mx-auto grid h-1/2 w-full place-items-center text-balance rounded-t-2xl border-t-8 px-4 py-4 text-center text-2xl font-bold shadow-2xl`}
            >
              {mapState.subtitle}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Page;

let parentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
let childVariant = {
  hidden: {
    height: 0,
    opacity: 1,
  },
  show: {
    opacity: 1,
    height: "40vh",
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,

    height: 0,
  },
};

let mapInfo = [
  {
    id: "map-one",
    title: "on request",
    background: "#7fbc6e",
    textColor: "black",
    subtitle:
      "662 million(34%) women of reproductive age live in 77 countries that allow abortion on request.",
    para: "The most common gestational limit for countries in this category is 12 weeks. Gestational limits are calculated from the first day of the last menstrual period, which is considered to occur two weeks prior to conception. Where laws specify that gestational age limits are calculated from the date of conception, these limits have been extended by two weeks",
  },
  {
    id: "map-two",
    title: "prohibited altogether",
    background: "#000000",
    textColor: "white",
    subtitle:
      "111 Million (6%) women of reproductive age live in 21 countries that prohibit abortion altogether.",
    para: "The laws of the countries in this category do not permit abortion under any circumstances, including when the person's life or health is at risk.",
  },
  {
    id: "map-three",
    title: "to preserve health",
    background: "#1D357D",
    textColor: "white",
    subtitle:
      "226 Million (12%) women of reproductive age  live in 47 countries where abortion is permitted when pregnancy poses a risk to the person's health.",
    para: "The laws of countries in this category permit abortion on the basis of health or therapeutic grounds. 25 of these countries explicitly permit abortion to preserve mental health.",
  },
  {
    id: "map-four",
    title: "to save a person's life",
    background: "#b61f26",
    textColor: "white",
    subtitle:
      "416 Million (20%) women of reproductive age live in 44 countries that allow abortion to save the life of the pregnant person",
    para: "The laws of the countries in this category permit abortion when the pregnant person’s life is at risk.",
  },

  {
    id: "map-five",
    title: "broad social or economic grounds",
    background: "#6CDCDD",
    textColor: "#000000",
    subtitle:
      "457 Million (23%) women of reproductive age  live in 12 countries/territories that allow abortion on broad social or economic grounds.",
    para: " These laws are generally interpreted liberally to permit abortion under a broad range of circumstances. These countries/territories often take into account a pregnant person’s actual or reasonably foreseeable environment and their social or economic circumstances when considering the potential impact of pregnancy and childbearing.",
  },
];
