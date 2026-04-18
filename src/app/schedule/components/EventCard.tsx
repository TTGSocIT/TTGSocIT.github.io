import { type RubricEvent } from "../types";

export default function EventCard({ event }: { event: RubricEvent }) {
  return (
    <a
      href={event.destination}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer"
    >
      {/* Image Container */}
      <div className="w-full h-48 overflow-hidden relative bg-gray-100">
        <img
          src={event.image}
          alt={`Banner for ${event.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="font-bold text-2xl text-gray-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>
        
        <div className="mt-auto">
          <div className="flex flex-col gap-2 mb-6 opacity-80">
            <span className="text-md font-medium text-gray-600">
              {event.formatteddate}
            </span>
            <span className="text-sm font-medium text-gray-600 truncate">
              {event.subtitle}
            </span>
          </div>

          {/* Pricing + rubric link */}
          <div className="pt-4 border-t border-gray-100 flex items-center">
            <span className="font-bold text-lg text-emerald-600">
              {event.info}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}