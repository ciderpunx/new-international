"use client";
import Image from "next/image";
import header_logo from "../public/header_logo.svg";
import co_op_new from "../public/CoopLogoblack-padding.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Perform the form submission
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = formData.get("goto");
        } else {
          // Handle error case
          console.error("Form submission error");
        }
      })
      .catch((error) => {
        console.error("Form submission error", error);
      });
  };
  return (
    <footer className="m-auto min-h-[120vh] w-screen bg-[#6ecad0] px-4 py-4 md:grid md:min-h-[80vh] md:place-items-center md:px-0">
      <section className="flex h-[110vh] w-full flex-col items-center justify-evenly gap-16 py-4 md:h-5/6 md:w-9/12 md:flex-row">
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
            <p className={`${libre_baskerville.className} text-sm`}>
              New Internationalist is a multi-stakeholder co-operative owned by
              its workers and approximately 4,600 co-owners.
            </p>
          </div>
          <div className="bg-yellw-300 grid h-full w-full grid-cols-[30%_70%]">
            <div className="relative size-16 gap-2 self-center">
              <div className="absolute inset-0 aspect-square h-full w-auto">
                <Image src={co_op_new} fill={true} alt="co-operative" />
              </div>
            </div>
            <div
              className={`${libre_baskerville.className} m-auto flex h-full w-full items-center justify-start self-end text-left text-xs md:text-sm`}
            >
              Member of Co-operatives UK
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
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-2 border-black text-black"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://twitter.com/newint"
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-2 border-black text-black"
              >
                <FaXTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com/newinternationalist"
                className="grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-2 border-black text-black"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://linkedin.com/company/new-internationalist/"
                className="borde grid aspect-square size-14 cursor-pointer place-items-center rounded-full border-2 border-black text-black"
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
            <p className={`${libre_baskerville.className} text-sm md:text-sm`}>
              A weekly newsletter with the best of our journalism
            </p>
            <form
              action="//secure.whatcounts.com/bin/listctrl"
              method="post"
              onSubmit={handleSubmit}
              className="grid h-14 w-full grid-cols-[70%_30%]"
            >
              <input
                name="slid"
                value="6B5869DC547D3D46650B4D6780487885"
                type="hidden"
              />
              <input name="cmd" value="subscribe" type="hidden" />
              <input
                name="goto"
                value="https://newint.org/newsletter/success/"
                type="hidden"
              />
              <input
                name="custom_source_web_quickjoin"
                value="1"
                type="hidden"
              />
              <input name="custom_is_double_optin" value="1" type="hidden" />
              <input
                name="custom_source_web_sub_page"
                value="Interactive feature: abortion in Ethiopia"
                type="hidden"
              />
              <input
                name="custom_pref_monthly_edition"
                value="1"
                type="hidden"
              />
              <input name="format" value="html" type="hidden" />
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
                type="submit"
                // onSubmit={async () => {}}
                className={`${league_gothic.className} h-full w-full bg-black text-lg uppercase text-white md:text-2xl`}
              >
                {/* <a
                  href="
                https://subscribe.newint.org/
                "
                >
                </a> */}
                Subscribe
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
          <span>
            <a href=" https://newint.org/about/privacy" className="">
              Privacy Policy
            </a>
          </span>

          <span>
            <a
              href="
          https://naturaleyemedia.com/
          "
            >
              Crafted By <strong>Natural Eye Media</strong>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Page;
