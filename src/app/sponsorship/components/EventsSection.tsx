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
  eventslistHashmap: EventsMap[];
  startIdx?: number;
};

type EventsMap = {
  title: string;
  description: string;

  timeStr?: string;
  locationStr?: string;
  updatedLast?: string;
  optionalBottomJsx?: React.ReactElement; // IDK the type here for JSX ima do any

  photoPath: string;
  photoAlt: string;
};

export default function EventsSection({
  title,
  titleImgPath,
  eventslistHashmap,
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
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
      <ImageScrollTitle title={title} imgPath={titleImgPath} />{" "}
      {/* NOTE: CAN CHANGE BACKGROUND IMG HERE */}
      <div className="mt-10 flex flex-col items-center gap-20 px-10 md:px-[15dvw]">
        {eventslistHashmap.map(
          (
            {
              title,
              description,
              timeStr,
              locationStr,
              updatedLast,
              photoPath,
              photoAlt,
              optionalBottomJsx,
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
              <div className="w-full md:w-1/2 md:h-full my-auto aspect-video rounded-lg overflow-hidden">
                <img src={photoPath} alt={photoAlt} />
              </div>

              <div className="w-full md:w-1/2 md:h-full text-left">
                <h1 className="font-bold text-4xl text-titleColor text-center md:text-left">
                  {title}
                </h1>
                {(timeStr || locationStr) && (
                  <div className="flex flex-row gap-10 justify-center md:justify-start italic">
                    {timeStr && (
                      <h2 className="text-subTitleColor">{timeStr}</h2>
                    )}
                    {locationStr && (
                      <h2 className="text-subTitleColor">{locationStr}</h2>
                    )}
                  </div>
                )}
                {updatedLast && (
                  <h3 className="opacity-50 italic text-subTitleColor">
                    Last Updated: {updatedLast}
                  </h3>
                )}
                <p className="mt-3">{description}</p>
                {optionalBottomJsx}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
