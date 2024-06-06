import Image from "next/image";
import ParaTitle from "../utils/TitlePara";
const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-2">
      {/* //? svg */}
      <div className="border- relative aspect-video w-full border-violet-500">
        <div className="absolute inset-0 h-full w-full">
          <Image src="interactive-map.svg" fill="true" alt="interactive-map" />
        </div>
      </div>
      {/* //? hover elements */}
      <div className="grid h-auto min-h-24 w-full auto-rows-[60px] grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
        {mapData.map((x, index) => (
          <div
            key={index}
            className={`relative flex h-full w-full items-center rounded-sm bg-[#ebf7f7] px-1 py-2 text-sm font-semibold capitalize last:col-span-2 md:last:col-span-1`}
          >
            {x.title}
            <div
              style={{
                background: x.accent,
              }}
              className={`absolute bottom-0 left-0 right-0 z-40 h-2 w-full`}
            ></div>
          </div>
        ))}
      </div>
      {/* //? title and para */}
    </div>
  );
};
export default Page;

let mapData = [
  {
    id: "map-one",
    title: "on request",
    accent: "#7fbc6e",
  },
  {
    id: "map-two",
    title: "prohibited altogether",
    accent: "#000000",
  },
  {
    id: "map-three",
    title: "to preserve health",
    accent: "#1D357D",
  },
  {
    id: "map-four",
    title: "to save a person's life",
    accent: "#b61f26",
  },

  {
    id: "map-five",
    title: "broad social or economic grounds",
    accent: "#6CDCDD",
  },
];
