"use client";

import SponsorshipSection from "./components/SponsorshipSection";
import ImageScrollTitle from "./components/ImageScrollTitle";
//import WhoWeAre from "./components/WhoWeAre";

const majorSponsorshipMap = [
  {
    title: "Domino's",
    description: "(Insert text)",
    // image aspect ratio is 16:9
    photoPath: "assets/sponsorships-logos/dominos-logo.png",
    photoAlt: "Domino's logo",
  }];


const minorSponsorshipsMap = [
  {
    title: "Alliance Games",
    description: "(Insert text)",
    photoPath: "assets/sponsorships-logo/alliance-games-logo.jpg",
    photoAlt: "Alliance Games Logo",
  }
];

export default function About() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col mb-10 gap-10">

        {/* Major Sponsorships banner + content */}
        <ImageScrollTitle title="Major Sponsorships" imgPath="/hero.webp" />
        {majorSponsorshipMap.length > 0 && (
          <SponsorshipSection majorSponsorshipHashmap={majorSponsorshipMap} minorSponsorshipHashmap={[]} />
        )}

        {/* Minor Sponsorships banner + content */}
        <ImageScrollTitle title="Minor Sponsorships" imgPath="/hero.webp" />
        {minorSponsorshipsMap.length > 0 && (
          <SponsorshipSection minorSponsorshipHashmap={minorSponsorshipsMap} majorSponsorshipHashmap={[]} />
        )}

      </div>
    </div>
  );
}
