"use client";

import AboutSection from "./components/AboutSection";
import ImageScrollTitle from "./components/ImageScrollTitle";
//import WhoWeAre from "./components/WhoWeAre";

const aboutHashMap = [
  {
    title: "About UNSW TTGSoc",
    description:
      "At TTGSoc, you’ll find a thriving community where you can build meaningful connections in a welcoming and casual space. In a university of over 60,000 students, tabletop games offer a great way to meet new people—and who knows where your interests might take you? Many of our members share a love for art, rhythm games, bouldering, and even Valorant. We’ve even had longtime members with no prior interest in tabletop games join our weekly sessions and subcommittee just for the people and the fun atmosphere!",

    // image aspect ratio is 16:9
    photoPath: "assets/events_pictures/regular/cropped_bgames.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",
  },
  {
    title: "Sponsorships",
    description:
      "We welcome all collaboration inquiries from university societies, businesses and individuals! Over the years, we’ve been a reliable and successful partner for events like MegaLAN, CRITS, and inter-university tournaments. Our community includes a wide audience of board game enthusiasts, seasoned TCG players, and experienced dungeon masters, making us a great fit for a variety of gaming-related events.If you're interested in partnering with us, feel free to reach out via email or any of our socials to explore what we can offer for your event.",


    photoPath: "/Sponsorships_new.webp",
    photoAlt: "People playing boardgames at our weekly boardgame events",

    timeStr: "",
    locationStr: "",
  },
  {
    title: "Collaboration Prospects",
    description:
      "We are very welcoming to any collaboration inquiries from university societies, businesses or individuals! Over the past few years, we have been a consistent and successful partner for events such as MegaLAN, CRITS, and inter-university events. We have a large audience of boardgame enjoyers, longtime TCG players, and experienced dungeon masters.Please contact us via email, or through any of our socials to learn more about what we can offer for your event.?",

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
      </div>
    </div>
  );
}
