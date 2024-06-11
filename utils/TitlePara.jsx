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
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 md:gap-4">
      <h1
        style={{
          // fontSize: "36px",
          fontWeight: 500,
        }}
        className={`${league_gothic.className} uppercase tracking-wide text-[#3c4c54]`}
      >
        <span className="text-2xl md:text-4xl">{title}</span>
      </h1>
      <p
        className={`${baskerville.className} text-left indent-0 text-lg leading-7 text-[#212529] md:text-pretty md:text-2xl`}
      >
        {para}
      </p>
    </div>
  );
};
export default Page;
