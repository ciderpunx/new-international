import Image from "next/image";
import TitlePara from "../utils/TitlePara";
import mortalitySlider from "../public/maternal-slider.svg";
// import ImageWrapper from '../utils/ImageWrapper'

const Page = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
      {/* //? title */}
      <TitlePara key="maternal-mortality" title="Drop in Maternal Mortality" />
      {/* //? past future svg with slider*/}
      {/* //* this is not final!!! */}
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 h-full w-full">
          <Image src={mortalitySlider} alt="maternal-mortality" fill="true" />
        </div>
      </div>
    </div>
  );
};
export default Page;
