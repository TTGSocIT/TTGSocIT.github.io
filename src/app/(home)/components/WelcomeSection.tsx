"use client";

import { redirect, RedirectType } from "next/navigation";

const WelcomeSection = () => {
  return (
    <div className="text-black py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-5">
        <div className="flex-1 max-w-[500px] flex flex-col gap-y-3 order-2 lg:order-1">
          <div className="font-bold text-3xl text-[#4D9D01]">
            Welcome to The UNSW Tabletop Games Society
          </div>
          <p>
            TTGSoc is open to all UNSW members (is this true or is it open to
            EVERYONE), with a diverse community ranging from fresh first-years
            to weathered postgrads - even our subcommittee! With our friendly
            members and huge dDiscord server (with dedicated RPG channels too!)
            TTGSoc is a safe, welcoming space for everyone to connect over a
            shared love of tabletop games and all things related.
          </p>
          <button
            onClick={() =>
              redirect("https://discord.gg/unswttgsoc", RedirectType.push)
            }
            className="button max-w-[120px] items-center justify-center"
          >
            See More!
          </button>
        </div>

        <div className="flex-1 max-w-[500px] order-1 lg:order-2">
          <img src="/welcome.webp" alt="welcome" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
