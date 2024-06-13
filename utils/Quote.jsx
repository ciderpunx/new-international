// import { Artifika } from "next/font/google";
// const artifika = Artifika({
//   subsets: ["latin"],
//   weight: ["400"],
// });

//* use a local font
import localfont from "next/font/local";
const bagnard = localfont({
  src: "../app/Bagnard.woff",
  // weight: "400",
  // style: "normal",
  // display:'auto',
});

const Page = ({ quote }) => {
  return (
    <section
      style={{
        paddingTop: 72,
        paddingBottom: 72,
        background: "#effeff",
        borderColor: "#6ecad0",
        borderWidth: 2,
        borderLeft: 0,
        borderRight: 0,
      }}
      className={`${bagnard.className} mx-auto flex h-auto w-full max-w-5xl flex-col text-pretty border-b-2 border-t-2 px-4 py-16 text-3xl md:py-32`}
    >
      {/* <span className="place-self-center text-center text-3xl md:text-4xl">
        &ldquo;{" "}
      </span> */}
      <blockquote className="max-w-[60ch] text-pretty pb-8 text-center text-2xl md:text-balance md:text-3xl">
        {quote}
      </blockquote>
    </section>
  );
};
export default Page;
