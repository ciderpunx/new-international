"use client";
import TitlePara from "../utils/TitlePara";
import ImageWrapper from "../utils/ImageWrapper";
import { GoDotFill } from "react-icons/go";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {} from "react-icons/fa";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import PrayToEnd from "../public/pray-to-end.jpeg";
import Candle from "../public/candle.jpeg";
import Candle_two from "../public/candle-2.jpeg";
import { Roboto, League_Gothic, Libre_Baskerville } from "next/font/google";
import Hyperlinks from "../utils/Hyperlinks";
import { IoMailOpenOutline } from "react-icons/io5";
import localfont from "next/font/local";
const airolon = localfont({
  src: "../app/Aileron-Regular.woff2",
});

// import { Artifika } from "next/font/google";

// const artifika = Artifika({
//   subsets: ["latin"],
//   weight: ["400"],
// });
const libre_baskerville_italic = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
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
  let { scrollY } = useScroll();
  let y = useSpring(useTransform(scrollY, [100, 200], [0, 200]), { bounce: 0 });
  let skewY = useSpring(useTransform(scrollY, [100, 200], [0, 10]), {
    bounce: 0,
  });
  return (
    <div className="mx-auto flex w-full flex-col gap-6 md:w-11/12 md:gap-16">
      {/* //? hero */}
      <div className="flex w-full flex-col gap-2">
        <div className="relative mx-auto aspect-4/3 w-full md:aspect-video">
          {/* //? overlay */}
          <div className="absolute z-30 h-full w-full bg-gradient-to-b from-transparent to-gray-950/50"></div>
          {/* //? image */}
          <div className="absolute inset-0 h-full w-full object-cover">
            <Image
              alt="fertile ground"
              key="hero-candle-1"
              src={Candle}
              fill={true}
              objectFit="cover"
              priority={true}
              // width={200}
              // height={500}
            />
            <motion.div
              variants={parentVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute bottom-2 left-0 right-0 z-40 m-auto flex max-w-5xl flex-col overflow-hidden px-2 md:bottom-16 md:px-0"
            >
              <h1
                className={`${league_gothic.className} overflow-hidden text-4xl font-[500] tracking-wide text-white md:text-7xl`}
              >
                <motion.div
                  // style={{ y, skewY }}
                  variants={childVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  FERTILE GROUND
                </motion.div>
              </h1>
              <motion.div className="h-6 w-full overflow-hidden md:h-12">
                <motion.div
                  // style={{ y, skewY }}
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
        <div className={`${airolon.className} w-full text-center text-sm`}>
          A girl holds a candle during a ceremony for Orthodox Easter in Addis
          Ababa on May 5, 2024. While Ethiopia is considered a regional leader
          on abortion provision in East Africa, strong religious views in the
          country often clash with abortion rights. AMANUEL SILESH
        </div>
      </div>

      {/* //? share with a friend */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-baseline gap-2 pt-4 md:flex-row md:justify-between">
        <h3
          className={`${league_gothic.className} text-2xl uppercase text-[#3c4c54]`}
        >
          share this article
        </h3>

        <div className="grid w-full grid-cols-4 items-baseline text-gray-500 md:w-1/3">
          <a
            href="https://www.facebook.com/newint"
            className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#4267B2]"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://twitter.com/newint"
            className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#000000]"
          >
            <FaXTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/newinternationalist"
            className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#FD1D1D]"
          >
            <IoMailOpenOutline size={35} />
          </a>
          <a
            href="#"
            className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#25D366]"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
      {/* //? para */}
      <section
        className={`mx-auto flex h-auto w-full max-w-5xl flex-col gap-4`}
      >
        <p
          className={`${libre_baskerville_italic.className} text-left text-xl font-bold md:text-xl`}
        >
          Anti-abortion campaigners have their sights set on Ethiopia – a
          progressive outlier in a region marred by restrictions. Who’s behind
          the emboldened ‘pro-life’ movement and what’s at stake for women’s
          rights amid a myriad of other challenges?
        </p>

        <TitlePara
          key="abortion"
          text20Px={true}
          para="‘Pray to end abortion in Ethiopia’ reads the bumper sticker on a taxi parked outside a family planning clinic in the bustling heart of Addis Ababa. Jarring but easily dismissed, it’s an old tactic which anti-abortion groups have used the world over. "
        />

        <TitlePara
          text20Px={true}
          key="abortion-2"
          para="According to staff at the clinic, the driver used to rent a room in a building across the road. He recruited a worker from a nearby cafe to recite Bible verses to service users at the clinic. Using toy foetuses as props, the duo would implore people to ‘choose life’. The building has since been demolished as part of a massive city-wide redevelopment project, but this seemingly small act of protest is linked to a much larger and sturdier movement taking hold in Ethiopia and elsewhere in Africa."
        />

        <TitlePara
          text20Px={true}
          key="abortion-3"
          para="With deep pockets and loud voices, a growing anti-rights movement is aligning itself with the US Christian Right and gaining access to the halls of power, where it is on a mission to end the right to safe and legal abortion."
        />
      </section>

      {/* //? image */}
      <div className="m-auto w-full max-w-4xl">
        <ImageWrapper
          alt="pray-to-end"
          key="key-to-end"
          bodyWidth={true}
          // sevenXL={true}
          imageURL={PrayToEnd}
        />
      </div>

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
        para={
          <>
            The celebrations engulfing the city speak to the importance of
            religion in Africa’s second most populous country, where 43 per cent
            of around 123 million people identify as Christian Orthodox, 33 per
            cent as Muslim and 18 per cent as Protestant, according to the most
            recent{" "}
            <Hyperlinks key="census" word="census." linkNumber={0}></Hyperlinks>{" "}
            1 But despite its strong religiosity, in 2005 Ethiopia managed to do
            what many countries are still struggling to do – liberalize its
            abortion laws.
          </>
        }
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
