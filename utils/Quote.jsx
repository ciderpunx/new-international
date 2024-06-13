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
        background: "#efffeff",
        borderColor: "#6ecad0",
        borderWidth: 4,
        borderLeft: 0,
        borderRight: 0,
      }}
      className={`${bagnard.className} mx-auto flex h-auto w-full max-w-5xl flex-col text-pretty border-b-4 border-t-4 border-b-sky-200 border-t-sky-200 bg-sky-100 px-4 py-16 md:py-32`}
    >
      {/* <span className="place-self-center text-center text-3xl md:text-4xl">
        &ldquo;{" "}
      </span> */}
      <blockquote className="max-w-[60ch] text-pretty pb-8 text-center md:text-balance md:text-4xl">
        {quote}
      </blockquote>
    </section>
  );
};
export default Page;
