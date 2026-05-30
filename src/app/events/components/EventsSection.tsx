"use client";

import { titleCaseToId } from "@/app/utils/titleCaseToId";
import ImageScrollTitle from "./ImageScrollTitle";
import Image from "next/image";
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
  secondaryTimeStr?: string;
  secondaryLocationStr?: string;
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
    <>
      <ImageScrollTitle title={title} imgPath={titleImgPath} />
      <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
        {/* NOTE: CAN CHANGE BACKGROUND IMG HERE */}
        <div className="flex flex-col items-center gap-20 px-6 md:px-10 w-full max-w-7xl">
          {eventslistHashmap.map(
            (
              {
                title,
                description,
                timeStr,
                locationStr,
                secondaryTimeStr,
                secondaryLocationStr,
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
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } w-full justify-center gap-5 md:gap-10 md:min-h-64`}
              >
                <div className="relative w-full lg:w-1/2 lg:h-full my-auto aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={photoPath.startsWith("/") ? photoPath : `/${photoPath}`}
                    alt={photoAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="w-full lg:w-1/2 lg:h-full text-left">
                  <h1 className="font-bold text-4xl text-titleColor text-center lg:text-left">
                    {title}
                  </h1>
                  {(timeStr ||
                    locationStr ||
                    secondaryTimeStr ||
                    secondaryLocationStr) && (
                    <div className="grid w-fit max-w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 italic text-gray-700 mx-auto lg:mx-0">
                      {[
                        { time: timeStr, location: locationStr },
                        {
                          time: secondaryTimeStr,
                          location: secondaryLocationStr,
                        },
                      ]
                        .filter(({ time, location }) => time || location)
                        .flatMap(({ time, location }, rowIdx) => [
                          time ? (
                            <h2
                              key={`time-${rowIdx}`}
                              className="text-subTitleColor whitespace-nowrap"
                            >
                              {time}
                            </h2>
                          ) : null,
                          location ? (
                            <h2
                              key={`location-${rowIdx}`}
                              className="text-subTitleColor text-left"
                            >
                              {location}
                            </h2>
                          ) : null,
                        ])}
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
    </>
  );
}
