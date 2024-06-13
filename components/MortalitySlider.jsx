"use client";
import Image from "next/image";
import TitlePara from "../utils/TitlePara";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { VscGrabber } from "react-icons/vsc";
//? delete chairs from public
// import chairs from "../public/chairs.jpg";
import left_image from "../public/Slider Image Left.jpg";
import right_image from "../public/Slider Image Right.jpg";

import localfont from "next/font/local";
const airolon = localfont({
  src: "../app/Aileron-Regular.woff2",
});
import { useRef, useState } from "react";
const Page = () => {
  let ref = useRef(null);

  const [sliderWidth, setSliderWidth] = useState(0);

  let x = useMotionValue(0);
  let grayScale = useTransform(x, [-sliderWidth / 2, sliderWidth / 2], [1, 0]);
  let blur = useTransform(x, [-sliderWidth / 2, sliderWidth / 2], [5, 0]);
  let bw_and_blur = useMotionTemplate`grayScale(${grayScale}) blur(${blur}px)`;
  let scale1 = useTransform(x, [-sliderWidth / 2, 0], [1.2, 1]);
  let scale2 = useTransform(x, [0, sliderWidth / 2], [1, 1.2]);

  useMotionValueEvent(x, "change", (latestX) => {
    let slider = ref?.current?.getBoundingClientRect();
    let { width } = slider;
    setSliderWidth(width);
  });
  // left

  let leftImageGrayScale = useTransform(
    x,
    [-sliderWidth / 2, 0, sliderWidth / 2],
    [1, 1, 1],
  );
  let leftImageBlur = useTransform(
    x,
    [-sliderWidth / 2, 0, sliderWidth / 2],
    [0, 2, 7],
  );

  let rightImageGrayScale = useTransform(
    x,
    [-sliderWidth / 2, 0, sliderWidth / 2],
    [0, 0, 0],
  );
  let rightImageBlur = useTransform(
    x,
    [-sliderWidth / 2, 0, sliderWidth / 2],
    [7, 2, 0],
  );

  let LEFTbw_and_blur = useMotionTemplate`grayScale(${leftImageGrayScale}) blur(${leftImageBlur}px)`;
  let RIGHTbw_and_blur = useMotionTemplate`grayScale(${rightImageGrayScale}) blur(${rightImageBlur}px)`;

  // let SliderBlur = useTransform(x, [-sliderWidth/2,0, sliderWidth / 2], [0,0, 5]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
      {/* //? title */}
      <TitlePara
        textCenter={true}
        key="maternal-mortality"
        title="Maternal Mortality rates in Ethiopia pre- and post- 2005 abortion law"
      />
      {/* //* mortality svg */}
      <div className="flex w-full flex-col gap-2">
        <div
          ref={ref}
          className="relative aspect-video w-full overflow-hidden p-8 text-4xl"
        >
          {/* <div className="absolute left-0 top-0 z-40 bg-lime-500 font-bold text-black">
          {sliderWidth.toString()}
          <br></br>
          <motion.span>{useTransform(() => Math.floor(x.get()))}</motion.span>
        </div> */}
          {/* <motion.div
          // initial={{ filter: "blur(0px) grayscale(0.5)" }}
          style={
            {
              // filter: bw_and_blur,
            }
          }
          className="z-5 absolute inset-0 h-full w-full"
        >
          <Image src={chairs} alt="black" fill="true" />
        </motion.div> */}
          {/*  //! images */}
          {/* //? left */}
          <motion.div
            initial={{
              filter: "blur(2px)",
            }}
            style={{
              filter: LEFTbw_and_blur,
            }}
            // initial={{ filter: "blur(0px) grayscale(0.5)" }}

            className="absolute bottom-0 left-0 top-0 z-10 h-full w-1/2"
          >
            <Image src={left_image} alt="black" fill="true" />
          </motion.div>

          {/* //? right */}
          <motion.div
            initial={{
              filter: "blur(2px)",
            }}
            style={{
              filter: RIGHTbw_and_blur,
            }}
            // initial={{ filter: "blur(0px) grayscale(0.5)" }}

            className="absolute bottom-0 left-1/2 top-0 z-10 h-full w-1/2"
          >
            <Image src={right_image} alt="black" fill="true" />
          </motion.div>
          {/* //? svg timeline overlay */}
          <div className="absolute inset-0 z-20 h-full w-full object-contain">
            <Svg ref={ref} />
          </div>
          {/* //? slider */}
          <motion.div
            whileHover={{ cursor: "grab" }}
            style={{ x }}
            whileDrag={{
              cursor: "grabbing",
              background: "lightgrey",
            }}
            drag="x"
            dragMomentum={false}
            dragConstraints={ref}
            dragElastic={0}
            className="group absolute inset-0 z-30 m-auto h-full w-2 bg-white"
          >
            <motion.div
              whileHover={{ scale: [1, 1.5, 1] }}
              initial={{ x: -15 }}
              className="absolute inset-0 m-auto grid size-10 place-items-center rounded-full bg-white shadow-xl transition-all group-hover:scale-150"
            >
              <VscGrabber size={40} color="black" />
            </motion.div>
          </motion.div>
          {/* //? overlay percentages */}
          <motion.div
            style={{}}
            className={`${airolon.className} absolute bottom-0 left-5 z-20 text-4xl font-extrabold text-red-700 md:text-9xl`}
          >
            32%
          </motion.div>
          <motion.div
            style={
              {
                // scale: scale2,
              }
            }
            className={`${airolon.className} absolute bottom-0 right-5 z-20 text-4xl font-extrabold text-white md:text-9xl`}
          >
            &lt;10%
          </motion.div>
        </div>
        {/* info */}
        <div className="flex w-full max-w-7xl items-center justify-between">
          <span className={`${airolon.className} text-left text-xs md:text-sm`}>
            Maternal deaths per 100,000 births
          </span>
          <span
            className={`${airolon.className} text-right text-xs md:text-sm`}
          >
            Maternal deaths per 100,000 births
          </span>
        </div>
      </div>

      <div
        className={`${airolon.className} md-text-sm text-xs} w-full max-w-5xl`}
      >
        Within a decade of the 2005 abortion law being passed, maternal
        mortality rates linked to unsafe abortion dropped from
        <a href="https://reproductive-health-journal.biomedcentral.com/articles/10.1186/s12978-022-01457-z#:~:text=Within%20a%20decade%20of%20liberalizing,political%2C%20and%20women's%20rights%20communities ">
          32 per cent to less than 10 per cent
        </a>
        . Maternal mortality refers to deaths due to complications from
        pregnancy or childbirth.
      </div>
    </div>
  );
};
export default Page;

