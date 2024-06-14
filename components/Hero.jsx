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
const aileron = localfont({
  src: "../app/Aileron-Regular.woff2",
});

const libre_baskerville_italic = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});
const libre_baskerville = Libre_Baskerville({
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

const Index = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 md:w-11/12 md:gap-16">
      {/* //? hero */}
      <div className="flex w-full flex-col gap-1 md:gap-2">
        <div className="relative mx-auto aspect-4/3 w-full md:aspect-video">
          {/* //? overlay */}
          {/* <div className="absolute z-30 h-full w-full bg-gradient-to-b from-transparent to-gray-950/50"></div> */}
          <div className="absolute z-30 h-full w-full bg-gradient-to-b from-transparent to-black/40"></div>
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
              className="absolute bottom-2 left-0 right-0 z-40 m-auto flex max-w-5xl flex-col overflow-hidden px-2 md:bottom-20 md:px-0 md:py-2"
            >
              <motion.h1
                variants={parentVariant}
                initial="hidden"
                animate="show"
                exit="exit"
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
              </motion.h1>
            </motion.div>
          </div>
        </div>
        <div
          className={`${aileron.className} w-full text-center text-xs md:text-sm`}
        >
          A girl holds a candle during a ceremony for Orthodox Easter in Addis
          Ababa on 5 May 2024. While Ethiopia is considered a regional leader on
          abortion provision in East Africa, strong religious views in the
          country often clash with abortion rights. AMANUEL SILESHI
        </div>
      </div>

      {/* //? share with a friend */}
      <div className="mx-auto flex w-full max-w-5xl items-baseline justify-between gap-2 pt-2 md:flex-row md:justify-between">
        <h3
          className={`${league_gothic.className} text-xl uppercase text-[#3c4c54] md:text-2xl`}
        >
          share this article
        </h3>

        <div className="flex w-1/2 justify-evenly gap-1 text-gray-500 md:w-1/3">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnewint.org%2Finteractive%2F2024%2Ffertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#4267B2]"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fnewint.org%2Finteractive%2F2024%2Ffertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#000000]"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="mailto:?body=https://newint.org/interactive/2024/fertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#FD1D1D]"
          >
            <IoMailOpenOutline size={20} />
          </a>
          <a
            href="https://api.whatsapp.com/send?text=https%3A%2F%2Fnewint.org%2Finteractive%2F2024%2Ffertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#25D366]"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
      {/* //?date */}
      <div
        className={`${aileron.className} mx-auto w-full max-w-5xl text-left text-xs text-gray-500 md:text-base`}
      >
        14 June 2024
      </div>
      <p
        className={`${libre_baskerville_italic.className} mx-auto mb-8 max-w-5xl text-left text-lg font-bold md:text-2xl`}
      >
        Anti-abortion campaigners have their sights set on Ethiopia – a
        progressive outlier in a region marred by restrictions. Who’s behind the
        emboldened ‘pro-life’ movement and what’s at stake for women’s rights
        amid a myriad of other challenges? Bethany Rielly, Maxine
        Betteridge-Moes and Maya Misikir report from Addis Ababa.
      </p>
      {/* //? para */}
      <section
        className={`mx-auto flex h-auto w-full max-w-5xl flex-col gap-10 md:gap-12`}
      >
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
      <div className="m-auto flex w-full max-w-4xl flex-col gap-1 md:gap-2">
        <ImageWrapper
          alt="pray-to-end"
          key="key-to-end"
          bodyWidth={true}
          // sevenXL={true}
          imageURL={PrayToEnd}
        />
        <div
          className={`${aileron.className} mx-auto w-full text-left text-xs md:text-base`}
        >
          A taxi parked outside a family planning clinic in Addis Adaba reads
          ‘Pray to end abortion in Ethiopia’
        </div>
      </div>
      <section className="mx-auto flex w-full flex-col gap-8 md:gap-12">
        <TitlePara
          key="outlier"
          title="A regional outlier"
          para="It’s the day before Orthodox Easter Sunday, and from the twentieth floor of our rented Addis apartment, faint chanting from a nearby church can be heard over the steady rumble of traffic and construction. In the streets, cars hurtle past with forlorn looking chickens and goats strapped to the roof, ready to be slaughtered and eaten. Women in white shawls and wooden crosses around their necks prepare for the hours of cooking ahead. Orthodox Christians have avoided meat for two months, and tonight they will finally break their fast. "
        />
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 md:gap-2">
          <ImageWrapper
            key="candle-2"
            alt="candle-2"
            // sevenXL={false}
            imageURL={Candle_two}
          />
          <div
            className={`${aileron.className} text-5 mx-auto w-full text-left text-xs md:text-base`}
          >
            Women light candles in celebration of Orthodox Easter in Ethiopia,
            where approximately 43 percent of the population is Orthodox
            Christian. AMANUEL SILESHI
          </div>
        </div>

        <TitlePara
          key="celebrations"
          para={
            <>
              The celebrations engulfing the city speak to the importance of
              religion in Africa’s second most populous country, where 43 per
              cent of around 123 million people identify as Christian Orthodox,
              33 percent as Muslim and 18 percent as Protestant, according to
              the most recent{" "}
              <Hyperlinks
                key="census"
                word="census"
                linkNumber={0}
              ></Hyperlinks>
              {""}. But despite its strong religiosity, in 2005 Ethiopia managed
              to do what many countries are still struggling to do – liberalize
              its abortion laws.
            </>
          }
        />
      </section>
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
