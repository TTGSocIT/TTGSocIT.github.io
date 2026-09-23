"use client";

import { titleCaseToId } from "@/app/utils/titleCaseToId";
import ImageScrollTitle from "./ImageScrollTitle";
import Image from "next/image";
import Link from "next/link";
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
  photoPath: string;
  photoAlt: string;
  showScheduleLink?: boolean;
  scheduleText?: string; // Specific text can be provided otherwise default to "time and location varies by term"
  optionalBottomJsx?: React.ReactElement; // Optional jsx elements
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
      <div className="w-full relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-20 px-6 md:px-10 w-full max-w-7xl">
          {eventslistHashmap.map(
            (
              {
                title,
                description,
                photoPath,
                photoAlt,
                showScheduleLink,
                scheduleText = "Times & locations vary by term · Check the schedule",
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
                {/* Event Image */}
                <div className="relative w-full lg:w-1/2 lg:h-full my-auto aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={photoPath.startsWith("/") ? photoPath : `/${photoPath}`}
                    alt={photoAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Event Details */}
                <div className="w-full lg:w-1/2 lg:h-full text-left">
                  <h1 className="font-bold text-4xl text-titleColor text-center lg:text-left">
                    {title}
                  </h1>

                  {showScheduleLink && (
                    <div className="mb-4">
                      <Link
                        href="/schedule"
                        className="inline-flex items-center gap-2 text-lg md:text-xl font-medium text-subTitleColor hover:text-titleColor transition-colors group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 opacity-75 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.75}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="underline underline-offset-4 decoration-neutral-300 group-hover:decoration-current transition-all">
                          {scheduleText}
                        </span>
                        <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </Link>
                    </div>
                  )}
                  <p className="mt-1">{description}</p>
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
