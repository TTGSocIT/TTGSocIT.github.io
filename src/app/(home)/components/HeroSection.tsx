"use client";

import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { redirect, RedirectType } from "next/navigation";

/**
 * The Main Page of the Website root.
 */
const HeroSection = () => {
  return (
    <div className="bg-transparent min-h-screen w-full px-3 md:px-5 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <img
          src="/hero.webp"
          alt="hero"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="flex flex-col items-center gap-y-5 p-10 max-w-5xl">
        <div className="text-[#ffffff] font-bold text-7xl md:text-7xl text-center">
          UNSW Tabletop Games Society
        </div>
        <p className="text-white text-2xl md:text-4x1 text-center">
          For everyone interested in Boardgames, RPGs & TCG at UNSW  s
        </p>

        <div className="flex gap-x-2 text-white z-10">
          <button
            className="bg-[#303F9F] flex align-center rounded-md text-center text-sm md:text-base px-4 md:px-6 py-3 hover:brightness-125 transition-all duration-100"
            onClick={() =>
              redirect(
                "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VwT",
                RedirectType.push
              )
            }
          >
            Join Us
          </button>

          <button
            className="bg-[#7289DA] flex justify-center items-center p-1 md:p-2 rounded-md
            hover:brightness-125 transition-all duration-100 size-12"
            onClick={() =>
              redirect("https://discord.gg/unswttgsoc", RedirectType.push)
            }
          >
            <FaDiscord className="text-2xl" />
          </button>

          <button
            className="bg-[#1877F2] flex justify-center items-center p-1 md:p-2 rounded-md
            hover:brightness-125 transition-all duration-100 size-12"
            onClick={() =>
              redirect(
                "https://www.facebook.com/unswttgsoc/",
                RedirectType.push
              )
            }
          >
            <FaFacebookF className="text-xl" />
          </button>

          <button
            className="bg-[#C13584] flex justify-center items-center p-1 md:p-2 rounded-md
            hover:brightness-125 transition-all duration-100 size-12"
            onClick={() =>
              redirect(
                "https://www.instagram.com/unswttgsoc/",
                RedirectType.push
              )
            }
          >
            <FaInstagram className="text-2xl" />
          </button>
        </div>
      </div>

      {/* I think we should change this part to be different to the anime@uts website both in colours and shape design */}
      <div className="absolute left-0 right-0 bottom-0 h-[10vh] bg-transparent">
        <div className="absolute w-full h-[500%] skew-y-[-10deg] bg-accentColor" />
        <div className="absolute w-full h-[500%] skew-y-[-6deg] bg-white" />
      </div>
    </div>
  );
};

export default HeroSection;
