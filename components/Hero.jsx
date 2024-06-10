"use client";
import TitlePara from "../utils/TitlePara";
import ImageWrapper from "../utils/ImageWrapper";
import { GoDotFill } from "react-icons/go";

import { motion } from "framer-motion";
import Image from "next/image";
import Header_hero from "../public/hero.jpg";
import PrayToEnd from "../public/pray-to-end.jpeg";
import Candle from "../public/candle.jpeg";
import Candle_two from "../public/candle-2.jpeg";
import { Roboto, Playfair_Display, League_Gothic } from "next/font/google";

import { Artifika } from "next/font/google";

const artifika = Artifika({
  subsets: ["latin"],
  weight: ["400"],
});

const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
// const playfair_display = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "500", "700", "900"],
//   style: "italic",
// });
const Index = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 md:w-11/12 md:gap-16">
      {/* //? hero */}
      <div className="relative mx-auto aspect-4/3 w-full md:aspect-video">
        {/* //? overlay */}
        <div className="absolute z-30 h-full w-full bg-gradient-to-b from-gray-950/10 to-gray-950/50"></div>
        {/* //? image */}
        <div className="absolute inset-0 h-full w-full object-cover">
          <Image
            alt="fertile ground"
            key="hero-candle-1"
            src={Candle}
            fill={true}
            priority={true}
            // width={200}
            // height={500}
          />
          <motion.div
            variants={parentVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute bottom-2 left-0 right-0 z-40 m-auto flex max-w-5xl flex-col px-2 md:bottom-16 md:px-0"
          >
            <h1
              className={`${league_gothic.className} overflow-hidden text-4xl font-[500] tracking-wide text-white md:text-7xl`}
            >
              <motion.div
                variants={childVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                FERTILE GROUND
              </motion.div>
            </h1>
            <motion.div
              transition={{ delay: 1 }}
              className={
                roboto.className +
                " flex items-center justify-start gap-1 overflow-hidden text-balance text-[8px] font-thin text-[#c8c8c8] md:flex-row md:text-2xl"
              }
            >
              <motion.div
                variants={childVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-wrap"
              >
                By Bethany Rielly, Maxine Beteridge Moes, and Maya Misikir{" "}
              </motion.div>
              <motion.div
                variants={childVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className=""
              >
                <GoDotFill size={15} />
              </motion.div>
              <motion.div
                variants={childVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                className=""
              >
                14 June 2024
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* //? para */}
      <section
        className={`mx-auto flex h-auto w-full max-w-5xl flex-col gap-4`}
      >
        <h2
          className={`${artifika.className} text-left text-xl md:text-balance md:text-4xl`}
        >
          Anti-abortion campaigners have their sights set on Ethiopia – a
          progressive outlier in a region marred by restrictions. Who’s behind
          the emboldened ‘pro-life’ movement and what’s at stake for women’s
          rights amid a myriad of other challenges?
        </h2>

        <TitlePara
          key="abortion"
          para="‘Pray to end abortion in Ethiopia’ reads the bumper sticker on a taxi parked outside a family planning clinic in the bustling heart of Addis Ababa. Jarring but easily dismissed, it’s an old tactic which anti-abortion groups have used the world over. "
        />

        <TitlePara
          key="abortion-2"
          para="According to staff at the clinic, the driver used to rent a room in a building across the road. He recruited a worker from a nearby cafe to recite Bible verses to service users at the clinic. Using toy foetuses as props, the duo would implore people to ‘choose life’. The building has since been demolished as part of a massive city-wide redevelopment project, but this seemingly small act of protest is linked to a much larger and sturdier movement taking hold in Ethiopia and elsewhere in Africa."
        />

        <TitlePara
          key="abortion-3"
          para="With deep pockets and loud voices, a growing anti-rights movement is aligning itself with the US Christian Right and gaining access to the halls of power, where it is on a mission to end the right to safe and legal abortion."
        />
      </section>

      {/* //? image */}
      <ImageWrapper
        alt="pray-to-end"
        key="key-to-end"
        // sevenXL={false}
        imageURL={PrayToEnd}
      />

      <TitlePara
        key="outlier"
        title="A regional outlier"
        para="It’s the day before Orthodox Easter Sunday, and from the twentieth floor of our rented Addis apartment, faint chanting from a nearby church can be heard over the steady rumble of traffic and construction. In the streets, cars hurtle past with forlorn looking chickens and goats strapped to the roof, ready to be slaughtered and eaten. Women in white shawls and wooden crosses around their necks prepare for the hours of cooking ahead. Orthodox Christians have avoided meat for two months, and tonight they will finally break their fast. "
      />

      <ImageWrapper
        key="candle-2"
        alt="candle-2"
        // sevenXL={false}
        imageURL={Candle_two}
      />

      <TitlePara
        key="celebrations"
        para="The celebrations engulfing the city speak to the importance of religion in Africa’s second most populous country, where 43 per cent of around 123 million people identify as Christian Orthodox, 33 per cent as Muslim and 18 per cent as Protestant, according to the most recent census.1 But despite its strong religiosity, in 2005 Ethiopia managed to do what many countries are still struggling to do – liberalize its abortion laws."
      />
    </div>
  );
};
export default Index;

let parentVariant = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.5,
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
  exit: {},
};

let childVariant = {
  hidden: {
    y: 150,
    skewY: 10,
  },
  show: {
    y: 0,
    skewY: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,

      delay: 0,
    },
  },
  exit: {},
};
