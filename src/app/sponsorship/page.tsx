"use client";

import AboutSection from "./components/AboutSection";
import ImageScrollTitle from "./components/ImageScrollTitle";
//import WhoWeAre from "./components/WhoWeAre";

const aboutHashMap = [
  {
    title: "Domino's",
    description:
      "Blah blah blah",

    // image aspect ratio is 16:9
    photoPath: "assets/sponsorships-logos/dominos-logo.png",
    photoAlt: "Domino's logo",
  },
  {
    title: "Major Sponsorships",
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
        <ImageScrollTitle title="Major Sponsorships" imgPath="/hero.webp" />
        {aboutHashMap.length > 0 && (
          <AboutSection aboutListHashmap={aboutHashMap} />
        )}
      </div>
    </div>
  );
}
