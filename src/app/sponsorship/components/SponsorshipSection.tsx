"use client";

import { titleCaseToId } from "@/app/utils/titleCaseToId";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

/**
 * --- DEFINITION OBJECT ---
 * This object here defines how the page gets laid out.
 * Define each listed component here by filling out the hashmap.
 * Each entry = 1 item
 */

type Props = {
  sponsorshipslistHashmap: SponsorshipMap[];
  startIdx?: number;
};

type SponsorshipMap = {
  title: string;
  description: string;
  photoPath: string;
  photoAlt: string;
};

export default function SponsorshipsSection({
  sponsorshipslistHashmap,
  startIdx,
}: Props) {
  /**
   * Object that Creates an Event Section
   *
   * title, titleImgPath:
   *  Get passed to the title card object w/ the image for the background
   *
   * eventslistHashmap: eventsMap[]
   *  Event details to be rendered
   *
   * startIdx: number (default 0)
   *  Used for formatting.
   *  The index of the list gets used to make the layout alternate to image on l/r, so this allows you to pass in the previous case's length so the alternation continues and doesn't restart.
   */
  const query = useSearchParams();

  useEffect(() => {
    const eventId = query.get("event");
    if (eventId) {
      const element = document.getElementById(eventId);
      if (element) {
        setTimeout(() => {
          const elementRect = element.getBoundingClientRect();
          const offset =
            window.scrollY +
            elementRect.top -
            window.innerHeight / 2 +
            elementRect.height / 2;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }, 500);
      }
    }
  }, [query]);

  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* NOTE: CAN CHANGE BACKGROUND IMG HERE */}
        <div className="flex flex-col items-center gap-20 px-6 md:px-10 w-full max-w-6xl">
          {sponsorshipslistHashmap.map(
          ({ title, description, photoPath, photoAlt }, idx) => (
            <div
              key={`event-${idx}`}
              id={titleCaseToId(title)}
              className={`flex flex-col ${
                (idx + (startIdx || 0)) % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } w-full max-w-6xl mx-auto items-center justify-center gap-8 md:gap-16`}
            >
              <div className="relative w-full md:w-1/2 aspect-video rounded-md overflow-hidden shrink-0">
                <Image 
                  src={photoPath} 
                  alt={photoAlt} 
                  fill 
                  className="object-contain" 
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h2 className="font-bold text-3xl md:text-4xl text-titleColor mb-4">
                  {title}
                </h2>
                <p className="text-base md:text-xl leading-relaxed text-gray-700 whitespace-pre-line">
                  {description}
                </p>
              </div>
            </div>
          )
        )}
        </div>
      </div>
    </>
  );
}


