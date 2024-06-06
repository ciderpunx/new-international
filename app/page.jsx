import Header from "../components/Header";
import Hero from "../components/Hero";
import Ethiopa from "../components/Ethiopa";
import InteractiveMap from "../components/InteractiveMap";
import TitlePara from "../utils/TitlePara";
import Mortality from "../components/MortalitySlider";
import DominantReligions from "../components/DominantReligions";
import Frontline from "../components/Frontline";
import ImageWrapper from "../utils/ImageWrapper";
import sustainability_1 from "../public/sustainability-1.jpg";
``;
import sustainability_2 from "../public/sustainability-2.jpg";
const Page = () => {
  return (
    <div className="h-auto min-h-screen w-screen bg-white">
      <Header />
      <main className="flex w-full flex-col gap-16 px-2 md:px-16">
        <Hero />
        <Ethiopa />
        <InteractiveMap />
        <TitlePara
          key="future-challenges"
          title="Reflecting on Progress and Future Challenges"
          para="As Ethiopia continues to navigate the complexities of abortion laws and women's rights, the impact of these laws on health outcomes and societal attitudes remains profound. Despite progress since the 2005 law, challenges persist. Future efforts must focus on improving access, reducing stigma, and ensuring that women's reproductive rights are upheld and protected."
        />
        <Mortality />
        {/* //* sustainability-1 */}
        <ImageWrapper
          alt="sustainability"
          key="sustainability-1"
          imageURL={sustainability_1}
          textData=" But it's not just about the materials - the way clothing is
            produced also plays a crucial role in sustainability."
        />
        <DominantReligions />

        {/* //* sustainability-2 */}
        <ImageWrapper
          alt="sustainability-2"
          key="sustainability-2"
          imageURL={sustainability_2}
          textData=" But it's not just about the materials - the way clothing is
            produced also plays a crucial role in sustainability."
        />
        <Frontline />
      </main>
    </div>
  );
};
export default Page;
