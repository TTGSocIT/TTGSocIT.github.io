"use client";

import { redirect, RedirectType } from "next/navigation";

const WelcomeSection = () => {
  return (
    <div className="text-black py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-5">
        <div className="flex-1 max-w-[500px] flex flex-col gap-y-3 order-2 lg:order-1">

          <div className="font-bold text-3xl text-titleColor">
            Welcome to The UNSW Tabletop Games Society
          </div>
          <p>
          TTGSoc is a safe, welcoming space for everyone to connect over a shared love of tabletop games and all things related. We have a huge and expanding community for boardgames, trading card games, and role-playing games! Our diverse community ranges from first-year freshmen to postgrad hustlers, who are all deeply involved in the everyday running of our society. With our regular events, friendly members, and active Discord server, you will easily be able to connect with like-minded people about your favourite games and more!
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
          <img src="/original froggie.webp" alt="welcome" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
