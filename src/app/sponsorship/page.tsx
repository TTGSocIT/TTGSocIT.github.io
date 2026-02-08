"use client";

import { Suspense } from "react";
import SponsorshipSection from "./components/SponsorshipSection";
//import WhoWeAre from "./components/WhoWeAre";

const majorSponsorshipMap = [
  {
    title: "Domino’s Pizza Kensington",
    description: "  We are overjoyed that one of the most convenient, iconic, and budget friendly pizza establishments near UNSW chose to sponsor our events. Domino’s has generously agreed to provide free pizza at selected events throughout 2026. If you want to show them some love and support, their store is located at 3/230 Anzac Parade, Kensington, just a quick walk away.",
    // image aspect ratio is 16:9
    photoPath: "assets/sponsorships-logos/dominos-logo.png",
    photoAlt: "Domino's logo",
  }];

export default function Sponsorship() {
  return (
    <Suspense>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col mb-10 gap-10">
          {majorSponsorshipMap.length > 0 && (
            <SponsorshipSection
              title="Primary Sponsorships"
              titleImgPath={"/hero.webp"}
              sponsorshipslistHashmap={majorSponsorshipMap}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}
