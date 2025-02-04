import Header from "../components/Header";
import Hero from "../components/Hero";
import Ethiopa from "../components/Ethiopa";
import Mortality from "../components/MortalitySlider";
import DominantReligions from "../components/DominantReligions";

import Author from "../components/Author";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Shadows from "../components/Shadows";
import Maputo from "../components/MaputoProtocol";

const Page = () => {
  return (
    <div className="mx-auto flex h-auto min-h-screen w-screen flex-col overflow-x-hidden bg-white">
      <Header />
      <main className="flex w-full flex-col gap-16 px-4 pt-24 focus:outline-none md:gap-24 md:px-8">
        <Hero />
        <DominantReligions />
        <Ethiopa />

        <Mortality />
        <Maputo />

        <Shadows />

        <Author />
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
};
export default Page;
