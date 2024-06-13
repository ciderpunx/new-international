"use client";
import Image from "next/image";
import header_logo from "../public/header_logo.svg";
// import co_op from "../public/co-operative.png";
import co_op_new from "../public/CoopLogoblack-padding.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { useState } from "react";

import { League_Gothic, Libre_Baskerville } from "next/font/google";
const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});
const league_gothic = League_Gothic({
  subsets: ["latin"],
});
const Page = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="m-auto min-h-[120dvh] w-screen bg-[#6ecad0] px-4 py-4 md:grid md:max-h-[70dvh] md:min-h-[70dvh] md:place-items-center md:px-0">
      <section className="flex h-[100dvh] w-full flex-col items-center justify-evenly gap-16 py-4 md:h-3/4 md:w-9/12 md:flex-row">
        {/* slide-1 */}
        <div className="grid h-full w-full grid-rows-3 gap-0">
          <div className="flex h-full w-full flex-col justify-start">
            {/* //image */}
            <div className="relative m-auto h-full w-full place-self-start">
              <div className="absolute inset-0 h-full w-1/2">
                <Image
                  fill={true}
                  src={header_logo}
                  alt="New International logo"
                  //   className="size-17 md:size-64"
                />
              </div>
            </div>
          </div>
          {/* //para */}

          <div className="grid h-full w-full place-items-center">
            <p className={`${libre_baskerville.className} text-sm md:text-xl`}>
              New Internationalist is a multi-stakeholder co-operative owned by
              its workers and approximately 4,600 co-owners.
            </p>
          </div>
          <div className="grid h-full w-full grid-cols-[30%_70%]">
            <div className="relative flex h-full w-full items-center justify-center gap-0">
              <div className="absolute inset-0 aspect-square h-full w-auto">
                <Image src={co_op_new} fill={true} alt="co-operative" />
              </div>
            </div>
            <div
              className={`${libre_baskerville.className} m-auto flex h-full w-full items-center justify-start text-left text-sm md:text-lg`}
            >
              Member of Co-operative UK
            </div>
          </div>
        </div>

        {/* slide-2 */}
        <div className="bg-teal-00 h-1/3 w-full self-start p-2">
          <div className="m-auto flex w-full flex-col gap-1">
            <h3
              className={`${league_gothic.className} text-2xl font-semibold uppercase text-gray-900 md:text-3xl`}
            >
              follow us
            </h3>

            <div className="flex w-full justify-start gap-2 text-gray-900 md:gap-4">
              <a
                href="https://www.facebook.com/newint"
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#4267B2]"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://twitter.com/newint"
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#000000]"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com/newinternationalist"
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-[#FD1D1D]"
              >
                <IoMailOpenOutline size={35} />
              </a>
              <a
                href="#"
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-black bg-gray-50 hover:border-2 hover:text-blue-500"
              >
                <FaLinkedinIn size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* slide-3 */}
        <div className="border- h-1/2 w-full flex-col gap-8 space-y-1 self-start">
          <span className="grid aspect-square size-12 place-items-center rounded-full border-2 border-gray-800 text-[#3c4c54]">
            <IoMailOpenOutline size={30} />
          </span>
          <h3
            className={`${league_gothic.className} text-2xl font-semibold uppercase text-gray-900 md:text-3xl`}
          >
            Subscribe to our newsletter
          </h3>
          <div className="space-y-2">
            <p className={`${libre_baskerville.className} text-sm md:text-xl`}>
              A weekly newsletter with the best of our journalism
            </p>
            <form className="grid h-14 w-full grid-cols-[70%_30%]">
              <input
                className="h-full w-full px-2 text-2xl placeholder:text-lg"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={`${league_gothic.className} h-full w-full bg-black text-lg uppercase text-white md:text-2xl`}
              >
                <a
                  href="
                https://subscribe.newint.org/
                "
                >
                  Subscribe
                </a>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* //? copyright */}
      <div className="flex w-full flex-col justify-between gap-4 md:w-9/12 md:flex-row">
        <span className={`${libre_baskerville.className} text-sm md:text-xl`}>
          Copyright <strong>&#169; </strong>New Internationalist
        </span>

        <div
          className={`${libre_baskerville.className} flex flex-col gap-1 text-sm md:flex-row md:items-center md:gap-4 md:text-xl`}
        >
          <span>Privacy Policy</span>
          <span>
            Crafted By <strong>Natural Eye Media</strong>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Page;
