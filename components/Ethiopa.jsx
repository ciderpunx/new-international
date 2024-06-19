"use client";
import Hyperlinks from "../utils/Hyperlinks";
// import loop_video from '../public/Map Loop Animation.mp4';

import TitlePara from "../utils/TitlePara";
import Quote from "../utils/Quote";
import Maputo from "../components/MaputoProtocol";
import MaputoProtocol from "../components/MaputoProtocol";
import InteractiveMap from "../components/InteractiveMap";

const Page = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:gap-12">
      <InteractiveMap />
      <TitlePara
        key="campaigners"
        para={
          <>
            Campaigners wanted a change for one reason: to end the epidemic of
            women dying from unsafe abortions, the{" "}
            <Hyperlinks
              key="campaigners"
              linkNumber={1}
              word="leading cause of maternal death"
            />{" "}
            in Ethiopia at the time. Entire hospital wards were dedicated to
            treating women who had developed sepsis or other life-threatening
            complications from botched abortions. The coalition brought
            politicians to these wards to see first-hand the harms of the
            abortion ban, which ironically had just one exception: to save the
            woman’s life. The stench of death still haunts the memories of
            Ethiopian doctors and nurses who practised medicine before the
            reform. Tedros Ghebreyesus, the current head of the World Health
            Organization, was Ethiopia’s health minister at the time the 2005
            abortion law came into effect. His legacy, and the legacy of the
            wards, continue to galvanize support for legal abortion today.
          </>
        }
      />
      <TitlePara
        key="safe-abortion"
        para="‘Since safe abortion was not available, women were going to backstreet abortion instead,’ says Demeke Desta, a doctor and the country director for Ipas, a global reproductive rights NGO. ‘They were inserting plant roots into their reproductive organs, inserting wires that perforated the uterus and became infected. I treated so many women and lost so many of them.’"
      />
      <Quote quote="‘I treated so many women and lost so many of them’" />
      <TitlePara
        key="sustained pressure"
        para={
          <>
            Sustained pressure from the coalition on top of the strong political
            will of successive Ethiopian governments helped cascade the 2005
            legislation into action, and within a decade maternal mortality from
            unsafe abortion plummeted from{" "}
            <Hyperlinks
              key="percent"
              word="32 percent to less than 10 percent"
              linkNumber={2}
            />
            . The law was revised in 2013, shortly after Ethiopia ratified the
            Maputo Protocol – the first treaty signed by 43 African nations that
            recognizes abortion, under certain conditions, as a human right.
            While there is still a way to go to ensure full access to the right
            to safe abortion on demand, the 2005 reforms have undoubtedly been
            lifesaving.
          </>
        }
      />
    </section>
  );
};
export default Page;
{
}
