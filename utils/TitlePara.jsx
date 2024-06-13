import { League_Gothic, Libre_Baskerville } from "next/font/google";
const league_gothic = League_Gothic({
  subsets: ["latin"],
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
});

const Page = ({ title, para, text20Px, textCenter }) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 md:gap-8">
      {title && (
        <h2
          // style={{
          //   fontSize: 24,
          // }}
          className={`${league_gothic.className} ${textCenter ? "text-center" : "text-left"} w-full text-2xl uppercase leading-5 tracking-wide text-[#3c4c54] md:text-5xl`}
        >
          {title}
        </h2>
      )}
      {para && (
        <p
          className={`${libre_baskerville.className} text-left ${text20Px ? "md:text-xl" : "md:text-2xl"} indent-0 text-base leading-7 text-[#212529] md:text-pretty md:text-xl`}
        >
          {para}
        </p>
      )}
    </div>
  );
};
export default Page;
