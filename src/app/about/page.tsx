"use client";

import AboutSection from "./components/AboutSection";
import ImageScrollTitle from "./components/ImageScrollTitle";
import WhoWeAre from "./components/WhoWeAre";

const aboutHashMap = [
  {
    title: "About UNSW TTGSoc",
    description:
      "At TTGSoc you can join a thriving community and create meaningful relationships in a safe and casual space. In a university of over 60,000 students, tabletop games are a good starting point for getting to know others. Who knows where else your interests might take you? Many of our members have a shared love for countless other things like art, rhythm games, bouldering, and even Valorant… We’ve even had some longtime members with no interest in tabletop games join our weekly sessions and subcommittee just for the people and fun atmosphere!",

    // image aspect ratio is 16:9
    photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",
  },
  {
    title: "Sponsorships",
    description:
      "We are currently sponsored by Goodgames and Alliance Games, both gaming stores close to UNSW. As long as you have joined us as a TTGSoc member, you can receive 5-10% discounts on all of their products! If you are a sponsor and would like to reach out to us, please contact us at our email unswttgsoc@gmail.com. We provide flexible sponsorship options, with the capacity to promote content to over 1500 of current university students and new graduates over our extensive social media coverage.",

    photoPath: "assets/events_pictures/regular/Sponsorships.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",

    timeStr: "",
    locationStr: "",
  },
  {
    title: "Collaboration Prospects",
    description:
      "We are very welcoming to any collaboration inquiries from university societies, businesses or individuals! Over the past few years, we have been a consistent and successful partner for events such as Megalan, CRITS, and inter-university events. We have a large audience of boardgame enjoyers, longtime TCG players, and experienced dungeon masters.Please contact us via email, or through any of our socials to learn more about what we can offer for your event.?",

    photoPath: "assets/events_pictures/regular/Aerospace Collab.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",

    timeStr: "",
    locationStr: "",
    updatedLast: "",
  },
];

export default function About() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col mb-10 gap-10">
        <ImageScrollTitle title="About" imgPath="/hero.webp" />
        {aboutHashMap.length > 0 && (
          <AboutSection aboutListHashmap={aboutHashMap} />
        )}
        <WhoWeAre />
      </div>
    </div>
  );
}
