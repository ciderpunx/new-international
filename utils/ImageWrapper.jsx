import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  // style: 'italic',
});
const Page = ({ alt, imageURL, textData, sevenXL }) => {
  return (
    <div
      className={`${sevenXL ? "max-w-7xl" : ""} mx-auto flex w-full flex-col gap-4 border-2 md:w-10/12`}
    >
      {/* //? image */}
      <div className="relative aspect-4/3 w-full md:aspect-video">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={imageURL}
            loading="lazy"
            alt={alt}
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        {/* //? overlay */}
        {textData && (
          <div className="absolute z-30 h-full w-full bg-gradient-to-r from-gray-950/60 to-gray-950/10">
            <h2
              className={`${playfair_display.className} absolute bottom-4 left-0 right-0 mx-auto w-2/3 max-w-3xl text-balance indent-4 text-lg font-semibold text-white`}
            >
              {textData}
            </h2>
          </div>
        )}

        {/* <div className="absolute inset-0 z-40 h-full w-full bg-lime-400">
          <h2
            className={`${playfair_display.className} absolute bottom-4 left-0 right-0 mx-auto w-2/3 max-w-3xl text-balance indent-4 text-lg text-white`}
          >
            {textData}
          </h2>
        </div> */}
      </div>
    </div>
  );
};
export default Page;
