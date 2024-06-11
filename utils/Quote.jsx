import { Artifika } from "next/font/google";
const artifika = Artifika({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = ({ quote }) => {
  return (
    <section
      style={{
        paddingTop: 16,
        background: "#efffeff",
        borderColor: "#6ecad0",
        paddingBottom: 16,
        borderWidth: 4,
        borderLeft: 0,
        borderRight: 0,
      }}
      className={`${artifika.className} mx-auto flex h-auto w-full max-w-5xl flex-col text-pretty border-b-4 border-t-4 border-b-sky-200 border-t-sky-200 bg-sky-100 px-4 py-16`}
    >
      {/* <span className="place-self-center text-center text-3xl md:text-4xl">
        &ldquo;{" "}
      </span> */}
      <p className="max-w-[60ch] text-pretty pb-8 text-center md:text-balance md:text-3xl">
        {quote}
      </p>
    </section>
  );
};
export default Page;
