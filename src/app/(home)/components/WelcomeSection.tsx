"use client";

import { redirect, RedirectType } from "next/navigation";
import originalFroggieImage from "../../../../public/original froggie.webp";
import Image from "next/image";
import { EXTERNAL_LINKS } from "@/app/constants";

const WelcomeSection = () => {
  return (
    <div className="text-black py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-5">
        <div className="flex-1 max-w-[500px] flex flex-col gap-y-3 order-2 lg:order-1">
          <div className="font-bold text-4xl text-titleColor">
            Welcome to The UNSW Tabletop Games Society
          </div>
          <p>
            TTGSoc is a safe and welcoming space where everyone can connect over
            a shared love of board games, role playing games and trading card
            games to players of all backgrounds and experience levels. With
            regular events, friendly faces, and an active Discord server, you’ll
            have plenty of opportunities to meet like-minded people, discover
            new games, and share your passion for tabletop adventures!
          </p>
          <button
            onClick={() =>
              redirect(EXTERNAL_LINKS["discord"], RedirectType.push)
            }
            className="button max-w-[120px] items-center justify-center"
          >
            See More!
          </button>
        </div>

        <div className="flex-1 max-w-[500px] order-1 lg:order-2">
          <Image src={originalFroggieImage} alt="welcome" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
