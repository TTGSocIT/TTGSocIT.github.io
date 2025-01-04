const EventCard = () => {
  return (
    <div className="relative group py-5 mx-auto">
      <div
        className={`left-0 top-5 absolute bg-foreground w-[300px] h-[210px] rounded-md rotate-[7deg] group-hover:rotate-[5deg] transition-all duration-300`}
      />
      <div
        className={`relative w-[300px] h-[210px] rotate-[-5deg] rounded-md group-hover:rotate-0 transition-all duration-300`}
      >
        <img
          src="/hero.webp"
          alt="event"
          className="w-[300px] h-[180px] rounded-md"
        />
        <div
          className="absolute bottom-0 left-0 h-10 bg-primary text-white
        w-full rounded-b-md flex items-center justify-center"
        >
          Place Holder
        </div>
      </div>
    </div>
  );
};

export default EventCard;
