import Hyperlinks from "../utils/Hyperlinks";
// import loop_video from '../public/Map Loop Animation.mp4';

import TitlePara from "../utils/TitlePara";
import Quote from "../utils/Quote";

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      {/* <div className='flex flex-col gap-2'>
				<h2
					className={`${league_gothic.className} tracking-wide uppercase font-bold text-xl first-letter:text-4xl`}>
					The Struggle for safe abortion in Ethiopa
				</h2>
				<p
					className={`${baskerville.className} text-[#555555] indent-5  text-base md:text-xl `}>
					In Ethiopia, the fight for women&apos;s reproductive rights has been
					fraught with challenges, despite significant legal advancements. This
					article delves into the multifaceted issues surrounding abortion laws
					in Ethiopia, exploring the legal, social, and personal dimensions of
					this critical issue.
				</p>
			</div> */}
      <TitlePara key="maputo protocol" title="maputo protocol" />
      <div className="relative aspect-video w-full md:aspect-video">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            // poster='/'
            controls
            // contloop='true'
            mutedrols="true"
            muted
            width="100%"
            height="100%"
          >
            <source src="Map Loop Animation.mp4" type="video/mp4" />
          </video>
          {/* {/* <video src={loop_video} controls='false'></video> */}
        </div>
      </div>

      <TitlePara
        key="campaigners"
        // title="The Struggle for safe abortion in Ethiopa"
        para={
          <>
            Campaigners wanted a change for one reason: to end the epidemic of
            women dying from unsafe abortions, the leading cause of maternal
            death in Ethiopia at the
            <Hyperlinks key="campaigners" linkNumber={1} word="time." />
            Entire hospital wards were dedicated to treating women who had
            developed sepsis or other life-threatening complications from
            botched abortions. The coalition brought politicians to these wards
            to see first-hand the harms of the abortion ban, which ironically
            had just one exception: to save the woman’s life. The stench of
            death still haunts the memories of Ethiopian doctors and nurses who
            practised medicine before the reform. Tedros Ghebreyesus, the
            current head of the World Health Organization, was Ethiopia’s health
            minister at the time the 2005 abortion law came into effect. His
            legacy, and the legacy of the wards, continue to galvanize support
            for legal abortion today.
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
            {" "}
            Sustained pressure from the coalition on top of the strong political
            will of successive Ethiopian governments helped cascade the 2005
            legislation into action, and within a decade maternal mortality from
            unsafe abortion plummeted from 32% to less than 10%
            <Hyperlinks
              key="percent"
              word="32% to less than 1%"
              linkNumber={2}
            />
            Strong political will of successive Ethiopian governments helped
            cascade the legislation into action, and the law was revised in
            2013, shortly after Ethiopia ratified the Maputo Protocol – the
            first treaty signed by 43 African nations that recognizes abortion,
            under certain conditions, as a human right. While there is still a
            way to go to ensure full access to the right to safe abortion on
            demand, the 2005 reforms have undoubtedly been lifesaving.
          </>
        }
      />
    </div>
  );
};
export default Page;
