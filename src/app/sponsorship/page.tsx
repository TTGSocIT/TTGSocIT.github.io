"use client";

import { Suspense } from "react";
import SponsorshipSection from "./components/SponsorshipSection";
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
    photoPath: "assets/sponsorships-logos/alliance-games-logo.jpg",
    photoAlt: "Alliance Games Logo",
  }
];

export default function Sponsorship() {
  return (
    <Suspense>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col mb-10 gap-10">
          {majorSponsorshipMap.length > 0 && (
            <SponsorshipSection
              title="Major Sponsorships"
              titleImgPath={"/hero.webp"}
              sponsorshipslistHashmap={majorSponsorshipMap}
            />
          )}
          {minorSponsorshipsMap.length > 0 && (
            <SponsorshipSection
              title="Minor Sponsorships"
              titleImgPath={"/hero.webp"}
              sponsorshipslistHashmap={minorSponsorshipsMap}
              startIdx={majorSponsorshipMap.length}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}
