'use client';
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { redirect, RedirectType } from 'next/navigation';



/**
 * The Main Page of the Website root.
 */
const HeroSection = () => {
  return (
    <div className="min-h-screen w-full px-5 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <img
          src="/hero.webp"
          alt="hero"
          className="w-full h-full object-cover object-left"
        />
      </div>

      <div className="text-white flex flex-col items-center gap-y-5">
        <div className="font-bold text-7xl text-center">UNSW Tabletop Games Society</div>
        <p>For everyone interested in Boardgames, RPGs & TCG at UNSW</p>

        <div className="flex gap-x-2"> 
          <button  style={{marginRight: "1rem", backgroundColor: "rgb(48 63 159)"}} className="flex align-center rounded-md text-center px-6 py-3 hover:brightness-125 transition-all duration-100" onClick={() => redirect("https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VwT", RedirectType.push)}>
            Join Us
          </button>
          
          <button style={{backgroundColor: "#7289DA", padding: "10px"}} className="flex align-center p-2 rounded-md aspect-square hover:brightness-125 transition-all duration-100" onClick={() => redirect("https://discord.gg/unswttgsoc", RedirectType.push)}>
            <FaDiscord style={{width: "1.5em", height: "100%"}} />
          </button>
          
          <button style={{backgroundColor: "#1877F2"}} className="flex align-center p-2 rounded-md aspect-square hover:brightness-125 transition-all duration-100"  onClick={() => redirect("https://www.facebook.com/unswttgsoc/", RedirectType.push)}>
            <FaFacebookF style={{width: "1.5em", height: "100%"}} />
          </button>
          
          <button style={{backgroundColor: "#C13584"}} className="flex align-center p-2 rounded-md aspect-square hover:brightness-125 transition-all duration-100" onClick={() => redirect("https://www.instagram.com/unswttgsoc/", RedirectType.push)}>
            <FaInstagram style={{width: "1.5em", height: "100%"}} />
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
