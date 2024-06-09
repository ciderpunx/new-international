"use client";

import Image from "next/image";
import TitlePara from "../utils/TitlePara";
import ReligionSVG from "../public/Dominant Religions.svg";
import { motion } from "framer-motion";
import Protestant from "../svgs/Protestant Christians.js";
import { Orthodox } from "../components/OrthodoxChristians";
{
}
import { OrthodoxChristian } from "../public/svgs/Orthodox Christians.svg";

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
      <section className="flex h-auto w-full flex-col gap-8 border-4 border-purple-500 md:aspect-video md:flex-row">
        <div className="grid h-[50vh] w-full grid-rows-[15%_70%_15%] bg-lime-100">
          <div className="grid place-items-center bg-orange-100 text-center align-middle text-2xl text-red-600">
            Orthodox Christians
          </div>
          <div className="relative h-full w-full bg-lime-200">
            <div className="absolute inset-0 h-full w-full"></div>
          </div>
          <div className="bg-orange-300"></div>
        </div>
        <div className="grid h-[50vh] w-full grid-rows-[15%_70%_15%] bg-lime-100">
          <div className="grid place-items-center bg-orange-100 text-center align-middle text-2xl text-red-600">
            Orthodox Christians
          </div>
          <div className="relative bg-orange-200">
            <div className="relative h-full w-full"></div>
          </div>
          <div className="bg-orange-300"></div>
        </div>
        <div className="grid h-[50vh] w-full grid-rows-[15%_70%_15%] bg-lime-100">
          <div className="grid place-items-center bg-orange-100 text-center align-middle text-2xl text-red-600">
            Orthodox Christians
          </div>
          <div className="relative bg-orange-200">
            <div className="relative h-full w-full"></div>
          </div>
          <div className="bg-orange-300"></div>
        </div>
      </section>
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
