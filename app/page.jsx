import Header from "../components/Header";
import Hero from "../components/Hero";
import Ethiopa from "../components/Ethiopa";
import InteractiveMap from "../components/InteractiveMap";
import Mortality from "../components/MortalitySlider";
import DominantReligions from "../components/DominantReligions";
import sustainability_1 from "../public/sustainability-1.jpg";
``;
import sustainability_2 from "../public/sustainability-2.jpg";
import Frontline from "../components/Frontline";
import FutureChallenges from "../components/FutureChallenges";
import Author from "../components/Author";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Shadows from "../components/Shadows";

import TitlePara from "../utils/TitlePara";
import ImageWrapper from "../utils/ImageWrapper";
import Quote from "../utils/Quote";

const Page = () => {
  return (
    <div className="mx-auto flex h-auto min-h-screen w-screen flex-col bg-white">
      <Header />
      <main className="flex w-full flex-col gap-24 px-4 pt-24 md:px-8">
        <Hero />
        <DominantReligions />
        <Ethiopa />

        <Mortality />
        <InteractiveMap />

        <Shadows />

        <Author />
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Page;
