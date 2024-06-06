import TitlePara from "../utils/TitlePara";
import ImageWrapper from "../utils/ImageWrapper";
import frontline_1 from "../public/frontline-1.jpg";
import { Artifika } from "next/font/google";

const artifika = Artifika({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 border-2">
      {/* //? nurse 1 */}
      <section className="mx-auto flex w-full flex-col gap-4">
        <TitlePara
          key="frontline"
          title="The Frontline of Reproductive Health"
          para="Health workers in Ethiopia face significant challenges in providing abortion services. Despite the legal provisions, they often work under the pressure of societal stigma and religious condemnation. Personal stories from health workers and women who have sought abortions highlight the difficulties and risks involved. These narratives underscore the need for continued support and protection for both patients and healthcare providers."
        />
        <ImageWrapper
          alt="frontline-image"
          key="frontline-image"
          sevenXL={true}
          imageURL={frontline_1}
        />
      </section>

      {/* //? blue quote */}
      <section
        className={`${artifika.className} mx-auto flex h-auto w-full max-w-5xl flex-col justify-center text-pretty border-b-8 border-t-8 border-b-sky-200 border-t-sky-200 bg-sky-100 px-4 py-2 md:aspect-video`}
      >
        <span className="text-center text-4xl md:text-7xl"> &ldquo; </span>
        <p className="text-pretty text-center md:text-balance md:text-3xl">
          &quot; It&apos;s not just about making clothes – it&apos;s about
          rethinking the entire system,&rdquo; explains Daniel Silverstein,
          founder of Zero Waste Daniel. By designing for disassembly and
          incorporating cradle-to-cradle principles, we can create a truly
          sustainable closed-loop system for fashion.
        </p>
      </section>
    </div>
  );
};
export default Page;
