import { titleCaseToId } from "@/app/utils/titleCaseToId";
import { useCallback } from "react";

import { useRouter } from "next/navigation";

interface EventCardProps {
  name: string;
  image: string;
}

const EventCard1 = ({ name, image }: EventCardProps) => {

  const router = useRouter();
  const handleClick = useCallback(() => {
    const eventId = titleCaseToId(name);
    router.push(`/events?event=${eventId}`);
  }, [name]);

  return (
    <div
      className="relative group py-5 mx-auto px-3 w-full flex items-center justify-center"
      onClick={handleClick}
    >
      <div
        className="left-1/2 -translate-x-1/2 top-5 absolute bg-foreground w-[300px] h-[210px] rounded-md
          rotate-[7deg] group-hover:rotate-[5deg] transition-all duration-300"
      />
      <div
        className="relative w-[300px] h-[210px] rotate-[-5deg] rounded-md group-hover:rotate-0
          transition-all duration-300"
      >
        <img
          src={image}
          alt={name}
          className="w-[300px] h-[180px] rounded-md"
        />
        <div
          className="absolute bottom-0 left-0 h-10 bg-titleColor text-white
            w-full rounded-b-md flex items-center justify-center"
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default EventCard1;
