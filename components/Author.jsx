import TitlePara from "../utils/TitlePara";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { League_Gothic, Libre_Baskerville } from "next/font/google";
import Maxine from "../public/Maxine Betteridge-Moes.png";
import Maya from "../public/Maya Misikir.png";
import Bethany from "../public/Bethany Rielly.jpg";
import Image from "next/image";
import { IoMailOpenOutline } from "react-icons/io5";

const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const Libre_Baskerville_ = Libre_Baskerville({
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
                <div className="relative size-14 rounded-full md:size-16">
                  <div className="absolute inset-0 overflow-hidden rounded-full shadow-inner">
                    <Image
                      src={x.img}
                      key={x.name}
                      alt={x.name}
                      fill={true}
                      objectFit="cover"
                    />
                  </div>
                </div>

                <h3
                  className={`${league_gothic.className} text-xl uppercase tracking-wider text-[#3c4c54] md:text-2xl`}
                >
                  {x.name}
                </h3>
              </div>
              <p
                className={`${Libre_Baskerville_.className} max-w-5xl text-base md:text-xl`}
              >
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
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A//newint.org/stories/fertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#4267B2]"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Fertile%20Ground%20on%20New%20Internationalist&url=https%3A%2F%2Fnewint.org%2Fstories%2Ffertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#000000]"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="mailto:?body=https://newint.org/stories/fertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#FD1D1D]"
          >
            <IoMailOpenOutline size={20} />
          </a>
          <a
            href="https://api.whatsapp.com/send?text=https%3A%2F%2Fnewint.org%2Fstories%2Ffertile-ground"
            className="grid aspect-square size-8 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#25D366]"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Page;

let authorData = [
  {
    img: Bethany,
    name: "bethany rielley",
    info: "Bethany Rielly is a New Internationalist co-editor based in Barcelona. She has written about topics including refugees, migration, protest, human rights and state violence and surveillance.",
  },
  {
    img: Maxine,
    name: "maxine betteridge-moes",
    info: "Maxine Betteridge-Moes is the digital editor at New Internationalist. She covers stories about human rights, conflict, global development and sexual and reproductive health and rights for numerous publications.",
  },
  {
    img: Maya,
    name: "maya misikir",
    info: "Maya is a freelance reporter based in Addis Abeba, Ethiopia. She runs Sifter, a newsletter on Ethiopia, where she curates the week's top five series focusing on human rights.",
  },
];
