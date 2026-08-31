import Link from "next/link";
import { type RubricEvent } from "../types";
import Image from "next/image";

// TODO make a way to upload images and prevent pressing on the past event if no photos exist
// Each card is clickable and leads to a page for that specific event
export default function PastEventCard({ event }: { event: RubricEvent }) {
  return (
    <Link href={`/pastEvents/${event.eventid}`} className="group">
      <div className="flex flex-col h-full bg-white rounded-3xl shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden">
        
        {/* Image Container with Hover Overlay */}
        <div className="w-full aspect-[16/9] overflow-hidden relative bg-gray-100">
          <Image
            src={event.image}
            alt={`Banner for ${event.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow text-left bg-gray-50/50">
            {/* indicate link through highlight */}
          <h3 className="font-bold text-xl text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>
          
          <div className="flex flex-col gap-1 mt-auto">
            <span className="text-md font-medium text-gray-500">
              {event.formatteddate}
            </span>
            <span className="text-sm font-medium text-gray-500 truncate">
              {event.subtitle}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}