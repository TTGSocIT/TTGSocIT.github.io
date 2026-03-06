"use client";

import { titleCaseToId } from "@/app/utils/titleCaseToId";
import ImageScrollTitle from "./ImageScrollTitle";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/**
 * --- DEFINITION OBJECT ---
 * This object here defines how the page gets laid out.
 * Define each listed component here by filling out the hashmap.
 * Each entry = 1 item
 */

type Props = {
  title: string;
  titleImgPath: string;
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
  title,
  titleImgPath,
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
      <ImageScrollTitle title={title} imgPath={titleImgPath} />
      <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* NOTE: CAN CHANGE BACKGROUND IMG HERE */}
        <div className="mt-10 flex flex-col items-center gap-20 px-10 md:px-[15dvw]">
          {sponsorshipslistHashmap.map(
            (
              {
                title,
                description,
                photoPath,
                photoAlt,
              },
              idx
            ) => (
              <div
                key={`event-${idx}`}
                id={titleCaseToId(title)}
                className={`flex flex-col ${
                  (idx + (startIdx || 0)) % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } w-full justify-center gap-5 md:gap-10 md:min-h-64`}
              >
                {/* IMAGE  */}
                <div className="w-full md:w-1/2 md:h-full my-auto aspect-video rounded-lg overflow-hidden flex items-center justify-center">
                  <img src={photoPath} alt={photoAlt} className="w-full h-full object-contain" />
                </div>

                <div className="w-full md:w-1/2 md:h-full text-left">
                  <h1 className="font-bold text-4xl text-titleColor text-center md:text-left">
                    {title}
                  </h1>
                  <p className="mt-3">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}


