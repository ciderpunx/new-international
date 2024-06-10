import { Artifika } from "next/font/google";
const artifika = Artifika({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = ({ quote }) => {
  return (
    <section
      style={{ paddingTop: 16, paddingBottom: 16 }}
      className={`${artifika.className} mx-auto flex h-auto w-full max-w-5xl flex-col items-center justify-center text-pretty border-b-8 border-t-8 border-b-sky-200 border-t-sky-200 bg-sky-100 px-4 py-16`}
    >
      <span className="text-center text-4xl md:text-7xl"> &ldquo; </span>
      <p className="max-w-[60ch] text-pretty pb-8 text-center md:text-balance md:text-3xl">
        {quote}
      </p>
    </section>
  );
};
export default Page;
