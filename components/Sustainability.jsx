import Image from "next/image";
import sustainability_other from "../public/sustainability-other.jpg";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  // style: 'italic',
});
const Page = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-4 border-2 md:w-10/12">
      {/* //? sustainibility image */}
      <div className="relative aspect-4/3 w-full md:aspect-video">
        {/* //? image */}
        <div className="absolute inset-0 h-full w-full">
          <Image src={sustainability_other} alt="sustainability" fill="true" />
        </div>
        {/* //? overlay */}
        <div className="absolute inset-0 z-30 bg-gray-950/20">
          <h2
            className={`${playfair_display.className} absolute bottom-4 left-0 right-0 mx-auto w-2/3 max-w-3xl text-balance indent-4 text-lg text-white`}
          >
            But it&apos;s not just about the materials - the way clothing is
            produced also plays a crucial role in sustainability.
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Page;
