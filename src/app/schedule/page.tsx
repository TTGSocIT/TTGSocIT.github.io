"use client";

import { useState, useEffect } from "react";
import ImageScrollTitle from "./components/ImageScrollTitle";
import EventCard from "./components/EventCard";
import PastEventCard from "./components/PastEventCard";
import { RubricApiResponse, type RubricEvent } from "./types";

// Page showing all upcoming and past events (pulled from rubric API)
export default function Schedule() {
  const [todayEvents, setTodayEvents] = useState<RubricEvent[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<RubricEvent[]>([]);
  const [pastEvents, setPastEvents] = useState<RubricEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get's society data from rubric API
    const fetchSocietyData = async () => {
      const url = "https://api.hellorubric.com/";
      const detailsObj = {
        societyid: "12717",
        domain: "campus.hellorubric.com",
      };

      const params = new URLSearchParams();
      params.append("details", JSON.stringify(detailsObj));
      params.append("endpoint", "getSocietyLandingPage");

      try {
        const response = await fetch(url, {
          method: "POST",
          body: params,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json() as RubricApiResponse;

        // Get events section from json
        const eventsSection = result.sections.find(
          (sec) => sec.sectionname === "Events"
        );

        if (eventsSection && eventsSection.array) {
          const allEvents: RubricEvent[] = eventsSection.array;
          
          const now = new Date();
          const todayString = now.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          })
          const isToday = (event: RubricEvent) => event.formatteddate.includes(todayString);

          setTodayEvents(allEvents.filter((e) => isToday(e)));
          setUpcomingEvents(allEvents.filter((e) => e.upcoming === 1 && !isToday(e)));
          setPastEvents(allEvents.filter((e) => e.upcoming === 0 && !isToday(e)));
        }
      } catch (err) {
        console.error("Error fetching schedule:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSocietyData();
  }, []);

  const headerClasses = "text-4xl font-extrabold text-gray-900 mb-8 border-b-4 pb-2";
  const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className="flex flex-col mb-20 bg-gray-50 min-h-screen">
      <ImageScrollTitle title="Event Schedule" imgPath="/hero.webp" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-16 mt-16">
        {isLoading ? (
          <div className="flex items-center justify-center mt-20 text-2xl font-bold text-gray-500">
            Loading society schedule...
          </div>
        ) : (
          <>
            {/* TODAY'S EVENTS */}
            {todayEvents.length > 0 && (
              <section>
                <h2 className={`${headerClasses} border-emerald-600`}> Today </h2>
                <div className={gridClasses}>
                  {todayEvents.map((event) => (
                    <EventCard key={event.eventid} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* UPCOMING EVENTS */}
            {upcomingEvents.length > 0 && (
              <section>
                <h2 className={`${headerClasses} border-blue-600`}> Upcoming Events </h2>
                <div className={gridClasses}>
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.eventid} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* PAST EVENTS */}
            {pastEvents.length > 0 && (
              <section>
                <h2 className={`${headerClasses} border-gray-400 text-gray-600`}> Past Events </h2>
                <div className={gridClasses}>
                  {pastEvents.map((event) => (
                    <PastEventCard key={event.eventid} event={event} />
                  ))}
                </div>
              </section>
            )}

            {/* Fallback */}
            {upcomingEvents.length === 0 && pastEvents.length === 0 && (
              <h3 className="text-2xl font-bold justify-center text-center text-gray-600">
                No events found.
              </h3>
            )}
          </>
        )}
      </div>
    </div>
  );
}