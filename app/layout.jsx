import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "New International",
//   description: "Dev mode",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KD6ZVR"
            height="0"
            width="0"
            className="hidden"
            // style={{
            //   display: "none",
            //   visibility: "hidden",
            // }}
          ></iframe>
        </noscript>
      </Head>
      <title>
        Fertile Ground - The Rising Anti-Abortion Movement in Ethiopia: A Threat
        to Women&apos;s Rights
      </title>
      <meta
        name="description"
        content="Explore the growing anti-abortion movement in Ethiopia and its impact on women's rights amidst a backdrop of social and political challenges."
      />
      <meta
        name="keywords"
        content="Anti-abortion movement, Ethiopia, women's rights, reproductive rights, abortion laws, healthcare, activism"
      />
      <meta
        name="author"
        content="Bethany Rielly, Maxine Betteridge-Moes, Maya Misikir"
      />
      <meta
        property="og:title"
        content="Fertile Ground - The Rising Anti-Abortion Movement in Ethiopia: A Threat to Women's Rights"
      />
      <meta
        property="og:description"
        content="Explore the growing anti-abortion movement in Ethiopia and its impact on women's rights amidst a backdrop of social and political challenges."
      />
      <meta property="og:image" content="/NewInternationalist Open Graph.png" />
      <meta
        property="og:url"
        content="https://newint.org/interactive/2024/fertile-ground"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:site_name"
        content="New Internationalist Magazine"
      />{" "}
      <link rel="icon" href="app/NewInt Favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Fertile Ground - The Rising Anti-Abortion Movement in Ethiopia: A Threat to Women's Rights"
      />
      <meta
        name="twitter:description"
        content="Explore the growing anti-abortion movement in Ethiopia and its impact on women's rights amidst a backdrop of social and political challenges."
      />
      <meta
        name="twitter:image"
        content="/NewInternationalist Open Graph.png"
      />
      <meta name="twitter:site" content="@newint" />
      <link
        rel="canonical"
        href="https://newint.org/interactive/2024/fertile-ground"
      ></link>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KD6ZVR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
