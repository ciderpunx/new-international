import { League_Gothic, Baskervville } from "next/font/google";
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const baskerville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = ({ title, para }) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-1">
      <h2
        className={`${league_gothic.className} text-3xl font-bold uppercase tracking-[0.05em] first-letter:text-4xl md:text-red-500`}
      >
        {title}
      </h2>
      <p
        className={`${baskerville.className} hyphens-auto text-wrap indent-5 text-base text-[#555555] md:text-balance md:text-xl`}
      >
        {para}
      </p>
    </div>
  );
};
export default Page;
