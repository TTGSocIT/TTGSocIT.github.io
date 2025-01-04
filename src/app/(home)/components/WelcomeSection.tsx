'use client';
import { redirect, RedirectType } from 'next/navigation'

const WelcomeSection = () => {
  return (
    <div className="text-white py-20 px-5 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-5">
        <div className="flex-1 max-w-[500px] flex flex-col gap-y-3 order-2 lg:order-1">
          <div className="font-bold text-3xl text-primary">
            Welcome to The UNSW Tabletop Games Society
          </div>
          <p>
            We are the social club you are looking for if you are even slightly
            interested in anime & manga culture. Whether you are an ultra weeb
            who has seen 500+ anime or someone who has never watched anime
            before, we welcome and have something for everyone. 2020 Winner of
            the ActivateUTS club’s contributor of the year award, as well as the
            2021 winner of the Best Team Spirit award, we are always working
            hard to make your university life as fun & enriching as possible.
          </p>
          <button  onClick={() => redirect("https://discord.gg/unswttgsoc", RedirectType.push)} className="button">See More!</button>
        </div>

        <div className="flex-1 max-w-[500px] order-1 lg:order-2">
          <img src="/welcome.webp" alt="welcome" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
