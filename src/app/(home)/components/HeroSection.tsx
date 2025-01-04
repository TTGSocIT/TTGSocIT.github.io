'use client';
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { redirect } from 'next/navigation'





const HeroSection = () => {
  return (
    <div className="min-h-screen w-full px-5 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img
          src="/hero.jpg"
          alt="hero"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="text-white flex flex-col items-center gap-y-5">
        <div className="font-bold text-7xl">UNSW TTGSoc</div>
        <p>For everyone interested in Boardgames, RPGs & TCG at UNSW</p>

        <div className="flex gap-x-2">
          <button className="button">
            Join Us
          </button>
          <button style={{backgroundColor: "#7289DA"}} className="button" onClick={() => redirect("https://discord.gg/unswttgsoc", "push")}>
            <FaDiscord style={{width: "100%", height: "100%"}} />
          </button>
          <button style={{backgroundColor: "#1877F2"}} className="button"  onClick={() => redirect("https://www.facebook.com/unswttgsoc/", "push")}>
            <FaFacebookF />
          </button>
          <button style={{backgroundColor: "#C13584"}} className="button" onClick={() => redirect("https://www.instagram.com/unswttgsoc/", "push")}>
            <FaInstagram />
          </button>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[10vh]">
        <div className="absolute w-full h-[500%] skew-y-[-10deg] bg-[#303F9F]" />
        <div className="absolute w-full h-[500%] skew-y-[-6deg] bg-[#121212]" />
      </div>
    </div>
  );
};

export default HeroSection;
