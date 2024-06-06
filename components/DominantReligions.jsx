import Image from "next/image";
import TitlePara from "../utils/TitlePara";
import ReligionSVG from "../public/Dominant Religions.svg";

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-2">
      {/* //? Titlepara */}
      <TitlePara
        key="reprod-rights-religion"
        title="The Influence of Faith on Reproductive Rights"
        para="Religious beliefs play a significant role in shaping public opinion and policies on abortion in Ethiopia. The country is predominantly Orthodox Christian (43%), followed by Muslims (33%) and Protestant Christians (20%). These religious perspectives contribute to a complex landscape where access to abortion is often limited by moral and theological objections, making it challenging for women to exercise their legal rights."
      />
      {/* //? religion svgs -- ask for three seperate svgs of these religions. stack on mobile, horizontal on web*/}
      <div className="relative aspect-video w-full border-2 border-red-500">
        <div className="absolute inset-0 h-full w-full">
          <Image src={ReligionSVG} alt="religions" fill="true" />
        </div>
      </div>
    </div>
  );
};
export default Page;
{
}
