export const Hyperlinks = ({ word, linkNumber }) => {
  // console.log(dataJSON);
  return (
    <a
      title={dataArray[linkNumber]?.name}
      href={dataArray[linkNumber]?.href}
      className="relative"
      style={{ textDecoration: "underline", color: "darkblue" }}
    >
      {" "}
      {word}{" "}
    </a>
  );
};

export default Hyperlinks;

let dataArray = [
  {
    name: "CIA, ‘Ethiopia – Country summary’, May 2024",
    href: "https://a.nin.tl/census",
  },
  {
    name: "Centre for Reproductive Rights, ‘Ethiopia’, 2003",
    href: "https://a.nin.tl/leading",
  },
  {
    name: "MD Feyssa and SK Gebru, ‘Liberalizing abortion to reduce…’, Reproductive Health, Vol 19, 2022",
    href: "https://https://a.nin.tl/plummet",
  },
  {
    name: "Fos Feminista, ‘The Global Impact…’, January 2024",
    href: "https://a.nin.tl/RippleEffect ",
  },

  {
    name: "Ipas, ‘Pulling back the cover…’, Report, 2023",
    href: "https://a.nin.tl/roots",
  },
  {
    name: "Claire Provost and Nandini Naira Archer, ‘Exclusive: Trump-linked religious…’, openDemocracy, February 2020",
    href: "https://a.nin.tl/coerce",
  },
  {
    name: "Andres Schipani, ‘Sex education ignites…’, Financial Times, June 2021",
    href: "https://a.nin.tl/views",
  },
  {
    name: "Kidus Dawit, ‘Parliament votes to extend State of Emergency’, The Reporter, February 2024",
    href: "https://a.nin.tl/soe",
  },
  {
    name: "MM Alemayehu and S Terje, ‘Media and religion…’, Fojo media institute, Linnaeus University, 2024",
    href: "https://a.nin.tl/ MediaEthio",
  },
  {
    name: "UN Women Africa, ‘Multi-country analytical study’, 2019",
    href: "https:// a.nin.tl/amhara",
  },
  {
    name: "Amnesty International, ‘An Unstoppable movement…’, November 2023",
    href: "https://a.nin.tl/attacks",
  },
  {
    name: "Amnesty International, ‘Ethiopia: Troops and militia rape’, August 2021",
    href: "https:// a.nin.tl/Tigray",
  },
  {
    name: "WHO, ‘HeRAMS Tigray baseline report 2023’, October 2023",
    href: "https://a.nin.tl/troops",
  },
  {
    name: "Patty Skuster and other, ‘Evidence for ending…’, Guttmacher Institute, April 2024",
    href: "https://a.nin.tl/GagRule",
  },
  {
    name: "Lydia Namubiru and Khatondi Soita Wepukhulu, ‘Exclusive: US Christian Right pours more than $50m in Africa’, openDemocracy, October 2020",
    href: "https://a.nin.tl/millions",
  },
];
