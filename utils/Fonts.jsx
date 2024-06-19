import localfont from "next/font/local";
import { League_Gothic, Libre_Baskerville } from "next/font/google";

export const libre_baskerville_italic = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: "italic",
});
export const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

export const league_gothic = League_Gothic({
  subsets: ["latin"],
});

export const bagnard = localfont({
  src: "../app/Bagnard.woff",
  // weight: "400",
  // style: "normal",
  // display:'auto',
});
export const aileron = localfont({
  src: "../app/Aileron-Regular.woff2",
});
