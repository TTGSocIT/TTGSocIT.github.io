"use client";

import { Suspense } from "react";
import SponsorshipSection from "./components/SponsorshipSection";
import ImageScrollTitle from "./components/ImageScrollTitle";
//import WhoWeAre from "./components/WhoWeAre";

const majorSponsorshipMap = [
  {
    title: "Domino’s Pizza Kensington",
    description: "We are overjoyed that one of the most convenient, iconic, and budget friendly pizza establishments near UNSW chose to sponsor our events. Domino’s has generously agreed to provide free pizza at selected events throughout 2026. If you want to show them some love and support, their store is located at 3/230 Anzac Parade, Kensington, just a quick walk away.",
    // image aspect ratio is 16:9
    photoPath: "/assets/sponsorships-logos/dominos-logo.png",
    photoAlt: "Domino's logo",
  },
  {
    title: "Jane Street",
    description: "Jane Street is a quantitative trading firm with offices worldwide. We hire smart, humble people who love to solve problems, build systems, and test theories. You’ll learn something new every day in our office—whether it’s connecting with a colleague to share perspectives, or participating in a talk, class, or game night. Our success is driven by our people and we never stop improving. \n- Jane St",
    photoPath: "/assets/sponsorships-logos/jane-street.png",
    photoAlt: "Jane Street's logo",
  }];

export default function Sponsorship() {
  return (
    <Suspense>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col mb-10 gap-10">
          <ImageScrollTitle title="Primary Sponsorships" imgPath="/hero.webp" />
          {majorSponsorshipMap.length > 0 && (
            <SponsorshipSection
              sponsorshipslistHashmap={majorSponsorshipMap}
            />
          )}
        </div>
      </div>
    </Suspense>
  );
}
