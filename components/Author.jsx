import TitlePara from "../utils/TitlePara";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { League_Gothic, Baskervville } from "next/font/google";
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const baskerville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});
const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 divide-y-4 pb-24">
      {/* //* 3 sections */}

      {/* //? 15 links for hyperlinks - hese should appear as hyperlinks in the indicated body text, not as foot notes */}
      {/* <section className="w-full">
        <ol
          type="1"
          className="bg-orage-500 flex w-full list-inside list-decimal flex-col gap-4 text-xs hover:text-gray-900 md:text-sm"
        >
          {linksData.map((x, index) => (
            <li key={index} className="indent-0">
              {x}
            </li>
          ))}
        </ol>
      </section> */}

      {/* //? author heading title and  info */}
      <section className="flex w-full flex-col gap-8">
        <TitlePara key="author" title="authors" />
        <section className="flex w-full flex-col gap-4">
          {/* //? 3 authors */}
          {authorData.map((x, index) => (
            <div className="flex w-full flex-col gap-2" key={index}>
              <div className="flex items-center justify-start gap-2">
                <div className="relative size-14 rounded-full bg-teal-500 md:size-16">
                  <div className="absolute inset-0 rounded-full"></div>
                </div>

                <span
                  className={`${league_gothic.className} text-xl uppercase text-[#3c4c54] md:text-2xl`}
                >
                  {x.name}
                </span>
              </div>
              <p className={`${baskerville.className} max-w-5xl md:text-2xl`}>
                {x.info}
              </p>
            </div>
          ))}
        </section>
      </section>

      {/* //? share with a friend */}
      <div className="flex w-full flex-col items-baseline gap-4 pt-4 md:flex-row md:justify-between">
        <h3
          className={`${league_gothic.className} text-2xl uppercase text-[#3c4c54]`}
        >
          share this article
        </h3>

        <div className="grid w-full grid-cols-4 items-baseline text-gray-500 md:w-1/3">
          <span className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#4267B2]">
            <FaFacebookF size={30} />
          </span>
          <span className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#000000]">
            <FaXTwitter size={30} />
          </span>
          <span className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#FD1D1D]">
            <FaInstagram size={30} />
          </span>
          <span className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#25D366]">
            <FaWhatsapp size={30} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Page;

let linksData = [
  "CIA, ‘Ethiopia – Country summary’, May 2024, a.nin.tl/census",
  "Centre for Reproductive Rights, ‘Ethiopia’, 2003, a.nin.tl/leading ",
  "MD Feyssa and SK Gebru, ‘Liberalizing abortion to reduce…’, Reproductive Health, Vol 19, 2022, a.nin.tl/plummet ",
  "Fos Feminista, ‘The Global Impact…’, January 2024, a.nin.tl/RippleEffect ",
  "Ipas, ‘Pulling back the cover…’, Report, 2023, a.nin.tl/roots ",
  "Claire Provost and Nandini Naira Archer, ‘Exclusive: Trump-linked religious…’, openDemocracy, February 2020, a.nin.tl/coerce ",
  "Andres Schipani, ‘Sex education ignites…’, Financial Times, June 2021, a.nin.tl/views",
  "Kidus Dawit, ‘Parliament votes to extend State of Emergency’, The Reporter, February 2024, a.nin.tl/soe",
  "MM Alemayehu and S Terje, ‘Media and religion…’, Fojo media institute, Linnaeus University, 2024, a.nin.tl/ MediaEthio",
  "UN Women Africa, ‘Multi-country analytical study’, 2019, a.nin.tl/amhara",
  "Amnesty International, ‘An Unstoppable movement…’, November 2023, a.nin.tl/attacks",
  "Amnesty International, ‘Ethiopia: Troops and militia rape’, August 2021, a.nin.tl/Tigray",
  "WHO, ‘HeRAMS Tigray baseline report 2023’, October 2023, a.nin.tl/troops",
  "Patty Skuster and other, ‘Evidence for ending…’, Guttmacher Institute, April 2024, a.nin.tl/GagRule",
  "Lydia Namubiru and Khatondi Soita Wepukhulu, ‘Exclusive: US Christian Right pours more than $50m in Africa’, openDemocracy, October 2020, a.nin.tl/millions",
];

let authorData = [
  {
    img: "",
    name: "bethany rieley",
    info: "This in-depth story was researched and written by Maxine Betteridge-Moes, a freelance journalist specializing in sustainability and ethical living. Follow her on Twitter at @Maxine-Moes for more insigths into conscious consumerism.",
  },
  {
    img: "",
    name: "maxine betteridge-moes",
    info: "This in-depth story was researched and written by Maxine Betteridge-Moes, a freelance journalist specializing in sustainability and ethical living. Follow her on Twitter at @Maxine-Moes for more insigths into conscious consumerism.",
  },
  {
    img: "",
    name: "maya misikir",
    info: "This in-depth story was researched and written by Maxine Betteridge-Moes, a freelance journalist specializing in sustainability and ethical living. Follow her on Twitter at @Maxine-Moes for more insigths into conscious consumerism.",
  },
];
