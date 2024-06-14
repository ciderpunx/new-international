import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New International",
  description: "Dev mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KD6ZVR"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KD6ZVR"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
