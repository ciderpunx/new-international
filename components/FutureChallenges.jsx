import TitlePara from "../utils/TitlePara";
import ImageWrapper from "../utils/ImageWrapper";
import { Baskervville } from "next/font/google";
const baskerville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 divide-y-2 border-4">
      <section className="mx-auto flex w-full flex-col gap-4">
        <TitlePara
          key="future challenges"
          title="Reflecting on Progress and Future Challenges"
          para="As Ethiopia continues to navigate the complexities of abortion laws and women's rights, the impact of these laws on health outcomes and societal attitudes remains profound. Despite progress since the 2005 law, challenges persist. Future efforts must focus on improving access, reducing stigma, and ensuring that women's reproductive rights are upheld and protected."
        />
      </section>
      {/* //? related articles */}
      <section className="mx-auto flex w-full flex-col gap-2">
        <TitlePara
          key="future challenges"
          title="Reflecting on Progress and Future Challenges"
        />
        <ul
          className={`${baskerville.className} flex list-inside list-disc flex-col gap-4 pl-4 text-xl accent-red-900`}
        >
          <li>
            <a className="">
              The True Cost of Fast Fashion: An Environmental Wake-Up Call
            </a>
          </li>
          <li>
            <a className="">
              The True Cost of Fast Fashion: An Environmental Wake-Up Call
            </a>
          </li>
          <li>
            <a className="">
              The True Cost of Fast Fashion: An Environmental Wake-Up Call
            </a>
          </li>
        </ul>
      </section>

      <section className="mx-auto w-full">
        <TitlePara
          key="comments"
          title="What do you think about the future of sustainable fashion? Share your thoughts in the comments below!"
        />
      </section>
    </div>
  );
};
export default Page;
