"use client";

import { Suspense } from "react";
import SponsorshipSection from "./components/SponsorshipSection";
//import WhoWeAre from "./components/WhoWeAre";

const majorSponsorshipMap = [
  {
    title: "Domino’s Pizza Kensington",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum Curabitur pretium tincidunt lacus vitae facilisis justo fermentum nec Integer posuere erat a ante venenatis dapibus posuere velit aliquet Nam tristique sem at sapien gravida eu dictum orci feugiat Praesent sodales ligula in libero Sed dignissim lacinia nunc Curabitur tortor Pellentesque nibh Aenean quam In scelerisque sem at dolor Maecenas mattis Sed convallis tristique sem Proin ut ligula vel nunc egestas porttitor Morbi lectus risus iaculis vel suscipit quis luctus non massa Fusce ac turpis quis ligula lacinia aliquet Mauris ipsum Nulla metus metus ullamcorper vel tincidunt sed euismod in nibh Quisque volutpat condimentum velit Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos himenaeos Vivamus laoreet odio at leo interdum malesuada nisl fermentum cras blandit arcu vitae elit posuere nulla facilisi etiam tempor augue sed cursus lorem",
    // image aspect ratio is 16:9
    photoPath: "assets/sponsorships-logos/dominos-logo.png",
    photoAlt: "Domino's logo",
  }];


const minorSponsorshipsMap = [
  {
    title: "Alliance Games",
    description: "Lorem occaecat cupidatat non proident, sunt in culpa  officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, vitae facilisis justo fermentum nec. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nam tristique sem at sapien gravida, eu dictum orci feugiat. Praesent sodales",
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