const Svg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      id="Maternal_Mortality_Slider"
      x={0}
      y={0}
      viewBox="0 0 1920 1080"
      {...props}
    >
      <style>{".sliderst1{fill:#fff}"}</style>
      <path fill="#b71f27" d="M0 .5h1919.9v157H0z" />
      <path
        id="_x32_005"
        d="M906 68.7v-4.1c0-3.9.6-7.8 2.2-10.6 1.7-2.8 4.6-4.6 9.3-4.6s7.4 1.7 9.1 4.2c1.8 2.6 2.4 6.3 2.4 10.4a55 55 0 0 1-5 19.8c-2.9 6.7-6.2 12.7-8.5 16.5h13.7v8.6h-23.4v-8.6c2.6-4.1 5-8.2 7.2-12.4 1.8-3.5 3.6-7.5 5-11.6s2.4-8.1 2.5-11.7c0-1.6 0-3.4-.5-4.8-.4-1.4-1.1-2.4-2.4-2.4s-1.9.9-2.3 2.2c-.4 1.4-.6 3.1-.6 5v4.1H906zm51.9 28.1c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3.7-1.6 1.8-3.2 3.4-4.4s3.8-2 6.7-2 5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.7-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1zm37 34.7c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3a11 11 0 0 1 3.4-4.4c1.6-1.2 3.8-2 6.7-2s5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.6-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1zm28 18.9c0-2.5-.9-4.3-2.7-4.3s-1.8.7-2.4 1.6c-.6 1-1 2.1-1 2.7h-7.3V50h20.9v8.6h-13.4v12.2c1-.7 2-1.4 3.2-1.8.6-.2 1.2-.3 1.8-.2 4.5 0 6.9 2.6 8.2 5.4s1.4 5.8 1.4 6.8v13.1c0 2.8-.2 6.6-1.7 9.7-1.5 3.2-4.4 5.7-9.6 5.7s-8.1-2.5-9.6-6a30.4 30.4 0 0 1-1.7-11.8h8.6V94c0 3 .2 5 .6 6.2.4 1.2 1 1.8 2.1 1.8s1.6-.6 2-1.7.6-3.2.6-6.2V81z"
        className="sliderst1"
      />
      <path
        id="_x32_000"
        d="M70.3 68.7v-4.1c0-3.9.6-7.8 2.2-10.6 1.7-2.8 4.6-4.6 9.3-4.6s7.4 1.7 9.1 4.2c1.8 2.6 2.4 6.3 2.4 10.4a55 55 0 0 1-5 19.8c-2.9 6.7-6.2 12.7-8.5 16.5h13.7v8.6H70.1v-8.6c2.6-4.1 5-8.2 7.2-12.4 1.8-3.5 3.6-7.5 5-11.6s2.4-8.1 2.5-11.7c0-1.6 0-3.4-.5-4.8-.4-1.4-1.1-2.4-2.4-2.4s-1.9.9-2.3 2.2c-.4 1.4-.6 3.1-.6 5v4.1h-8.7zm51.9 28.1c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3.7-1.6 1.8-3.2 3.4-4.4s3.8-2 6.7-2 5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.7-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1zm37 34.7c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3.7-1.6 1.8-3.2 3.4-4.4s3.8-2 6.7-2 5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.7-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1zm37 34.7c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3a11 11 0 0 1 3.4-4.4c1.6-1.2 3.8-2 6.7-2s5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.6-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1z"
        className="sliderst1"
      />
      <path
        id="_x32_020"
        d="M1732.4 68.7v-4.1c0-3.9.6-7.8 2.2-10.6 1.7-2.8 4.6-4.6 9.3-4.6s7.4 1.7 9.1 4.2c1.8 2.6 2.4 6.3 2.4 10.4a55 55 0 0 1-5 19.8c-2.9 6.7-6.2 12.7-8.5 16.5h13.7v8.6h-23.4v-8.6c2.6-4.1 5-8.2 7.2-12.4 1.8-3.5 3.6-7.5 5-11.6s2.4-8.1 2.5-11.7c0-1.6 0-3.4-.5-4.8s-1.1-2.4-2.4-2.4-1.9.9-2.3 2.2c-.4 1.4-.6 3.1-.6 5v4.1h-8.7zm51.9 28.1c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3.7-1.6 1.8-3.2 3.4-4.4s3.8-2 6.7-2 5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.7-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1zm13.7 6.6v-4.1c0-3.9.6-7.8 2.2-10.6 1.7-2.8 4.6-4.6 9.3-4.6s7.4 1.7 9.1 4.2c1.8 2.6 2.4 6.3 2.4 10.4a55 55 0 0 1-5 19.8c-2.9 6.7-6.2 12.7-8.5 16.5h13.7v8.6h-23.4v-8.6c2.6-4.1 5-8.2 7.2-12.4 1.8-3.5 3.6-7.5 5-11.6s2.4-8.1 2.5-11.7c0-1.6 0-3.4-.5-4.8s-1.1-2.4-2.4-2.4-1.9.9-2.3 2.2c-.4 1.4-.6 3.1-.6 5v4.1h-8.7zm51.8 28.1c0 2.4-.6 4.6-1.4 6.4-.7 1.6-1.8 3.1-3.4 4.3-1.6 1.3-3.8 2-6.6 2s-5.1-.7-6.7-2a11.6 11.6 0 0 1-3.4-4.3c-.9-1.8-1.4-4-1.4-6.4V62.2c0-2.3.6-4.5 1.4-6.3.7-1.6 1.8-3.2 3.4-4.4s3.8-2 6.7-2 5 .8 6.6 2 2.7 2.8 3.4 4.4c.9 1.8 1.4 4 1.4 6.3v34.6zm-8.6-34.7c0-1.6-.3-2.7-1.1-3.7-.4-.4-1-.6-1.8-.6-1.5 0-2.2 1.1-2.6 2.2-.2.6-.3 1.4-.3 2.2v34.6c0 1.7.4 2.8 1.2 3.7.4.4 1 .6 1.7.6 1.5 0 2.2-1 2.6-2.2.2-.6.3-1.3.3-2.2V62.1z"
        className="sliderst1"
      />
      <path
        id="Timeline_Left"
        d="M209.9 97c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.6-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.6-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.9c-.3 0-.5-.2-.5-.5V68.1c0-.3.2-.5.5-.5s.5.2.5.5v22.5c0 .3-.2.5-.5.5zm13.5.4c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.6-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zM792 97c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5z"
        className="sliderst1"
      />
      <path
        id="Timeline_Right"
        d="M1038.5 97c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.6-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.6-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zM1201 97c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.9c-.3 0-.5-.2-.5-.5V68.1c0-.3.2-.5.5-.5s.5.2.5.5v22.5c0 .3-.2.5-.5.5zm13.6.4c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zM1377 97c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.5-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5zm13.6-5.5c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.5 0c-.3 0-.5-.2-.5-.5V67.9c0-.3.2-.5.5-.5s.5.2.5.5V91c0 .3-.2.5-.5.5zm13.6 5.5c-.3 0-.5-.2-.5-.5V62.4c0-.3.2-.5.5-.5s.5.2.5.5v34.1c0 .3-.2.5-.5.5z"
        className="sliderst1"
      />
      {/* <motion.g
        initial={{}}
        drag="x"
        dragElastic={1}
        dragSnapToOrigin={false}
        dragMomentum={false}
        dragConstraints={props.ref}
        className="[stroke-20] cursor-grab"
        // scale={2}
        id="Slider"
      >
        <motion.g style={{}} className="" id="Slider_Bar">
          <path d="M959 1h2v1079.5h-2z" className="sliderst1" />
          <path
            d="M945.6 1h29.7L960 17.7zm29.7 1079.5h-29.7l15.3-16.6z"
            className="fill-red-500"
          />
        </motion.g>

        <motion.g id="Slider_Arrows">
          <path
            id="Slider_Left_Arrow"
            d="m925.2 562.9-34.7-34.6 34.7-34.7 5.6 5.7-29 29 29 29z"
            className="[stroke-10] fill-red-500"
          />
          <path
            id="Slider_Right_Arrow"
            d="m996.6 562.9-5.6-5.6 29-29-29-29 5.6-5.7 34.7 34.7z"
            className="[stroke-10] fill-red-500"
          />
        </motion.g>
      </motion.g> */}
    </svg>
  );
};
