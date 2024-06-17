import Image from "next/image";
// import new_international from "../public/new-international.jpg";
import new_magazine_cover from "../public/NI550_Abortion_Cover_large.jpg";
import { League_Gothic, Libre_Baskerville } from "next/font/google";
import { FaLongArrowAltRight } from "react-icons/fa";

const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <div className="grid h-auto min-h-[100svh] w-full place-items-center bg-[#fbeaea] py-16 md:min-h-[70svh]">
      <section className="border-5 divide-y- flex w-full max-w-5xl flex-col gap-8 border-red-600 px-4 md:flex-row">
        {/* //? image */}
        <div className="relative h-[500px] w-full max-w-sm bg-red-500">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={new_magazine_cover}
              alt="new international magazine"
              fill="true"
              loading="lazy"
            />
          </div>
        </div>
        {/* //? links */}
        <div className="relative flex h-[500px] w-full flex-col gap-4 px-2 py-4">
          {/* //title */}
          <h2
            className={`${league_gothic.className} text-2xl uppercase text-[#3c4c54] md:text-4xl`}
          >
            Subscribe to new internationalist
          </h2>
          {/* //links */}
          <ul
            className={`${libre_baskerville.className} my-auto grid h-full w-full grid-rows-[auto] divide-y-2 divide-gray-600 border-b-2 border-t-2 border-b-slate-800 border-t-gray-600`}
          >
            {linkArrowData.map((x, index) => (
              <li
                className="flex items-center gap-2 text-lg font-semibold text-[#212529] md:gap-4 md:text-2xl"
                key={index}
              >
                <span className="size-6 text-[#212529]">
                  <FaLongArrowAltRight />
                </span>
                <span className="">{x}</span>
              </li>
            ))}
          </ul>
          {/* button */}
          <button
            className={`${league_gothic.className} self-center bg-[#c72e21] px-4 py-2 text-2xl uppercase text-white hover:bg-red-500 md:self-start md:px-8 md:py-4 md:text-3xl`}
          >
            <a href="https://subscribe.newint.org/">Subscribe today</a>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Page;

let linkArrowData = [
  "Discover new perspectives",
  "Support cutting-edge independent media",
  "Magazine delivered to your door or inbox",
  "Digital archive of over 500 issues",
  "Fund in-depth, high quality journalism",
];
