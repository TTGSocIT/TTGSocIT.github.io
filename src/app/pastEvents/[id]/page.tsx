"use client";

import { useState, useEffect } from "react";
import parse from "html-react-parser"
import Link from "next/link";
import { useParams } from "next/navigation";
import { RubricEventDetails } from "../types";

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.id as string;

  const [event, setEvent] = useState<RubricEventDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      if (!eventId) return;

      const url = "https://api.hellorubric.com/";
      
      const detailsObj = {
        eventId: eventId,
      };

      const fetchParams = new URLSearchParams();
      fetchParams.append("details", JSON.stringify(detailsObj));
      fetchParams.append(
        "endpoint",
        "https://appserver.getqpay.com:9090/AppServerSwapnil/event/details"
      );

      try {
        const response = await fetch(url, {
          method: "POST",
          body: fetchParams,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.success && result.eventDetails) {
          setEvent(result.eventDetails);
        } else {
          setEvent(null);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-xl font-bold text-gray-500">Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Event Not Found</h1>
        <Link href="/schedule" className="text-blue-600 hover:underline font-medium">
          &larr; Return to Schedule
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {event.hasBannerImage ? (
        <div 
          className="w-full h-64 md:h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url('${event.bannerImageURL}')` }}
        >
          <div className="w-full h-full bg-black/40"></div>
        </div>
      ) : (
        <div className="w-full h-64 md:h-[400px] bg-blue-600"></div>
      )}

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 -mt-16 relative z-10 mx-4 md:mx-auto">
        <Link 
          href="/schedule" 
          className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-800 mb-8 transition-colors group"
        >
          <span className="mr-4 transition-transform">
            &larr;
          </span>
          Back to Schedule
        </Link>

        {/* Event Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {event.eventName}
        </h1>
        <p className="text-md text-gray-500 font-normal mb-5">Ended: {event.eventEndTime}</p>

        <hr className="border-gray-200 mb-10" />

        {/* Event Description (Rendering raw HTML) */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Details</h2>
        <div>{parse(event.eventDescription)}</div> 

      </div>
    </div>
  );
}