const EventCard = () => {
  return (
    <div className="relative group py-5 mx-auto px-3 w-full flex items-center justify-center">
      <div
        className="left-1/2 -translate-x-1/2 top-5 absolute bg-eventColorBg w-[300px] h-[210px] rounded-md
        rotate-[7deg] group-hover:rotate-[5deg] transition-all duration-300"
      />
      <div
        className="relative w-[300px] h-[210px] rotate-[-5deg] rounded-md group-hover:rotate-0
        transition-all duration-300"
      >
        <img
          src="/comp.webp"
          alt="TCG Competitions"
          className="w-[300px] h-[180px] rounded-md"
        />
        <div
          className="absolute bottom-0 left-0 h-10 bg-titleColor text-textColorBg
          w-full rounded-b-md flex items-center justify-center"
        >
          TCG Competitions
        </div>
      </div>
    </div>
  );
};

export default EventCard;
