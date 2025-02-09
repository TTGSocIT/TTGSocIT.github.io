"use client";

import { redirect, RedirectType } from "next/navigation";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";

import { IoShareSocialSharp } from "react-icons/io5";

const JoinPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-10">
      <div className="bg-black flex flex-col items-center gap-y-14 pt-24 pb-20 w-full px-5">
        <h3 className="text-5xl font-semibold text-white">Become a member!</h3>
        <div className="flex flex-col items-center gap-y-5">
          <img src="/sparc.png" alt="Join Us" />
          <p className="text-white text-wrap text-center">
            Join us on Arc, to become an offical member
          </p>
          <button
            className="button font-semibold"
            onClick={() =>
              redirect(
                "https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F0000371VwT",
                RedirectType.push
              )
            }
          >
            <IoShareSocialSharp />
            Become a member!
          </button>
        </div>
      </div>

      <div className="bg-neutral-900 w-full py-20 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 mx-auto w-full max-w-5xl">
          <div className="h-full flex flex-col justify-between gap-3 text-white max-w-[200px] w-full mx-auto">
            <div className="flex gap-x-2 items-center text-2xl font-semibold">
              <FaDiscord className="text-5xl text-[#5865F2]" />
              Discord
            </div>
            <p>
              The main place for the community, find everything you need here!
            </p>
            <button
              className="button font-semibold max-w-[120px] justify-center"
              onClick={() =>
                redirect("https://discord.gg/unswttgsoc", RedirectType.push)
              }
            >
              <IoShareSocialSharp />
              Join us
            </button>
          </div>

          <div className="h-full flex flex-col justify-between gap-3 text-white max-w-[200px] w-full mx-auto">
            <div className="flex gap-x-2 items-center text-2xl font-semibold">
              <FaFacebook className="text-5xl text-[#4267B2]" />
              Facebook
            </div>
            <p>For our official posts and event details</p>
            <button
              className="button font-semibold max-w-[120px] justify-center"
              onClick={() =>
                redirect(
                  "https://www.facebook.com/unswttgsoc/",
                  RedirectType.push
                )
              }
            >
              <IoShareSocialSharp />
              Join us
            </button>
          </div>

          <div className="h-full flex flex-col justify-between gap-3 text-white max-w-[200px] w-full mx-auto">
            <div className="flex gap-x-2 items-center text-2xl font-semibold">
              <FaInstagram className="text-5xl text-[#E1306C]" />
              Instagram
            </div>
            <p>Find our event photos and event announcements!</p>
            <button
              className="button font-semibold max-w-[120px] justify-center"
              onClick={() =>
                redirect(
                  "https://www.instagram.com/unswttgsoc/",
                  RedirectType.push
                )
              }
            >
              <IoShareSocialSharp />
              Join us
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-5 pt-10">
        <div className="py-20 px-5 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-5">
            <div className="flex-1 max-w-[500px] flex flex-col gap-y-3 order-2 lg:order-1">
              <div className="font-bold text-4xl text-titleColor">
                Benefits of joining UNSW TTGSoc
              </div>
              <p>
                If you’re passionate about any of the branches of tabletop games
                we offer under our society such as board games, trading card
                games or TTRPGs, looking to develop teamwork and communication
                skills, or even just wanting to pad your resume with some
                extracurricular experiences, applying for a subcommittee,
                director or executive role would be perfect for you! Our 2025
                subcommittee applications are OPEN NOW!!!
              </p>

              <button
                className="button font-semibold justify-center"
                onClick={() =>
                  redirect(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfHoafWCgH2Udboj7KE_A53HduvegDnU3PNevCwOdQHs1NYTQ/viewform?usp=sharing",
                    RedirectType.push
                  )
                }
              >
                <IoShareSocialSharp />
                Join the team!
              </button>
            </div>

            <div className="flex-1 max-w-[500px] order-1 lg:order-2 my-auto">
              <img src="/stall.webp" alt="welcome" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
